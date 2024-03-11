import propTypes from "prop-types";
import { Form } from "../Form/Form.jsx";
import { Modal, Box } from "@mui/material";
import useModalClose from "./hooks/useModalClose.js";
import styles from "./ModalWindow.module.css";

export const ModalWindow = ({
  isOpen,
  setIsModalOpen,
  infoItem,
  flagEdit,
  onEdit,
}) => {
  const handleClose = useModalClose({ setIsModalOpen });

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
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.bool,
  infoItem: propTypes.object.isRequired,
  flagEdit: propTypes.bool.isRequired,
  onEdit: propTypes.func.isRequired,
  setIsModalOpen: propTypes.func.isRequired,
};
ModalWindow.defaultProps = {
  onClose: false,
};
