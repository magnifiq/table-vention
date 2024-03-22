import { useState, useMemo } from 'react';
import { DIRERECTION_ASC, DIRERECTION_DESC } from '../constants/directions';

const useTableLogic = (initialData, setData, setIsModalOpen, setSelectedItemId, initOrderBy) => {
  const [order, setOrder] = useState(DIRERECTION_ASC);
  const [orderBy, setOrderBy] = useState(initOrderBy);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event,property) => {
    const isAsc = orderBy === property && order === DIRERECTION_ASC;
    setOrder(isAsc ? DIRERECTION_DESC : DIRERECTION_ASC);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = initialData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id) => {
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
    return order === DIRERECTION_DESC
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - initialData.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(initialData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [order, orderBy, page, rowsPerPage, initialData]
  );

  const getSelectedInfo = (idItem) => {
    const selectedData = initialData.filter((el) => el.id === idItem);
    return selectedData.length > 0 ? selectedData[0] : null;
  };

  const handleTableClick = ({ target: { id } }) => {
    const [typeOfAction, idItem] = id.split('__');
    const idNum = parseInt(idItem, 10);
    
    if (typeOfAction === 'edit') {
      setIsModalOpen(true);
      setSelectedItemId(idNum);
    } else {
      setData(prevData => {
        console.log("Previous Data:", prevData);
        return prevData.filter(el => el.id !== idNum)});
    }

  };
  return {
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
    handleTableClick
  };
};

export default useTableLogic;