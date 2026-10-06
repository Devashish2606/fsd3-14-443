const products = [
    { title: "Cabbage", id: 1, isFruits: false },
    { title: "Potato", id: 2, isFruits: false },
    { title: "Banana", id: 3, isFruits: true },
    { title: "Apple", id: 4, isFruits: true },
];

const ListItem = products.map((item) => 
    <li key={item.id}>{item.title}</li>
);

console.log(ListItem);

const Fruits = () => {
    return <ul>{ListItem}</ul>;
};

export default Fruits;