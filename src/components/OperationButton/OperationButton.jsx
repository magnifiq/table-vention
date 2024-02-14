import styles from "./OperationButton.module.css"
import PropTypes from "prop-types";
export function OperationButton({text, onAction}){
    return(
        <button className={styles.button} onClick={onAction}>{text}</button>
    )
}
OperationButton.propTypes = {
  text: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};
