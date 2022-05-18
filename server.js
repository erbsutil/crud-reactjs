const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  const employee = [
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

  res.send(employee);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
