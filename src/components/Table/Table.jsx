import "./Table.css"

export function Table(props){
    console.log(props)
    return (
      <>
        <table className="table">
          <thead>
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
          <tbody>
            {props.data.products.map((el) => (
              <tr key={el.id}>
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
            ))}
          </tbody>
        </table>
      </>
    );
}