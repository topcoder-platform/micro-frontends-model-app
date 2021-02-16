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
        <p>Demonstration of how we can make a get, post api request to fecth data from DynamoDB.</p>
        <div className={styles.tryItOut}><button type='button' className={toggle.disable ? styles.tryItOutBtn : styles.tryItOutBtnCancel} onClick={tryItOutClick}>{toggle.buttonTxt}</button></div>
      </div>
      
      <h3>Get Request</h3>
      <div className={styles.execute}><button type='button' className={styles.executeBtn} disabled={toggle.disable} onClick={executeGetClick}>Execute</button></div>
      {dynamoDBGetStatusData.data.length > 0 &&
        <MTable 
          columns={dynamoDBGetStatusData.columns}
          data={dynamoDBGetStatusData.data}
          title="empty" 
          options={{ search: false, paging: false, filtering: false, exportButton: false, showTitle: false, toolbar: false }} />
      }
      <div className={styles.box}>
        <div className={styles.boxTxt}>Status : </div>
        <p>{dynamoDBGetStatusData.status}</p>
      </div>

      <h3>Post Request</h3>
      <label htmlFor="name"><div className={styles.boxTxt}>Name: </div>
        <input name="name" id="name" type="text" className={styles.boxTxt} value={dynamoDBPostData.name} disabled={toggle.disable} onChange={(e) => handleChange({ name: e.target.value })} required />
      </label>
      <div className={styles.execute}><button type='button' className={styles.executeBtn} disabled={toggle.disable} onClick={executePostClick}>Execute</button></div>
      <div className={styles.box}>
        <div className={styles.boxTxt}>Status : </div>
        <p>{dynamoDBPostStatusData.status}</p>
      </div>
    </div>
  )
};

export default DynamoDB;