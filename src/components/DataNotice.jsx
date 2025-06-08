import { useState, useEffect } from "react";
import styles from "./DataNotice.module.scss";

export default function DataNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("dataNoticeShown")) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("dataNoticeShown", "yes");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={styles.notice}>
      <p>
        Этот сайт не собирает ваши данные. Всё создано для людей, которые хотят
        узнать больше о Vincent Velasco.
      </p>
      <button onClick={accept}>Понятно</button>
    </div>
  );
}