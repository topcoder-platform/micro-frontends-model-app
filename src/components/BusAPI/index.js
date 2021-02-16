import React, { useState, useEffect } from 'react' 
import ReactDOM from 'react-dom' 
import styles from "./styles.module.scss";
import config from "../../../config";

const BusAPI = (props) => { 
  let [busData, setBusData] = useState({name: "Publish Event Name", description: "This is event to publish event via TC Bus API"});
  let [busStatusData, setBusStatusData] = useState({ status: ""});
  let [toggle, setToggle] = useState({ disable: true, buttonTxt: "Try It Out" });

  useEffect(() => {
    // send HTTP request
    // save response to variable
  }, [])

  function executeClick() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(busData)
    };
    busStatusData = fetch(config.BUS_API, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.hasOwnProperty("id")) {
          setBusStatusData(prevState => { return Object.assign({}, prevState, { status: " Success" }) })
        } else {
          setBusStatusData(prevState => { return Object.assign({}, prevState, { status: " Failed" }) })
        }
      })
      .catch(error => {
        setBusStatusData(prevState => { return Object.assign({}, prevState, { status: error.toString() }) })
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
    setBusData(prevState => {
      return Object.assign({}, prevState, data);
    });
  }

  return ( 
    <div>
      <div className={styles.box}>
        <p>Here is a demonstration of triggering an api call to model bus api with parameters: Name and Desciption. The Bus API will inturn demonstarte handling the request and make publish (write) events to Kafka via topcoder bus api</p>
        <div className={styles.tryItOut}><button type='button' className={toggle.disable ? styles.tryItOutBtn : styles.tryItOutBtnCancel} onClick={tryItOutClick}>{toggle.buttonTxt}</button></div>
        <p>In the example below you can provide the name and description to kafka for topic 'test.new.bus.events'</p>
      </div>
      <label htmlFor="name"><div className={styles.boxTxt}>Name: </div>
        <input name="name" id="name" type="text" className={styles.boxTxt} value={busData.name} disabled={toggle.disable} onChange={(e) => handleChange({ name: e.target.value })} required />
      </label>
      <label htmlFor="description"><div className={styles.boxTxt}>Description: </div>
        <input name="description" id="description" className={styles.boxTxt} type="text" value={busData.description} disabled={toggle.disable} onChange={(e) => handleChange({ description: e.target.value })} required />
      </label>
      <div className={styles.execute}><button type='button' disabled={toggle.disable} onClick={executeClick}>Execute</button></div>
      <div className={styles.box}>
        <div className={styles.boxTxt}>Status : </div>
        <p>{busStatusData.status}</p>
      </div>
    </div>
  )
};

export default BusAPI;