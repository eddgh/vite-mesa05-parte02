import styles from './input.module.css';

export function Input(props) {
  return (
    <input
      {...props}
      className={styles.Input}
    />
  );
}