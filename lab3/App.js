import http from "http";
//import * as teams from 'team.js'
import { getAllTeams } from  "./team.js";


const PORT = 5000;

const sendJson = (res,statusCode, data) => {
    res.writeHead(statusCode,{"content-type": "application/json"});
    res.end(data === "undefined" ? "" : json.stringify(data));
};

const parseJSONBody = (req)=>{
    new Promise((reqsolve, reject) => {
        letbody="";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                resolve(body? JSON.parse(body) : {});
            } catch (error){
                reject(error);
            }
        });
    });
};
const server = http.createServer((req, res) =>{});

/*server.on('request', (req,res)=>{
    res.write("<h1>Welcome to Server Side Programming<h1>");
    res .write("<h2>Nodemon is tracking the files<h2>");
    res.end();
});*/

server.listen(PORT, () =>{
    console.log("SIH Server is running", PORT);
});

//Ctrl+C to terminate the server