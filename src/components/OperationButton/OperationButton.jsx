import PropTypes from "prop-types";
import { Button } from "@mui/material";
export function OperationButton({text, onAction}){
    return(
      <Button onClick={onAction} variant="contained">
        {text}
      </Button>
    )
}
OperationButton.propTypes = {
  text: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};
