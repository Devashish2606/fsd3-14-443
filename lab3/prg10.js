import { createReadStream } from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        const stream = createReadStream("./pages/airtag.html", {
            encoding: "utf-8"
        });

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        stream.pipe(res);
        return;
    }

    else if (req.url === "/mobile") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        const stream = createReadStream("./data/product.json", {
            encoding: "utf-8"
        });

        stream.pipe(res);
        return;
    }

    else if (req.url === "/manual") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        const stream = createReadStream("./data/chatgpt.txt", {
            encoding: "utf-8"
        });

        stream.pipe(res);
        return;
    }

    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Not found");
    }
});

server.listen(3000, () => {
    console.log("Server prg10 is running...");
});