const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let employee = [
  {
    id: 0,
    firstName: "Erick",
    lastName: "Sutil",
    mail: "ericksutil@gmail.com",
    nis: "123",
  },
  {
    id: 1,
    firstName: "Lorem",
    lastName: "Ipsum",
    mail: "lorem@ipsum.com",
    nis: "124",
  },
];

app.get("/api", (req, res) => {
  res.send(employee);
});

app.post("/api", (req, res) => {
  const newEmployee = req.body;

  employee.push(newEmployee);

  res.send(employee);
});

app.put("/api", (req, res) => {
  const newEmployee = req.body;

  newListEmployee = employee.map((e) => {
    return e.id == newEmployee.id ? newEmployee : e;
  });

  employee = newListEmployee;

  res.send(employee);
});

app.delete("/api", (req, res) => {
  const itemId = req.query.itemId;

  employee.splice(itemId, 1);

  res.send(employee);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
