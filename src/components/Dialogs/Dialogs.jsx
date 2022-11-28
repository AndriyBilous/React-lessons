import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <div className={styles.dialog + ' ' + styles.active}>Andrey</div>
        <div className={styles.dialog}>Dmitriy</div>
        <div className={styles.dialog}>Dariya</div>
        <div className={styles.dialog}>Anna</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hello</div>
        <div className={styles.message}>Holla</div>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>Greetings</div>
      </div>
    </div>
  );
};

export default Dialogs;
