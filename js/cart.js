const cartMainBtn = document.querySelector('.monster-nav > .cartMainBtn > a');
const cartContainer = document.querySelector('.cart-container');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const productBuyBtn = document.querySelector('.product-buy-btn');
const totalPrice = document.querySelector('.total-right > span:last-of-type');
const buyCompletionPopup = document.querySelector('.buy-Completion-popup');
const popupCloseBtn = document.querySelector('.buy-Completion-popup > .popup-area > button');


cartMainBtn.addEventListener('click',()=>{
    cartContainer.classList.add('active');
    console.log('click');
})
cartCloseBtn.addEventListener('click', ()=>{
    cartContainer.classList.remove('active');
})

productBuyBtn.addEventListener('click', ()=>{
    buyCompletionPopup.classList.add('active');
    setTimeout(()=>{
        buyCompletionPopup.classList.remove('active');
    },3000)
})
popupCloseBtn.addEventListener('click',()=>{
    buyCompletionPopup.classList.remove('active');
})