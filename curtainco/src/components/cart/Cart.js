import React from 'react';
import api from '../../config/api';
import Paypal from './Paypal';

import {
    Container,
    Typography
} from '@material-ui/core';

function Cart() {
    // snippet below assumes the use of localStorage as storage 
    //of cart items

    // const [cart, setCart] = useState(null)
    // const [totalPrice, setTotalPrice] = useState(0)
    // const [paymentSuccess, setPaymentSuccess] = useState(false)
    // const [paymentFailed, setPaymentFailed] = useState(false)
    // const [paymentCancelled, setPaymentCancelled] = useState(false)


    // useEffect(() => {
    // const cartItemStr = window.localStorage.getItem('cartItems')
    // const cartItems = JSON.parse(cartItemStr)
    // setCart(cartItems)

    // for (let item in cart) {
    //     setTotalPrice(totalPrice + item.price)
    // }
    // },[cart, totalPrice])

    const testProduct = [{
        "name": "Series 51 White Track",
        "colour": "White",
        "category": "Track",
        "type": "Powder Coated",
        "single": true,
        "finialStyle": "Colonial",
        "finialColour": "White",
        "location": "Ceiling",
        "price": 999
    }];

    async function handleSuccess(data) {
        // data contains the response from paypal which is to be stored in server
        const payload = {};
        payload.totalPrice = totalPrice;
        // payload.items = cart
        payload.items = testProduct;
        payload._id = data.paymentID;
        payload.paymentData = data;
        const response = await api.post("/orders", payload);
        // setPaymentSuccess(true) // modal confirmation?
        // clears the cart afterwards then redirects somewhere?
        console.log(response);
        return response;
    }

    function handleError(data) {
        // data contains the response from paypal which is to be stored in server
        // setPaymentFailed(true) // modal ??
        console.log(data);
        console.log('There was an error when using Paypal');
    }

    function handleCancel(data) {
        // data contains the response from paypal which is to be stored in server
        // setPaymentCancelled(true) // modal ??
        console.log(data);
        console.log('Transaction cancelled');
    }


    // would be a state setTotalPrice which was
    // extracted from every item added to cart
    // totalPrice is then passed to Paypal component
    const totalPrice = 10;
    return (
        <Container>
            <Typography variant="h3">
                Cart Page
            </Typography>
            <Paypal
                handleSuccess={handleSuccess}
                handleError={handleError}
                handleCancel={handleCancel}
                totalPrice={totalPrice}
            />
        </Container >
    );
}

export default Cart;
