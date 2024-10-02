import React from "react";
import styles from "./page.module.css";
import UsaChart from "@/components/UsaChart";
import BRChart from "@/components/BRChart";

export default () =>{
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UsaChart/>
        <BRChart/>
      </main>
    </div>
  );
}