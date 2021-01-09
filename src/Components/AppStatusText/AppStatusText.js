import React from 'react';
import styles from './AppStatusText.module.css'
import {useSelector} from "react-redux";
import {Alert} from "antd";

const style = {
    width: "25%",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "20px"
}

const AppStatusText = () => {
    const appStatusText = useSelector(store => store.app.message)
    const appStatus = useSelector(store => store.app.appStatus)

    const getType = () => {
        switch (appStatus) {
            case 'loading':
                return 'info'
            case 'successes':
                return 'success'
            case 'failed':
                return 'error'
            default:
                return 'info'
        }
    }

    return (
        <div className={styles.wrapper}>
            <Alert
                style={style}
                message={appStatusText}
                type={getType()}
                showIcon
            />
        </div>
    );
};

export default AppStatusText;
