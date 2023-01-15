import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = (props: ITextInput) => {
  return <input {...props} className={styles.input} />;
};
