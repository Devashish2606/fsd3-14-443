import {books} from "./data/books.js";
import Fruits from "./component/Fruits.jsx";

function Book(props){
  console.log(props);
  const{bname, price, quantity, rating, picUrl} = props.book;
  const qtyStyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px"
  };
  return(
    <div className="book">
      <img
        src={picUrl}
        alt={bname}
      />
      <h1>{bname}</h1>
      <h2>Price: {price}</h2>
      <h3 style={qtyStyle}>Quantity: {quantity}</h3>
      <h4 style={{color: "red", textAlign: "center"}}>Rating: {rating}</h4>
      <button>Buy Now</button>
    </div>
  );
}

export default function App(){
  return(
    <>
      <h1>Online Book Store</h1>
      <div className="container">
        <Book book={books[0]}/>
        <Book book={books[1]}/>
        <Book book={books[0]}/>
        <Book book={books[1]}/>
        <Fruits/>
      </div>  
    </>
  );
}