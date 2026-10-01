const b1 = {
  picUrl:"https://m.media-amazon.com/images/I/41QOkKdG-GL._SX342_SY445_FMwebp_.jpg",
  bname: "React Book",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl:"https://m.media-amazon.com/images/I/41pRoV87J7L._SY445_SX342_FMwebp_.jpg",
  bname: "React Book",
  price: 2199,
  quantity: 5,
  rating: 4.5,
};

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
        <Book book={b1}/>
        <h1>Hello React</h1>
        <Book book={b2}/>
        <Book book={b1}/>
        <Book book={b2}/>
      </div>  
    </>
  );
}