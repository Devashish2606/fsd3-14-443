import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

// Database using file starts
const FILE = "product.json";
const cin = readline.createInterface({ input: stdin, output: stdout });

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const addToCart = async (product) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === product.id);
  if (isFoundInCart) {
    isFoundInCart.qty += product.qty;
  } else cart.push(product);
  await saveCart(cart);
  console.log(`${product.name} added/updated to 🛒`);
};

const displayCart = async () => {
  const cart = await getCart();
  if (cart.length == 0) {
    console.log("\nCart is empty\n");
    return;
  }
  console.table(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(`Total payble amount Rs. ${total}`);
};

const removeProduct = async (pid) => {
    const cart = await getCart();
    const index = cart.findIndex((item) => item.id === pid);
    if (index !== -1) {
      const removedProduct = cart.splice(index, 1)[0];
      await saveCart(cart);
      console.log(`${removedProduct.name} removed from 🛒`);
    } else {
      console.log(`Product with id ${pid} not found in the cart.`);
    }
};

const updateQuantity = async (pid) => {
    const cart = await getCart();
    const index = cart.findIndex((item) => item.id === pid);

    if(index !== -1) {
        const op = cin.question("Enter '+' to increase or '-' to decrease quantity: ");
        if(op === '+') {
            cart[index].qty += 1;
        }
        else {
            cart[index].qty -= 1;
        }
        await saveCart(cart);
        console.log(`quantity of product ${pid} is updated to ${cart[index].qty}`);
        if(cart[index].qty == 0) {
            removeProduct(Number(pid));
        }
    } else {
        console.log(`Product with id ${pid} not found in the cart.`);
    }
}

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });

  do {
    console.log("\n\nWelcome to Amazon Shopping 🛒");
    console.log("1........Show Cart");
    console.log("2........Add Product");
    console.log("3........Remove Product");
    console.log("4........Update Quantity");
    console.log("5........Checkout");
    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await displayCart();
        break;
      case 2:
        const item = await cin.question("Enter id,name,price,qty:");
        const [id, name, price, qty] = item.split(",").map((p) => p.trim());

        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });
        break;

      case 3:
        const pid = await cin.question("Enter product id to remove: ");
        await removeProduct(Number(pid));
        break;
      case 4:
        const p = await cin.question("Enter product id to update: ");
        await updateQuantity(Number(p));
        break;
      case 5:
        console.log("checkout");
        break;
      default:
        console.log("🛑 invalid choice! Try again");
    }
  } while (choice != 5);
  cin.close();
};

main();