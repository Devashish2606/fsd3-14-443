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
  return(
    <div>
      <img
        src={props.book.picUrl}
        alt={props.book.bname}
      />
      <h1>{props.book.bname}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h4>Rating: {props.book.rating}</h4>
    </div>
  );
}


export default function App(){
  return(
    <>
      <Book book={b1}/>
      <h1>Hello React</h1>
      <Book book={b2}/>
      <Book book={b1}/>
      <Book book={b2}/>
    </>
  );
}