import { useState } from "react";
import PropTypes from "prop-types";
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

export const Table = ({ data, setData, color, align, variant, onEdit }) => {
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
    setSelectedItemId
  );

  return (
    <Box className={styles.box}>
      {isModalOpen && (
        <ModalWindow
          flagEdit={true}
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
  setData: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  page: PropTypes.number,
};

Table.defaultProps = {
  color: "primary",
  align: "right",
  variant: "outlined",
  page: 0,
};
export default Table;