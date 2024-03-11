import { Form } from "../Form/Form.jsx";
import { Modal, Box } from "@mui/material";
import propTypes from "prop-types";
import styles from "./ModalWindow.module.css";

export const ModalWindow = ({
  isOpen,
  setIsModalOpen,
  infoItem,
  flagEdit,
  onEdit,
}) => {
  const handleClose = (e, reason) => {
    if (reason === "backdropClick") {
      setIsModalOpen(false);
    }
    else if (reason === "escapeKeyDown") {
      setIsModalOpen(false);
    } 
  };
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box className={styles.module}>
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
  onOpen: propTypes.bool.isRequired,
  onClose: propTypes.bool,
  infoItem: propTypes.object,
  flagEdit: propTypes.bool,
  onEdit: propTypes.func,
};

ModalWindow.defaultProps={
  infoItem: {}
}