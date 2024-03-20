import { useState } from "react";
import propTypes from "prop-types";
import {
  Box,
  Paper,
  Table as MuiTable,
  TablePagination,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import useTableLogic from "./hooks/useTableLogic";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { EnhancedTableHead } from "./Header/EnhancedTableHead";
import BodyTable from "./Body/BodyTable";

import styles from "./Table.module.css";

export const Table = ({ data, setData, color, align, variant, onEdit, initOrderBy }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const {
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
    visibleRows,
    getSelectedInfo,
    handleTableClick,
  } = useTableLogic(
    data,
    setData,
    setIsModalOpen,
    setSelectedItemId,
    initOrderBy
  );

  return (
    <Box className={styles.box}>
      {isModalOpen && (
        <ModalWindow
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          infoItem={getSelectedInfo(selectedItemId)}
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
                return (
                  <BodyTable
                    key={row.id}
                    row={row}
                    index={index}
                    isSelected={isSelected}
                    handleClick={handleClick}
                    color={color}
                    align={align}
                    variant={variant}
                  ></BodyTable>
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
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      discountPercentage: propTypes.number.isRequired,
      rating: propTypes.number.isRequired,
      stock: propTypes.number.isRequired,
      brand: propTypes.string.isRequired,
      category: propTypes.string.isRequired,
    })
  ).isRequired,
  color: propTypes.string,
  align: propTypes.string,
  variant: propTypes.string,
  setData: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
  page: propTypes.number,
};

Table.defaultProps = {
  color: "primary",
  align: "right",
  variant: "outlined",
  page: 0,
  initOrderBy: 'title'
};
export default Table;