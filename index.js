const express = require('express')
const app = express()
const port = 5000

const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());
const { ObjectId } = require('bson');

app.get('/', (req, res) => {
    res.status(200).send(`<h1>This Is Admin Pannel</h1>`)
})


const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4tdw4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const DataCollection = client.db("bright").collection("data");
    const sponsorCollection = client.db("bright").collection("sponsor");
    const statusCollection = client.db("bright").collection("status");
    const serviceCollection = client.db("bright").collection("service");
    const serviceCollection2 = client.db("bright").collection("service2");
    const serviceCollection3 = client.db("bright").collection("service3");
    const serviceCollection4 = client.db("bright").collection("service4");
    const serviceCollection5 = client.db("bright").collection("service5");
    const serviceCollection6 = client.db("bright").collection("service6");
    const tableCollection = client.db("bright").collection("table");
    const reviewCollection = client.db("bright").collection("review");
    const medelCollection = client.db("bright").collection("medel");



    console.log('dome', err);
    app.post('/addData', (req, res) => {
        const eventDetails = req.body;
        DataCollection.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    app.get('/data', (req, res) => {
        DataCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    // Sponsor section  

    app.post('/addSponsor', (req, res) => {
        const eventDetails = req.body;
        sponsorCollection.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    app.get('/sponsorData', (req, res) => {
        sponsorCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    // Status section  

    // addStatus section  
    app.post('/addStatus', (req, res) => {
        const eventDetails = req.body;
        statusCollection.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getStatus section  
    app.get('/statusData', (req, res) => {
        statusCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // Service section  

    // addService section  
    app.post('/addService', (req, res) => {
        const eventDetails = req.body;
        serviceCollection.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/serviceData', (req, res) => {
        serviceCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // Second Service section  

    // addService section  
    app.post('/addService2', (req, res) => {
        const eventDetails = req.body;
        serviceCollection2.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/serviceData2', (req, res) => {
        serviceCollection2.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // Third Service section  

    // addService section  
    app.post('/addService3', (req, res) => {
        const eventDetails = req.body;
        serviceCollection3.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/serviceData3', (req, res) => {
        serviceCollection3.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // Fourth Service section  

    // addService section  
    app.post('/addService4', (req, res) => {
        const eventDetails = req.body;
        serviceCollection4.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/serviceData4', (req, res) => {
        serviceCollection4.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // Fifth Service section  

    // addService section  
    app.post('/addService5', (req, res) => {
        const eventDetails = req.body;
        serviceCollection5.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/serviceData5', (req, res) => {
        serviceCollection5.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    // Sixth Service section  

    // addService section  
    app.post('/addService6', (req, res) => {
        const eventDetails = req.body;
        serviceCollection6.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/serviceData6', (req, res) => {
        serviceCollection6.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // Table Service section  

    // add table section  
    app.post('/addTableData', (req, res) => {
        const eventDetails = req.body;
        tableCollection.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/tableData', (req, res) => {
        tableCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // Review section  

    // add review section  
    app.post('/addReview', (req, res) => {
        const eventDetails = req.body;
        reviewCollection.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // getService section  
    app.get('/reviewData', (req, res) => {
        reviewCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


    // medel section  

    // add medel section  
    app.post('/addMedel', (req, res) => {
        const eventDetails = req.body;
        medelCollection.insertOne(eventDetails)
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })

    // get medel section  
    app.get('/medelData', (req, res) => {
        medelCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })


});


// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

app.listen(process.env.PORT || port)
