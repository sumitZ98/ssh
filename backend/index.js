import express from 'express'; //this is modular form of importing

const app = express();

app.get('/', (req,res)=> {
    res.send('Server is ready');
});

app.get('/jokes', (req,res)=> {
    const jokes = [
        {
            id:1,
            name:'joke-1',
        },
        {
            id:2,
            name:'joke-2',
        },
        {
            id:3,
            name:'joke-3',
        },
        {
            id:4,
            name:'joke-4',
        },
        {
            id:5,
            name:'joke-5',
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 4000 ;

app.listen(port, ()=> {
    console.log(`server is running at port: ${port}`);
})