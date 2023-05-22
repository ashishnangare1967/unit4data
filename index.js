const express = require("express");
const process = require("node:process");
const mongoose = require("mongoose");

const server = express();
const fs = require("fs");

const logger= (req, res, next)=>{
  let logMsg= `Method:${req.method}, Route:${req.url}, user-agent:${req.headers['user-agent']}`
  fs.appendFile('logs.txt', logMsg, err=>{
 if(err){
  console.error('Failed to write to logs.txt')
 }
  });
  next()
}

const validator=(req, res, next)=>{
  if(req.query.role === 'leader' && req.query.pass==="4534"){
    next()
  }else{
    res.status(401).send('You are not authorised to do this operation');
  }
}

server.use(logger)
server.use(express.json());

server.get("/", (req, res) => {
  res.send(
    "<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>"
  );
});

server.post("/marvel/addnew", (req, res) => {
  try {
    const db = require("./db.json");
    db.marvel.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(db));
    res.send("New superhero has been added");
  } catch (err) {
    res.send(err);
  }
});


server.post("/dc/addnew", (req, res) => {
  try {
    const db = require("./db.json");
    db.dc.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(db));
    res.send("New superhero has been added");
  } catch (err) {
    res.send(err);
  }
});

server.get("/marvel", (req, res) => {
  try {
    let db = require("./db.json");
    const { alias } = req.query;
    console.log(alias);
    if (alias) {
      const superhero = db.marvel.find(
        (character) => character.alias === alias
      );
      if (superhero) {
        res.json(superhero);
      } else {
        res.status(404).send("Superhero not found");
      }
    } else {
      res.json(db.marvel);
    }
  } catch (err) {
    console.log(err);
  }
});

server.get("/dc", (req, res) => {
  try {
    let db = require("./db.json");
    const { alias } = req.query;
    console.log(alias);
    if (alias) {
      const superhero = db.dc.find((character) => character.alias === alias);
      if (superhero) {
        res.json(superhero);
      } else {
        res.status(404).send("Superhero not found");
      }
    } else {
      res.json(db.dc);
    }
  } catch (err) {
    console.log(err);
  }
});

server.get("/marvel/:id", (req, res) => {
  const { id } = req.params;
  try {
    let db = require("./db.json");
    const superhero = db.marvel.find((character) => character.id == id);
    res.send(superhero);
  } catch (err) {
    res.send(err);
  }
});

server.get("/dc/:id", (req, res) => {
  const { id } = req.params;
  try {
    let db = require("./db.json");
    const superhero = db.dc.find((character) => character.id == id);
    res.send(superhero);
  } catch (err) {
    res.send(err);
  }
});

server.get('/winningteam',(req,res)=>{
  let data= require('./db.json');
  let marvel=data.marvel;
  let dc=data.dc;
  let totalMar= marvel.reduce((acc,cur)=>{
    return acc+cur.power_level
  },0)
  let totalDc= dc.reduce((acc,cur)=>{
    return acc+cur.power_level
  },0)

  if(totalDc<totalMar){
    res.send(marvel)
  }else{
    res.send(dc)
  }
})

server.use(validator)

server.patch('/marvel/update/:id',(req, res)=>{
  const {id}= req.params;
const body=req.body;
let db= require('./db.json');
let hero= db.marvel.find(el=>el.id==id)
if(hero){
  for(let i=0; i<db.marvel.length; i++){
    if(db.marvel[i].id==id){
      db.marvel[i]={...db.marvel[i],...body}
    }
  }
  fs.writeFileSync('./db.json', JSON.stringify(db))
  res.send('Patched Character Details')
}else{
  res.status(404).send('not found');
  return
}
})

server.patch('/dc/update/:id',(req, res)=>{
  const {id}= req.params;
const body=req.body;
let db= require('./db.json');
let hero= db.dc.find(el=>el.id==id)
if(hero){
  for(let i=0; i<db.marvel.length; i++){
    if(db.dc[i].id==id){
      db.dc[i]={...db.dc[i],...body}
    }
  }
  fs.writeFileSync('./db.json', JSON.stringify(db))
  res.send('Patched Character Details')
}else{
  res.status(404).send('not found fdsfa');
  return
}
})

server.delete('/marvel/delete/:id', (req,res)=>{
  const {id}= req.params;
  let db= require('./db.json');
  let newData= db.marvel.filter(el=>el.id!=id);
  db.marvel=newData;
  fs.writeFileSync('./db.json', JSON.stringify(db))
  res.send('Deleted Character Details')
})

server.delete('/dc/delete/:id', (req,res)=>{
  const {id}= req.params;
  let db= require('./db.json');

  let newData= db.dc.filter(el=>el.id!=id);
  db.dc=newData
  fs.writeFileSync('./db.json', JSON.stringify(db))
  res.send('Deleted Character Details')
})
server.listen(3000, err=>{
  if(err){
    console.log({"err": err})
  }
})
module.exports = server;



// Do not forget to export the server.
// e.g => module.exports = server;


// process.on('uncaughtException', (err) => {
//   console.error('Uncaught Exception:', err);
//   // Perform any necessary cleanup or error handling
//   process.exit(1); // Exit the process with a non-zero status code
// });

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection:', reason);
//   // Perform any necessary cleanup or error handling
//   process.exit(1); // Exit the process with a non-zero status code
// });
