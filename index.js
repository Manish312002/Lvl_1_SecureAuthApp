import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  password: "root",
  database: "Web Dev",
  host: "localhost",
  port: 5432
})
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try{
    const email = req.body.username
    const password = req.body.password
    const checkemail = await db.query("select * from userauth where email=$1",[email]);
    
    if(checkemail.rows.length > 0){
      res.send("Email is already exists, try logging in.")
    }else{
      const result = await db.query("insert into userauth (email,password) values ($1,$2)",[email,password])
      res.render("secrets.ejs")
    }
  
  }catch(err) {
    console.log(err)
  }

});


app.post("/login", async (req, res) => {
  try{
    const email = req.body.username
    const password = req.body.password

    const result = await db.query("select * from userauth where email=$1",[email]);
    const user = result.rows[0];

    if(result.rows.length > 0){
      if(user.password === password){
        res.render("secrets.ejs")
      }else{
        res.send("Incorrect password")
      }
    }else{
      res.send("User Not Found!")
    }

  }catch(err) {
    console.log(err)
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
