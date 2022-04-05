import styles from "./orsini.module.scss";

import DataTray from "../DataTray/DataTray";
import Header from "../Header/header";

export default function Orsini() {
  return (
  <div className={styles.mainDiv}>
    <Header />
    <h1>Hello World</h1>
    <DataTray />
  </div>
  )
}
