import { Form } from "../Form/Form.jsx";
import { Modal, Box } from "@mui/material";
import propTypes from "prop-types";
import styles from "./ModalWindow.module.css";

export const ModalWindow = ({
  isOpen,
  onClose,
  infoItem,
  flagEdit,
  onEdit,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
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