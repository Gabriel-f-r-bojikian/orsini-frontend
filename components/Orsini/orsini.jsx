import styles from "./orsini.module.scss";

import DataTray from "../DataTray/DataTray";
import Header from "../Header/header";
import OscillographyChart from "../OscillographyChart/OscillographyChart";

export default function Orsini() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <Header />
        <img src="logo_lprot.jfif" alt="logo lprot" />
        <OscillographyChart />
        <DataTray />
      </div>
    </div>
  )
}
