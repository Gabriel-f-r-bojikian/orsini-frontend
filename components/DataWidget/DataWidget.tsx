import styles from "./datawidget.module.scss";

interface DataProps {
    label: String;
    data: String;
}

export default function DataWidget(props: DataProps) {
    return(
        <div className={styles.dataWidget}>
            <div className={styles.dataLabel}>
                <p>{props.label}</p>
            </div>

            <div className={styles.dataValue}>
                <p>{props.data}</p>
            </div>
        </div>
    )
}