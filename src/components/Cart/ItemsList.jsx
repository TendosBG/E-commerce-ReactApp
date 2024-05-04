import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import CartContext from '../../scripts/Context';

function ItemsTable() {
    const CartItems = useContext(CartContext);

    const deleteItem = (item) =>{
        console.log(item);
        CartItems.dispatch({
            type: "DELETE_ITEM",
            item: item
        });
        console.log(CartItems.items);
    };

    return (
        <Table striped borderless hover>
            <thead>
                <tr>
                    <th>Ref</th>
                    <th>Name</th>
                    <th>Price(€)</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {CartItems.items.map((item) => (
                    <tr key={item.reference}>
                        <td>{item.reference}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button className="trash-button" onClick={() => deleteItem(item)}></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ItemsTable;