const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe')('sk_test_51N9eZBL4uDSAtGXOgt4fVPA55itdJt58emeLb4bYm2zRlkMUAjaRIcsjA29bvPydZH0YeyAJGvWNy9dFACXND37900Tx9KWhyt');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.post('/payment', async (req, res) => {
  try {
    const { stripeEmail, stripeToken, totalAmount } = req.body; // Retrieve the total amount from the request

    const customer = await stripe.customers.create({
      email: stripeEmail,
      source: stripeToken,
      name: 'pay-up',
      address: {
        line1: 'Monument,CO',
        postal_code: '80132',
        city: 'Monument',
        state: 'Colorado',
        country: 'USA'
      }
    });

    const charge = await stripe.charges.create({
      amount: totalAmount, // Use the retrieved total amount for the charge
      description: 'Buy now',
      currency: 'USD',
      customer: customer.id
    });

    console.log(charge);
    res.redirect('/confirm');
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get('/confirm', (req, res) => {
  res.sendFile(path.join(__dirname, 'confirm.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
