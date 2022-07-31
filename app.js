// https://www.natours.dev/api/v1/tours/5c88fa8cf4afda39709c2955
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
//1) Middlewares

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('helo from the middleware👋 wav');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// Start Server
const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
