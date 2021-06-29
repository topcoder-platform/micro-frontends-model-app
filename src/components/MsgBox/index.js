import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const MsgBox = (props) => {
  let icon;
  if (props.iconType == "info") {
    icon = <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 20a8 8 0 110-16 8 8 0 010 16zm0-8.5a1 1 0 00-1 1V15a1 1 0 002 0v-2.5a1 1 0 00-1-1zm0-1.125a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75z" fill="currentColor" fillRule="evenodd"></path></svg>;
  } else if (props.iconType == "error") {
    icon = <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M13.485 11.929l2.122-2.121a1 1 0 00-1.415-1.415l-2.12 2.122L9.95 8.393a1 1 0 00-1.414 1.415l2.12 2.12-2.12 2.122a1 1 0 001.414 1.414l2.121-2.12 2.121 2.12a1 1 0 101.415-1.414l-2.122-2.121zM12 20a8 8 0 110-16 8 8 0 010 16z" fill="currentColor" fillRule="evenodd"></path></svg>;
  } else if (props.iconType == "success") {
    icon = <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 20a8 8 0 110-16 8 8 0 010 16zm1.364-10.964l-2.152 4.11-1.543-1.39a1 1 0 10-1.338 1.487l2.5 2.25a1 1 0 001.555-.279l2.75-5.25a1 1 0 00-1.772-.928z" fill="currentColor" fillRule="evenodd"></path></svg>;
  } else {
    icon = <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 20a8 8 0 110-16 8 8 0 010 16zm0-8.5a1 1 0 00-1 1V15a1 1 0 002 0v-2.5a1 1 0 00-1-1zm0-1.125a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75z" fill="currentColor" fillRule="evenodd"></path></svg>;
  }
  return (
    <div className={styles.msgBox} style={{ backgroundColor: props.bgColor, color: props.txtColor }}>
      <span className={styles.icon} style={{ color: props.iconColor }}>{icon}</span>
      <div className={styles.msg}>{props.children}</div>
    </div>
  );
};

export default MsgBox;