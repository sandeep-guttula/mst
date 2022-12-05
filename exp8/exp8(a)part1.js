const express = require('express');
const mongoose = require('mongoose');
const bookModel = require('./schema');
const app = express();
//connection
const url = "mongodb+srv://admin_nani:Nani_123@cluster0.b9tm8kc.mongodb.net/library?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//checking the connection
const con = mongoose.connection;
con.on('error', (err) => {
    console.log('error');
});
con.on('open', () => {
    console.log('connected...');
});

//create
app.get('/create', (req, res) => {
    const book = new bookModel({
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        genre: 'Fiction',
    });
    book.save().then((result) => {
        res.send(result);
    }
    ).catch((err) => {
        console.log(err);
    }
    );
});

//read
app.get('/read', (req, res) => {
    bookModel.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}
);

//update
app.get('/update', (req, res) => {
    bookModel.updateOne({ title: 'The Alchemist' }, { author: 'Appara rao The writer' }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

//delete
app.get('/delete', (req, res) => {
    bookModel.deleteOne({ title: 'The Alchemist' }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}
);


//starting the server
app.listen(3000, () => {
    console.log('server started');
});

