import { modalPortalId } from "pages/_document";
import PortalHoc from "./PortalHoc";
import styles from "./Modal.module.css";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default PortalHoc(Modal, `#${modalPortalId}`);
