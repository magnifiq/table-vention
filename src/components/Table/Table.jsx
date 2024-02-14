/* eslint-disable react/prop-types */
import styles from "./Table.module.css";
import PropTypes from "prop-types";

export function Table({data}) {
  console.log(data);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Discount percentage</th>
          <th>Rating</th>
          <th>Stock</th>
          <th>Brand</th>
          <th>Category</th>
        </thead>
        <tbody className={styles.table__body}>
          {data ? (
            data.map((el) => (
              <tr key={el.id} className={styles.table__body__row}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>{el.price}</td>
                <td>{el.discountPercentage}</td>
                <td>{el.rating}</td>
                <td>{el.stock}</td>
                <td>{el.brand}</td>
                <td>{el.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.arrayOf(
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
  }).isRequired,
};
