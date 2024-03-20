import PropTypes from "prop-types";
import { Link, useMatch } from "react-router-dom";

import styles from "./CustomLink.module.css";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link to={to} className={match ? styles.active : styles.inactive} {...props}>
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default CustomLink;
