import propTypes from "prop-types";
import { Form } from "../Form/Form.jsx";
import { Modal, Box } from "@mui/material";
import useModalClose from "./hooks/useModalClose.js";
import styles from "./ModalWindow.module.css";
import { OperationButton } from "../OperationButton/OperationButton.jsx";

export const ModalWindow = ({
  isOpen,
  setIsModalOpen,
  infoItem,
  flagEdit,
  onEdit,
}) => {
  const { handleClose, handleCloseBtn } = useModalClose({ setIsModalOpen });

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box className={styles.module}>
        <div className={styles.btnClose} onClick={handleCloseBtn}>
          <OperationButton text="Close" />
        </div>
        <Form
          flagEdit={flagEdit}
          defaultInputForm={infoItem}
          textButton="Edit"
          onEdit={onEdit}
        />
      </Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.bool,
  infoItem: propTypes.object.isRequired,
  flagEdit: propTypes.bool.isRequired,
  onEdit: propTypes.func.isRequired,
  setIsModalOpen: propTypes.func.isRequired,
};
ModalWindow.defaultProps = {
  onClose: false,
  flagEdit: true,
};
