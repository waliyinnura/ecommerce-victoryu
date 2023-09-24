import { loadStripe } from "@stripe/stripe-js";
require('dotenv').config({path: './.env'})

const apiKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(`${apiKey}`);
    }

    return stripePromise;
}

export default getStripe;