import PropTypes from "prop-types";

import { Button as MuiButton} from "@mui/material";

const CustomButton = ({ text, style, variant, ...props }) => (
  <MuiButton variant={variant} style={style} {...props}>
    {text}
  </MuiButton>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.string,
};

CustomButton.defaultProps = {
  style: { marginBottom: "10px", marginTop: "10px" },
  variant: "contained",
};
export default CustomButton;