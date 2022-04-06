import styles from "./datatray.module.scss";

// import DataWidget from "../DataWidget/DataWidget";
import DataWidget from "../DataWidget/DataWidget.tsx";

export default function DataTray(props) {
    return(
        <div className={styles.dataTray}>
            <DataWidget label={"Label"} data={"12345 V"} />
            <DataWidget label={"Label"} data={"12345 V"} />
            <DataWidget label={"Label"} data={"12345 V"} />
            <DataWidget label={"Label"} data={"12345 V"} />
            <DataWidget label={"Label"} data={"12345 V"} />
            <DataWidget label={"Label"} data={"12345 V"} />
        </div>
    )
}