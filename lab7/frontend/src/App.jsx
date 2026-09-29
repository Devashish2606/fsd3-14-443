const b1 = {
  picUrl:"https://m.media-amazon.com/images/I/41QOkKdG-GL._SX342_SY445_FMwebp_.jpg",
  bname: "React Book",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

function Book(){
  return(
    <div>
      <img
        src="https://m.media-amazon.com/images/I/41QOkKdG-GL._SX342_SY445_FMwebp_.jpg"
        alt="React Book"
      />
      <h1>Lets Us React</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
    </div>
  );
}


export default function App(){
  return(
    <>
      <Book/>
      <h1>Hello React</h1>
      <Book/>
      <Book/>
      <Book/>
    </>
  );
}