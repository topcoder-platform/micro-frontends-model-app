import React, { useState, useEffect } from 'react' 
import ReactDOM from 'react-dom' 
import styles from "./styles.module.scss";
import MTable from "../../components/MTable"
import config from "../../../config";

const DynamoDB = (props) => { 
  let [dynamoDBGetStatusData, setDynamoDBGetStatusData] = useState({ status: "", data: [], columns: [{ title: "id", field: "id" }, { title: "Name", field: "name" }] });
  let [dynamoDBPostData, setDynamoDBPostData] = useState({ name: "Kitty" });
  let [dynamoDBPostStatusData, setDynamoPostDBStatusData] = useState({ status: ""});
  let [toggle, setToggle] = useState({ disable: true, buttonTxt: "Try It Out" });

  function executeGetClick() {
    setDynamoDBGetStatusData(prevState => { return Object.assign({}, prevState, { status: " Executing.." }) })
    fetch(config.DYNAMODB_API)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setDynamoDBGetStatusData(prevState => { return Object.assign({}, prevState, { status: " Success", data: data }) })
        } else {
          setDynamoDBGetStatusData(prevState => { return Object.assign({}, prevState, { status: " Failed" }) })
        }
      })
      .catch(error => {
        setDynamoDBGetStatusData(prevState => { return Object.assign({}, prevState, { status: error.toString() }) })
      })
  }
  
  function executePostClick() {
    setDynamoPostDBStatusData(prevState => { return Object.assign({}, prevState, { status: " Executing.." }) })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dynamoDBPostData)
    };
    fetch(config.DYNAMODB_API, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.hasOwnProperty("id")) {
          setDynamoPostDBStatusData(prevState => { return Object.assign({}, prevState, { status: " Success" }) })
        } else if (data.hasOwnProperty("message")) {
          setDynamoPostDBStatusData(prevState => { return Object.assign({}, prevState, { status: " " + data.message }) })
        } else {
          setDynamoPostDBStatusData(prevState => { return Object.assign({}, prevState, { status: " Failed" }) })
        }
      })
      .catch(error => {
        setDynamoPostDBStatusData(prevState => { return Object.assign({}, prevState, { status: error.toString() }) })
      })
  }

  function tryItOutClick() {
    if (toggle.disable) {
      setToggle(prevState => { return Object.assign({}, prevState, { disable: false, buttonTxt: "Cancel" }) })
    } else {
      setToggle(prevState => { return Object.assign({}, prevState, { disable: true, buttonTxt: "Try It Out" }) })
    }
  }

  function handleChange(data) {
    setDynamoDBPostData(prevState => {
      return Object.assign({}, prevState, data);
    });
  }

  return ( 
    <div>
      <div className={styles.box}>
        <p>Here is a demonstration of how we can make a get, post api request to fecth data from DynamoDB.</p>
        <div className={styles.tryItOut}><button type='button' className={toggle.disable ? styles.tryItOutBtn : styles.tryItOutBtnCancel} onClick={tryItOutClick}>{toggle.buttonTxt}</button></div>
      </div>
      <h3 className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>Get Request</h3>
      <p>In the example below you can get all the records from table `cats`</p>
      <div className={styles.execute}><button type='button' className={styles.executeBtn} disabled={toggle.disable} onClick={executeGetClick}>Execute</button></div>
      {dynamoDBGetStatusData.data.length > 0 && !toggle.disable && 
        <MTable 
          columns={dynamoDBGetStatusData.columns}
          data={dynamoDBGetStatusData.data}
          title="DynamoDB Cats Table" 
          options={{ search: true, paging: true, filtering: true, exportButton: true, showTitle: false, toolbar: true }} />
      }
      <div className={styles.box}>
        <div className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>Status : </div>
        <p className={toggle.disable ? styles.statusTxtDisabled : styles.statusTxt}>{dynamoDBGetStatusData.status}</p>
      </div>
      <h3 className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>Post Request</h3>
      <p>In the example below you can insert a new record into table `cats`</p>
      <label htmlFor="name"><div className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>Name: </div>
        <input name="name" id="name" type="text" className={styles.boxTxt} value={dynamoDBPostData.name} disabled={toggle.disable} onChange={(e) => handleChange({ name: e.target.value })} required />
      </label>
      <div className={styles.execute}><button type='button' className={styles.executeBtn} disabled={toggle.disable} onClick={executePostClick}>Execute</button></div>
      <div className={styles.box}>
        <div className={toggle.disable ? styles.boxTxtDisabled : styles.boxTxt}>Status : </div>
        <p className={toggle.disable ? styles.statusTxtDisabled : styles.statusTxt}>{dynamoDBPostStatusData.status}</p>
      </div>
    </div>
  )
};

export default DynamoDB;