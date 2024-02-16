import express from 'express'; //this is modular form of importing

const app = express();

app.get('/', (req,res)=> {
    res.send('Server is ready');
});

const port = process.env.PORT || 4000 ;

app.listen(port, ()=> {
    console.log(`server is running at port: ${port}`);
})