const nbElement = document.querySelector('#new-nb-payment');
const cardElement = document.querySelector("#new-card-payment");
const walletElement = document.querySelector("#new-wallet-payment");
const upiElement = document.querySelector("#new-upi-payment");

let options = {}
const razorpay = new Razorpay({
   key: 'rzp_test_IFMmoKlMshyTeL',
   image: 'https://venturebeat.com/wp-content/uploads/2016/06/netflix-logo.png?w=1200&strip=all' 
});

//NB Example
nbElement.addEventListener('submit',(e) => {
    e.preventDefault()
    Object.assign(options, {
        amount: e.target.elements.amount.value * 100,
        email: e.target.elements.email.value,
        contact: e.target.elements.contact.value,
        order_id: e.target.elements.order.value,
        method: 'netbanking',
        bank: 'HDFC'
        })

    razorpay.createPayment(options)
    
    razorpay.on('payment.success', (resp) => {
        alert(resp.razorpay_payment_id);
    })
    razorpay.on('payment.error', (resp) => {
        alert(resp.error.description)
    }); 

})
//Card Example
cardElement.addEventListener('submit', (e) => {
    e.preventDefault()
    Object.assign(options, {
        amount: e.target.elements.amount.value * 100,
        email: e.target.elements.email.value,
        contact: e.target.elements.contact.value,
        order_id: e.target.elements.order.value,
        method: 'card',
        'card[name]': e.target.elements.cardName.value,
        'card[number]': e.target.elements.cardNumber.value,
        'card[cvv]': e.target.elements.cvv.value,
        'card[expiry_month]': e.target.elements.expiryMonth.value,
        'card[expiry_year]': e.target.elements.expiryYear.value
    })
    razorpay.createPayment(options)
    razorpay.on('payment.success', (response) => {
        alert(response.razorpay_payment_id);
    })
    razorpay.on('payment.error', function(resp){
        alert(resp.error.description)
    });    
 
})
//Wallet Example
walletElement.addEventListener('submit', (e) => {
    e.preventDefault()
    Object.assign(options, {
        amount: e.target.elements.amount.value * 100,
        email: e.target.elements.email.value,
        contact: e.target.elements.contact.value,
        order_id: e.target.elements.order.value,
        method: 'wallet',
        wallet: 'mobikwik'
    })
    razorpay.createPayment(options)
    razorpay.on('payment.success', (resp) => {
        alert(resp.razorpay_payment_id);
    })
    razorpay.on('payment.error', (resp) => {
        alert(resp.error.description)
    });

})
//UPI Example
upiElement.addEventListener('submit', (e) => {
    e.preventDefault()
    Object.assign(options, {
        amount: e.target.elements.amount.value * 100,
        email: e.target.elements.email.value,
        contact: e.target.elements.contact.value,
        order_id: e.target.elements.order.value,
        method: 'upi',
        vpa: e.target.elements.vpa.value
    })
    razorpay.createPayment(options)
    razorpay.on('payment.success', (resp) => {
        alert(resp.razorpay_payment_id);
    })
    razorpay.on('payment.error', (resp) => {
        alert(resp.error.description)
    });
})




