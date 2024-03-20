import PropTypes from "prop-types";

import { Button } from "@mui/material";

export const OperationButton = ({
  text,
  style,
  variant,
  ...props
}) => (
  <Button variant={variant} style={style} {...props}> 
    {text}
  </Button>
);

OperationButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.string,
};

OperationButton.defaultProps = {
  style: { marginBottom: "10px", marginTop: "10px" },
  variant: "contained",
};
