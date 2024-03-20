import propTypes from "prop-types";
import { TableCell, TableRow, Checkbox, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const BodyTable = ({
  row,
  index,
  isSelected,
  handleClick,
  color,
  align,
  variant,
}) => {
  const {
    id,
    images,
    thumbnail,
    ...details
  } = row;
  const detailsArr = Object.values(details);
  const isItemSelected = isSelected(id);
  const labelId = `enhanced-table-checkbox-${index}`;

  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={id}
      selected={isItemSelected}
      sx={{ cursor: "pointer" }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color={color}
          checked={isItemSelected}
          onClick={(event) => handleClick(event, id)}
          inputProps={{
            "aria-labelledby": labelId,
          }}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {id}
      </TableCell>
      {detailsArr.map((detail, idx) => (
        <TableCell key={`${idx}-${detail.title}`} align={align}>
          {detail}
        </TableCell>
      ))}
      <TableCell align={align}>
        <Button variant={variant} id={`edit__${id}`} startIcon={<EditIcon />}>
          Edit
        </Button>
      </TableCell>
      <TableCell align={align}>
        <Button
          variant={variant}
          id={`delete__${id}`}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

BodyTable.propTypes = {
  row: propTypes.object.isRequired,
  index: propTypes.number.isRequired,
  isSelected: propTypes.func.isRequired,
  handleClick: propTypes.func.isRequired,
  color: propTypes.string.isRequired,
  align: propTypes.string.isRequired,
  variant: propTypes.string.isRequired,
  id: propTypes.number,
  title: propTypes.string,
  description: propTypes.string,
  price: propTypes.number,
  discountPercentage: propTypes.number,
  rating: propTypes.number,
  stock: propTypes.number,
  brand: propTypes.string,
  category: propTypes.string,
};

BodyTable.defaultProps = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
};
export default BodyTable;
