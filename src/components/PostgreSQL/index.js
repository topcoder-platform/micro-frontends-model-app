import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import MTable from "../../components/MTable";
import config from "../../../config";

const PostgreSQL = (props) => {
  let [postgreSQLGetStatusData, setPostgreSQLGetStatusData] = useState({
    status: "",
    data: [],
    columns: [
      { title: "id", field: "id" },
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Created At", field: "createdAt" },
      { title: "Updated At", field: "updatedAt" },
    ],
  });
  let [postgreSQLPostData, setPostgreSQLPostData] = useState({
    name: "Ferrari Roma",
    description: "A fast Ferrari",
  });
  let [postgreSQLPostStatusData, setPostgresPostDBStatusData] = useState({
    status: "",
  });
  let [toggle, setToggle] = useState({
    disable: true,
    buttonTxt: "Try It Out",
  });

  function executeGetClick() {
    setPostgreSQLGetStatusData((prevState) => {
      return Object.assign({}, prevState, { status: " Executing.." });
    });
    fetch(config.POSTGRESQL_API)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPostgreSQLGetStatusData((prevState) => {
            return Object.assign({}, prevState, {
              status: " Success",
              data: data,
            });
          });
        } else {
          setPostgreSQLGetStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " Failed" });
          });
        }
      })
      .catch((error) => {
        setPostgreSQLGetStatusData((prevState) => {
          return Object.assign({}, prevState, { status: error.toString() });
        });
      });
  }

  function executePostClick() {
    setPostgresPostDBStatusData((prevState) => {
      return Object.assign({}, prevState, { status: " Executing.." });
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postgreSQLPostData),
    };
    fetch(config.POSTGRESQL_API, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty("id")) {
          setPostgresPostDBStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " Success" });
          });
        } else if (data.hasOwnProperty("message")) {
          setPostgresPostDBStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " " + data.message });
          });
        } else {
          setPostgresPostDBStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " Failed" });
          });
        }
      })
      .catch((error) => {
        setPostgresPostDBStatusData((prevState) => {
          return Object.assign({}, prevState, { status: error.toString() });
        });
      });
  }

  function tryItOutClick() {
    if (toggle.disable) {
      setToggle((prevState) => {
        return Object.assign({}, prevState, {
          disable: false,
          buttonTxt: "Cancel",
        });
      });
    } else {
      setToggle((prevState) => {
        return Object.assign({}, prevState, {
          disable: true,
          buttonTxt: "Try It Out",
        });
      });
    }
  }

  function handleChange(data) {
    setPostgreSQLPostData((prevState) => {
      return Object.assign({}, prevState, data);
    });
  }

  return (
    <div>
      <div className={styles.box}>
        <p>
          Here is a demonstration of how we can make a get, post api request to
          fetch data from PostgreSQL.
        </p>
        <div className={styles.tryItOut}>
          <button
            type="button"
            className={
              toggle.disable ? styles.tryItOutBtn : styles.tryItOutBtnCancel
            }
            onClick={tryItOutClick}
          >
            {toggle.buttonTxt}
          </button>
        </div>
      </div>
      <h3 className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>
        Get Request
      </h3>
      <p>
        In the example below you can get all the records from table `entities`
      </p>
      <div className={styles.execute}>
        <button
          type="button"
          className={styles.executeBtn}
          disabled={toggle.disable}
          onClick={executeGetClick}
        >
          Execute
        </button>
      </div>
      {postgreSQLGetStatusData.data.length > 0 && !toggle.disable && (
        <MTable
          columns={postgreSQLGetStatusData.columns}
          data={postgreSQLGetStatusData.data}
          title="PostgreSQL entities Table"
          options={{
            search: true,
            paging: true,
            filtering: true,
            exportButton: true,
            showTitle: false,
            toolbar: true,
          }}
        />
      )}
      <div className={styles.box}>
        <div className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>
          Status :{" "}
        </div>
        <p
          className={
            toggle.disable ? styles.statusTxtDisabled : styles.statusTxt
          }
        >
          {postgreSQLGetStatusData.status}
        </p>
      </div>
      <h3 className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>
        Post Request
      </h3>
      <p>
        In the example below you can insert a new record into table `entities`
      </p>
      <label htmlFor="name">
        <div className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>
          Name:{" "}
        </div>
        <input
          name="name"
          id="name"
          type="text"
          className={styles.boxTxt}
          value={postgreSQLPostData.name}
          disabled={toggle.disable}
          onChange={(e) => handleChange({ name: e.target.value })}
          required
        />
      </label>
      <label htmlFor="description">
        <div className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>
          Description:{" "}
        </div>
        <input
          name="description"
          id="description"
          type="text"
          className={styles.boxTxt}
          value={postgreSQLPostData.description}
          disabled={toggle.disable}
          onChange={(e) => handleChange({ description: e.target.value })}
          required
        />
      </label>
      <div className={styles.execute}>
        <button
          type="button"
          className={styles.executeBtn}
          disabled={toggle.disable}
          onClick={executePostClick}
        >
          Execute
        </button>
      </div>
      <div className={styles.box}>
        <div className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>
          Status :{" "}
        </div>
        <p
          className={
            toggle.disable ? styles.statusTxtDisabled : styles.statusTxt
          }
        >
          {postgreSQLPostStatusData.status}
        </p>
      </div>
    </div>
  );
};

export default PostgreSQL;
