import Modal from "./Modal";
import styles from "./Cart.module.css";
const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <div className={styles.total}>
          {" "}
          Username {
            <p className={styles["unfoundName"]}> {props.shownName}</p>
          }{" "}
          not found{" "}
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
