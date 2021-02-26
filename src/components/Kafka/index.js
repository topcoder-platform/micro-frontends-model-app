import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import config from "../../../config";
import { Code } from "../CodeRenderer";
import { isNull, isEmpty } from "lodash";

const Kafka = (props) => {
  let [kafkaGetStatusData, setKafkaGetStatusData] = useState({
    status: "",
    data: {},
  });
  let [kafkaPostData, setKafkaPostData] = useState({
    name: "Kafka Test Event",
    description: "This is a Kafka test event",
  });
  let [kafkaPostStatusData, setKafkaPostStatusData] = useState({
    status: "",
  });
  let [toggle, setToggle] = useState({
    disable: true,
    buttonTxt: "Try It Out",
  });

  function executeGetClick() {
    setKafkaGetStatusData((prevState) => {
      return Object.assign({}, prevState, { status: " Executing.." });
    });
    fetch(`${config.KAFKA_API}/receive`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setKafkaGetStatusData((prevState) => {
            return Object.assign({}, prevState, {
              status: " Success",
              data: data,
            });
          });
        } else {
          setKafkaGetStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " Failed" });
          });
        }
      })
      .catch((error) => {
        setKafkaGetStatusData((prevState) => {
          return Object.assign({}, prevState, { status: error.toString() });
        });
      });
  }

  function executePostClick() {
    setKafkaPostStatusData((prevState) => {
      return Object.assign({}, prevState, { status: " Executing.." });
    });
    const payload = {
      payload: JSON.stringify(kafkaPostData),
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch(`${config.KAFKA_API}/publish`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0 && isNull(data[0].error)) {
          setKafkaPostStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " Success" });
          });
        } else if (data.hasOwnProperty("message")) {
          setKafkaPostStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " " + data.message });
          });
        } else {
          setKafkaPostStatusData((prevState) => {
            return Object.assign({}, prevState, { status: " Failed" });
          });
        }
      })
      .catch((error) => {
        setKafkaPostStatusData((prevState) => {
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
    setKafkaPostData((prevState) => {
      return Object.assign({}, prevState, data);
    });
  }

  return (
    <div>
      <div className={styles.box}>
        <p>
          Here is a demonstration of how we can make a get, post api request to
          fetch data from Kafka.
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
        In the example below you can receive a message from topic
        `test.new.bus.events`
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
      {!isEmpty(kafkaGetStatusData.data) && !toggle.disable && (
        <Code
          codeString={JSON.stringify(kafkaGetStatusData.data, null, 4)}
          language="json"
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
          {kafkaGetStatusData.status}
        </p>
      </div>
      <h3 className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>
        Post Request
      </h3>
      <p>
        In the example below you can publish a new message into topic
        `test.new.bus.events`
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
          value={kafkaPostData.name}
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
          value={kafkaPostData.description}
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
          {kafkaPostStatusData.status}
        </p>
      </div>
    </div>
  );
};

export default Kafka;
