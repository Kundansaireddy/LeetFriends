import Modal from "./Modal";
import styles from "./Cart.module.css";
const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <div className={styles.total}>
          Username <span className={styles.unfoundName}>{props.shownName}</span>{" "}
          not found
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
