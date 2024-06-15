const express = require('express');
const contactRouter = require('./routers/contactRouter');
const userRouter = require('./routers/userRouter');
const feedbackRouter = require('./routers/feedbackRouter');
const contributionRouter = require('./routers/contributionRouter');
const utilRouter = require('./routers/util');
const path = require('path');
const history = require('express-history-api-fallback');

const cors= require('cors')
const app= express();

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());

const root = path.join(__dirname, 'client');

app.use('/api/user', userRouter);
app.use('/api/contact', contactRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/contribution', contributionRouter);
app.use('/api/util', utilRouter);

app.use('/api/archives', express.static('./archives'));
app.use(express.static("./static/uploads"));
app.use(express.static("./client"));
// console.log(root);
app.get("/api", (req, res) => {
  res.send("API Response");
});

app.use('*',history('index.html', { root }));

const port= 5000
app.listen(port,()=>console.log('server working'))