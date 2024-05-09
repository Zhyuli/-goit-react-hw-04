import { useState } from "react";
import styles from "./WaterForm.module.css";

const WaterForm = () => {
  const [amount, setAmount] = useState(50);
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toTimeString().substring(0, 5);
  });

  const handleIncrease = () => setAmount((prev) => prev + 50);
  const handleDecrease = () => setAmount((prev) => (prev > 50 ? prev - 50 : 0));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Water</h1>
      <p className={styles.subtitle}>Choose a value:</p>
      <div className={styles.counter}>
        <button className={styles.button} onClick={handleDecrease}>
          -
        </button>
        <span className={styles.value}>{amount} ml</span>
        <button className={styles.button} onClick={handleIncrease}>
          +
        </button>
      </div>
      <label className={styles.label}>
        Recording time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Enter the value of the water used:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.saveButton}>
        Save
      </button>
    </div>
  );
};

export default WaterForm;
