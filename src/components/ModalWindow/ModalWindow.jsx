import {Form} from "../Form/Form.jsx"

import propTypes from "prop-types";
import styles from "./ModalWindow.module.css"



export const ModalWindow=({onOpen, onClose, infoItem, flagEdit, onEdit})=>{
  
    return (
      <Modal open={onOpen} onClose={onClose}>
        <Box className={styles.module}>
          <Form
            flagEdit={flagEdit}
            defaultInputForm={infoItem}
            textButton="Edit element"
            onEdit={onEdit}
          />
        </Box>
      </Modal>
    );
}

ModalWindow.propTypes = {
  onOpen: propTypes.bool,
  onClose: propTypes.bool,
  infoItem: propTypes.object,
  flagEdit: propTypes.bool,
  onEdit: propTypes.func,
};
