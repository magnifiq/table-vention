/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import {
  Box,
  Paper,
  Table as MuiTable,
  TablePagination,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TableSortLabel,
} from "@mui/material";

function EnhancedTableHead({
  numSelected,
  order,
  orderBy,
  onSelectAllClick,
  onRequestSort,
  rowCount,
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all items",
            }}
          />
        </TableCell>
        <TableCell
          key="id"
          align="right"
          padding="normal"
          sortDirection={orderBy === "id" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "id"}
            direction={orderBy === "id" ? order : "asc"}
            onClick={createSortHandler("id")}
          >
            ID
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="title"
          align="right"
          padding="normal"
          sortDirection={orderBy === "title" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "title"}
            direction={orderBy === "title" ? order : "asc"}
            onClick={createSortHandler("title")}
          >
            Title
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="description"
          align="right"
          padding="normal"
          sortDirection={orderBy === "description" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "description"}
            direction={orderBy === "description" ? order : "asc"}
            onClick={createSortHandler("description")}
          >
            Description
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="price"
          align="right"
          padding="normal"
          sortDirection={orderBy === "price" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "price"}
            direction={orderBy === "price" ? order : "asc"}
            onClick={createSortHandler("price")}
          >
            Price
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="discountPercentage"
          align="right"
          padding="normal"
          sortDirection={orderBy === "discountPercentage" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "discountPercentage"}
            direction={orderBy === "discountPercentage" ? order : "asc"}
            onClick={createSortHandler("discountPercentage")}
          >
            Discount Percentage
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="rating"
          align="right"
          padding="normal"
          sortDirection={orderBy === "rating" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "rating"}
            direction={orderBy === "rating" ? order : "asc"}
            onClick={createSortHandler("rating")}
          >
            Rating
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="stock"
          align="right"
          padding="normal"
          sortDirection={orderBy === "stock" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "stock"}
            direction={orderBy === "stock" ? order : "asc"}
            onClick={createSortHandler("stock")}
          >
            Stock
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="brand"
          align="right"
          padding="normal"
          sortDirection={orderBy === "brand" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "brand"}
            direction={orderBy === "brand" ? order : "asc"}
            onClick={createSortHandler("brand")}
          >
            Brand
          </TableSortLabel>
        </TableCell>
        <TableCell
          key="category"
          align="right"
          padding="normal"
          sortDirection={orderBy === "category" ? order : false}
        >
          <TableSortLabel
            active={orderBy === "category"}
            direction={orderBy === "category" ? order : "asc"}
            onClick={createSortHandler("category")}
          >
            Category
          </TableSortLabel>
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
};

export function Table({ data }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("title");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <MuiTable
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      {row.discountPercentage}
                    </TableCell>
                    <TableCell align="right">{row.rating}</TableCell>
                    <TableCell align="right">{row.stock}</TableCell>
                    <TableCell align="right">{row.brand}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={9} />
                </TableRow>
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountPercentage: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
