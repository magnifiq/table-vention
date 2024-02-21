import {Form} from "../Form/Form.jsx"
import {Modal, Box} from '@mui/material'
import PropTypes from "prop-types";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalWindow=({onOpen, onClose, infoItem})=>{
    return (
      <Modal open={onOpen} onClose={onClose}>
        <Box sx={style}>
           <Form defaultInputForm={infoItem} textButton="Edit element"/>
        </Box>
      </Modal>
    );
}

ModalWindow.PropTypes={
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    infoItem: PropTypes.object
}