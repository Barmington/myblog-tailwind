import styles from './formdesign.module.css';

export default function FormDesign({ children }) {
  console.log(styles);

  return (
    <div>
      <span className={styles.formLayout}>{children}</span>
    </div>
  );
}
