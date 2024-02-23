import {
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  TableSortLabel,
} from "@mui/material";
import PropTypes from "prop-types";
import columns from "./tableHeadData.json"

export const EnhancedTableHead=({
  numSelected,
  order,
  orderBy,
  onSelectAllClick,
  onRequestSort,
  rowCount,
  color,
  padding,
  align
}) =>{
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color={color}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all items",
            }}
          />
        </TableCell>

        {columns.map((column) => (
          <TableCell
            key={column.key}
            align={align}
            padding={padding}
            sortDirection={orderBy === column.key ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.key}
              direction={orderBy === column.key ? order : "asc"}
              onClick={createSortHandler(column.key)}
            >
              {column.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          key="operations"
          align="center"
          padding={padding}
          colSpan={2}
        >
          Operations
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  color: PropTypes.string,
  padding: PropTypes.string,
  align: PropTypes.string
};

EnhancedTableHead.defaultProps={
    color: "primary",
    align: "right",
    padding: "normal"
}
