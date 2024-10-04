import React from "react";
import styles from "./page.module.css";
import UsaChart from "@/components/UsaChart";
import BrChart from "@/components/BrChart";
import { getGeoData, getGeoLocation } from "@/actions/request";

export default async () => {
  const geoData = await getGeoData();
  const geoLocation = await getGeoLocation(geoData);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UsaChart />
        <BrChart geoData={geoData} geoLocation={geoLocation} />
      </main>
    </div>
  );
};
