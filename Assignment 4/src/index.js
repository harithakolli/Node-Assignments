const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.set('views', './views');
app.set('view engine', 'ejs'); 


// your code goes here
app.get('/', (req, res) => res.send("Hello world!"))

app.get('/form', (req, res) => {
    res.render("form.ejs");
})

app.post('/add', (req, res) => {
    console.log(req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(num1< - 1000000 || num2< -1000000){
        res.status(400).json({
            status:"error",
            msg:"Data Underflow"
        })
    }
    
    if(num1>1000000 || num2>1000000){
        res.status(400).json({
            status:"error",
            msg:"Data overflow"
        })
    }
    
    
    if(isNaN(num1) ||  isNaN(num2)){
        res.status(400).json({
            status:"error",
            msg:"Invalid data types"
        })
    }
    
    const sum = num1+num2;
    
    res.status(200).json({
        status:'success',
        msg : 'the sum of given two numbers',
        sum : sum
    })


    
})



app.post('/sub', (req, res) => {
    console.log(req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(num1< - 1000000 || num2< -1000000){
        res.status(400).json({
            status:"error",
            msg:"Underflow"
        })
    }
    
    if(num1>1000000 || num2>1000000){
        res.status(400).json({
            status:"error",
            msg:"Overflow"
        })
    }
    
    
    if(isNaN(num1) ||  isNaN(num2)){
        res.status(400).json({
            status:"error",
            msg:"Invalid data types"
        })
    }
    
    const diff = num1-num2;
    
    res.status(200).json({
        status:'success',
        msg : 'the difference of given two numbers',
        difference : diff
    })


    
})


app.post('/mul', (req, res) => {
    console.log(req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(num1< - 1000000 || num2< -1000000){
        res.status(400).json({
            status:"error",
            msg:"Data Underflow"
        })
    }
    
    if(num1>1000000 || num2>1000000){
        res.status(400).json({
            status:"error",
            msg:"Data overflow"
        })
    }
    
    
    if(isNaN(num1) ||  isNaN(num2)){
        res.status(400).json({
            status:"error",
            msg:"Invalid data types"
        })
    }
    
    const mul = num1 * num2;
    
    res.status(200).json({
        status:'success',
        msg : 'The product of given numbers',
        result : mul
    })


    
})


app.post('/div', (req, res) => {
    console.log(req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    if(num1< - 1000000 || num2< -1000000){
        res.status(400).json({
            status:"error",
            msg:"Data Underflow"
        })
    }
    
    if(num1>1000000 || num2>1000000){
        res.status(400).json({
            status:"error",
            msg:"Data overflow"
        })
    }
   console.log(isNaN(num1));
   console.log(isNaN(num2));
    
    if(isNaN(num1) ||  isNaN(num2)){
        res.status(400).json({
            status:"error",
            msg:"Invalid data types"
        })
    }


    if(num2==0){
        res.status(400).json({
            status:"error",
            msg:"Cannot Divide by zero"
        })
    }
    
    const div = num1/ num2;
    
    res.status(200).json({
        status:'success',
        msg : 'The division of given numbers',
        result : div
    })


    
})




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;