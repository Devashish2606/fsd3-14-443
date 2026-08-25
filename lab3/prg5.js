import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"applpcation/json"});
    const product = {
        name: "Mobile",
        price: 25000,
        discount: "10%",
        company: "Samsung",
    };

    res.end(json.stringify(product));
});

server.listen(3000, ()=>{
    console.log("Server is running...")
})