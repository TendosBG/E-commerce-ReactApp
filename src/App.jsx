import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import {ConnexionBackend} from "./scripts/ConnexionBackend";
import Header from './components/Layout/Header'
import CartContext from './scripts/Context';
import { useReducer } from 'react';
import Products from './components/Product/Products';

function App() {
  const itemsReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      return [...state, action.item]
    }
    else if (action.type === "UPDATE_ITEM") {
      return state.map(item => {
        if (item.ref === action.item.ref) {
          return {
            ...item,
            quantity: item.quantity + action.item.quantity
          }
        }
        return item
      })
    }
    else if (action.type === "DELETE_ITEM") {
      return state.filter(item => item !== action.item)
    }
    else{
      throw new Error("Invalid action type")
    }
  };

  const [data, loading] = ConnexionBackend();
  const [items, dispatch] = useReducer(itemsReducer, [])

  return (
    <>
      <CartContext.Provider value={{items, dispatch}}>
        {loading ? <Spinner animation="border" />: 
          (data === "error" ? 
            <div>
              <h1>Unable to connect to server</h1>
              <p>We are working on it, please try again later.</p>
            </div> :
            <div className="App">
              <Header />
              <div id='main'>
                <Products />
              </div>
            </div>
          )}
      </CartContext.Provider>
    </>
  )
}

export default App
