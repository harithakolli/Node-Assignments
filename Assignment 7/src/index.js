const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
const studentArray = require("./InitialData");
app.get("/api/student", async (req, res) => {
    try {
      const Student = studentArray;
      res.status(200).json({
        status: "Sucsess",
        Data: Student,
      });
    } catch (e) {
      res.status(500).json({
        status: "failed",
        message: e.message,
      });
    }
  });

  app.get("/api/student/:id", async (req, res) => {
    try {
      const Student =  studentArray.find(
        (Student) => req.params.id == Student.id
      );
      if (Student) {
        res.status(200).json({
          Data: Student
        });
      } else {
        res.status(404).json({
          status: "failed",
          message: "id is invalid",
        });
      }
    } catch (e) {
      res.status(500).json({
        status: "failed",
        message: e.message,
      });
    }
  });

  app.post("/api/student", async (req, res) => {
    try {
       
      req.body.id = studentArray[studentArray.length - 1].id + 1;
      if (
        req.body.name == undefined ||
        req.body.currentClass == undefined ||
        req.body.division == undefined
      ) {
        res.status(400).json({
          status: "Failed",
          message: "Incomplete Details",
        });
      } else {
        studentArray.push(req.body);
        //res.json({ studentArray });
        res.status(200).json({
            id :  req.body.id
          })
      }
    } catch (e) {
      res.status(500).json({
        status: "Failed",
        message: e.message,
      });
    }
  });


  app.put("/api/student/:id", async (req, res) => {
    try {
      const Index = studentArray.findIndex(
        (Student) => req.params.id == Student.id
      );
      if (Index != -1) {
        studentArray[Index]= req.body;
        req.body.id = parseInt(req.params.id);
        res.status(200).json({ studentArray });
      } else {
        res.status(400).json({
          status: "Failed",
          message: "ID is Invalid",
        });
      }
    } catch (e) {
      res.status(500).json({
        status: "Failed",
        message: e.message,
      });
    }
  });


  app.delete("/api/student/:id", async (req, res) => {
    const Index =  studentArray.findIndex(
      (Student) => req.params.id == Student.id
    );
    if (Index != -1) {
      studentArray.splice(Index, 1);
      res.status(200).json({ studentArray });
    } else {
      res.status(400).json({
        status: "Failed",
        message: "ID is Invalid",
      });
    }
  });

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   