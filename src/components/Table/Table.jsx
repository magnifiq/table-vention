import "./Table.css"

export function Table(props){
    console.log(props)
    return (
      <>
        <table>
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
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}