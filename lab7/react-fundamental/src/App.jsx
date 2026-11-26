// function must return single element
// <> </> : fragments can be used to group multiple elements
// component : any js function returns html directly
// component can be called as html tag
// the tag must be closed 
// component first character must be capital
function Hello(args){
  return(
    <>
      <h1>{args.name}</h1>
      <img src={args.image_url} alt={args.name}/> 
      <h2>Rs.{args.price}</h2>
      <h3>Author {args.author}</h3>
    </  >
  );
}

export default function App() {

  const books = 
  [
  {
    "name": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "price": 1203,
    "rating": 4.47,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg"
  },
  {
    "name": "The Hunger Games",
    "author": "Suzanne Collins",
    "price": 1064,
    "rating": 4.36,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg"
  },
  {
    "name": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "price": 1018,
    "rating": 4.26,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
  },
  {
    "name": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "price": 1388,
    "rating": 4.30,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg"
  },
  {
    "name": "1984",
    "author": "George Orwell",
    "price": 925,
    "rating": 4.21,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
  },
  {
    "name": "Pride and Prejudice",
    "author": "Jane Austen",
    "price": 832,
    "rating": 4.30,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
  },
  {
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 1250,
    "rating": 3.91,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  },
  {
    "name": "The Psychology of Money",
    "author": "Morgan Housel",
    "price": 1480,
    "rating": 4.37,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    "name": "The Seven Husbands of Evelyn Hugo",
    "author": "Taylor Jenkins Reid",
    "price": 1156,
    "rating": 4.41,
    "image_url": "https://covers.openlibrary.org/b/isbn/9781501161933-L.jpg"
  },
  {
    "name": "Atomic Habits",
    "author": "James Clear",
    "price": 1573,
    "rating": 4.35,
    "image_url": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  }
  ] 
  return(
    <>
      <h1>Hello React!</h1>
      <Hello name="Let us C" price="355" author="Yashwant Kanitkar"/>
      <Hello name="The Song of Ice And Fire" price="3500" author="R.R Martin"/>
      <Hello{...books[0]}/>
      {
        books.map((item)=><Hello {...item}/>)
      }
    </>
  );
}