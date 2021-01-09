import React from 'react';
import catLoader from '../../assets/img/catPreloader.gif'
import styles from './AppStatusBox.module.css'
import AppStatusText from "../AppStatusText/AppStatusText";
import sleepCat from '../../assets/img/slipping cat.gif'


const AppStatusBox = (props) => {
    return (
        <div className={styles.wrapper}>
           <img className={styles.img} src={props.type === "sleep"? sleepCat: catLoader} alt={"catLoader"}/>
           <AppStatusText/>
        </div>
    );
};

export default AppStatusBox;
