import React from "react";
import * as SwitchBase from "@radix-ui/react-switch";
import styles from "../styles/Switch.module.css";

const Switch = (props) => {
  return (
    <SwitchBase.Root {...props} className={styles.switchRoot}>
      <SwitchBase.Thumb className={styles.switchThumb} />
    </SwitchBase.Root>
  );
};

export default Switch;
