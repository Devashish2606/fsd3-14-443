import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("<h1> Hello Express </h1>");
});

app.get('/about',(req,res)=>{
  res.send('We are FSD Developer')
})

app.use((req,res)=>{
  res.status(404).send("Not found")
})

app.post('/login', (req,res)=>{
  res.send({msg:'user login'})
})

app.put('/user/update/1',(req,res)=>{
  res.send({msg:'user update'})
})

app.delete('/user/1',(req,res)=>{
  res.send({msg:'remove user 1'})
})

app.listen(3333, () => console.log("Server is running"));

/*server.on("error", (err) => {
  console.error("Server listen error:", err);
});*/