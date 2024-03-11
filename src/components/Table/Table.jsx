/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { EnhancedTableHead } from "./EnhancedTableHead";
import styles from "./Table.module.css";
import {
  Box,
  Paper,
  Table as MuiTable,
  TablePagination,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Checkbox,
} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useMemo, useState } from "react";
import useTableLogic from "../../hooks/useTableLogic";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const Table = ({ data, setData, color, align, variant, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const {
    dataTable,
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    handleRequestSort,
    handleSelectAllClick,
    handleClick,
    handleChangePage,
    handleChangeRowsPerPage,
    isSelected,
    emptyRows,
    stableSort,
    getComparator,
    //handleTableClick,
  } = useTableLogic(data);

  const visibleRows = useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [order, orderBy, page, rowsPerPage, data]
  );
  const openModal = (idItem) => {
    setIsModalOpen(true);
    setSelectedItemId(parseInt(idItem, 10));
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
  };
  const getSelectedInfo = () => data.filter((el) => el.id === selectedItemId)[0];

  //we perform here event delegation
  const handleTableClick = (e) => {
    const [typeOfAction, idItem] = e.target.id.split("__");
    if (typeOfAction == "edit") {
      openModal(idItem);
      getSelectedInfo();
    } else {
      const idNum = parseInt(idItem, 10);
      setData((prevData) => prevData.filter((el) => el.id !== idNum));
    }
  };
  
  return (
    <Box className={styles.box}>
      {isModalOpen && (
        <ModalWindow
          flagEdit='true'
          isOpen={isModalOpen}
          onClose={closeModal}
          infoItem={getSelectedInfo()}
          onEdit={onEdit}
        />
      )}
      <Paper className={styles.paper}>
        <TableContainer>
          <MuiTable
            className={styles.table}
            aria-labelledby="tableTitle"
            size="medium"
            onClick={handleTableClick}
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
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color={color}
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, row.id)}
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
                    <TableCell align={align}>{row.title}</TableCell>
                    <TableCell align={align}>{row.description}</TableCell>
                    <TableCell align={align}>{row.price}</TableCell>
                    <TableCell align={align}>
                      {row.discountPercentage}
                    </TableCell>
                    <TableCell align={align}>{row.rating}</TableCell>
                    <TableCell align={align}>{row.stock}</TableCell>
                    <TableCell align={align}>{row.brand}</TableCell>
                    <TableCell align={align}>{row.category}</TableCell>
                    <TableCell align={align}>
                      <Button
                        variant={variant}
                        id={`edit__${row.id}`}
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align={align}>
                      <Button
                        variant={variant}
                        id={`delete__${row.id}`}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
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
};

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
  color: PropTypes.string,
  align: PropTypes.string,
  variant: PropTypes.string,
  setData: PropTypes.func,
};

Table.defaultProps = {
  color: "primary",
  align: "right",
  variant: "outlined",
};
export default Table;
