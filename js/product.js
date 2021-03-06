let productDrinkNavList = document.querySelectorAll('.product-drink-nav > ul > li')

const productName = document.querySelector('.product-text > .text-wrap > h1');
const productFlavor = document.querySelector('.product-text > .text-wrap > p:nth-of-type(2) > span');
const productInfoText = document.querySelector('.product-text > .text-wrap > p:nth-of-type(3)');
const productSubInfo = document.querySelector('.product-text > .text-wrap > p:nth-of-type(4)');
const productImages =document.querySelector('.product-images > .image-area');
const productDrinkImages = document.querySelector('.product-images > .image-area > img:first-of-type')
const productFruitImages = document.querySelector('.product-images > .image-area > img:last-of-type')
const addMinusBtn = document.querySelector('.num-area > .minus-btn');
const addPlusBtn = document.querySelector('.num-area > .plus-btn');
const addDrinkNum = document.querySelector('.num-area > .drink-num > p');
const addPriceNum = document.querySelector('.drink-price > span:last-of-type');
const cartButton = document.querySelector('.cart-area > button:first-of-type');
const buyButton = document.querySelector('.cart-area > button:last-of-type');
const cartPopupSection = document.querySelector('.addcart-popup');
const cartPopupCloseBtn = document.querySelector('.addcart-popup > .popup-area > .popup-x-btn > .x-btn-area');
const cartContinueBtn = document.querySelector('.addcart-popup > .popup-area > .addcart-btn > button:first-of-type');
const cartGoingBtn = document.querySelector('.addcart-popup > .popup-area > .addcart-btn > button:last-of-type');
const buyPopupSection = document.querySelector('.buyit-popup');
const buyPopupCloseBtn = document.querySelector('.buyit-popup > .popup-area > .popup-x-btn > .x-btn-area');
const buyGoingBtn = document.querySelector('.buyit-popup > .popup-area > .addcart-btn > button:first-of-type');

const cartMainBtn = document.querySelector('.monster-nav > .cartMainBtn > a');
const cartContainer = document.querySelector('.cart-container');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const productBuyBtn = document.querySelector('.product-buy-btn');
const totalPrice = document.querySelector('.total-right > span:last-of-type');
const buyCompletionPopup = document.querySelector('.buy-Completion-popup');
const popupCloseBtn = document.querySelector('.buy-Completion-popup > .popup-area > button');

const ingredientCloseBtn = document.querySelector('.ingredient-close-btn > button');
const ingredientPopupBG = document.querySelector('.ingredient-popup');
const ingredientPopup = document.querySelector('.ingredient-popup > .ingredient-popup-area');
const ingredientBtn = document.querySelector('.drink-info > .nutrition-info:first-of-type > p');

const nutritionBtn = document.querySelector('.drink-info > .nutrition-info:last-of-type > p');
const nutritionPopupBG = document.querySelector('.nutrition-popup');
const nutritionPopup = document.querySelector('.nutrition-popup > .nutrition-popup-area');
const nutritionCloseBtn = document.querySelector('.nutrition-close-btn > button');

const cartListWrap = document.querySelector('.cart-list-wrap ul');
const cartPriceTotal = document.querySelector('.total-right > span:last-of-type');
const cartProductList = document.querySelectorAll('.cart-list-wrap ul li')
const cartEmptyList = document.querySelector('.empty-list');
const fullCartList = document.querySelector('.full-cart-list');
productDrinkNavList = Array.prototype.slice.call(productDrinkNavList);
let productInfoLink =[
    {
        name: 'monster energy',
        flavor: '강렬한 맛의 오리지널 에너지 드링크, 몬스터 에너지!',
        text:'미국에서 태어나 전 세계로 뻗어나가고 있는 몬스터 에너지를 그대로 느껴보세요. 우리는 무엇보다 강력한 에너지 드링크, 몬스터 에너지를 개발하였습니다. 몬스터 에너지는 역동적이며 여러분들의 가슴을 부드럽게 뛰게 해 줄 매력적인 맛을 담고 있습니다. 다양한 액션 스포츠 선수들, 뮤지션, 아티스트, 그리고 전 세계의 모든 몬스터 팬들이 열광하는 이유를 직접 느껴보세요!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (168kcal)',
        img: 'img/drink/energy.png',
        fruit:'img/source/heart.png'
    },
    {
        name: 'mango loco',
        flavor: '매혹적인 망고 맛의 몬스터 에너지 망고 로코',
        text: '멕시코에서는 매년 할로윈 이후 `"죽은 자의 날"`을 기념합니다. 신비한 분위기 속의 메리골드 꽃과 추억들은떠난 이들을 축제로 이끕니다. 누구나 매혹될 이국적인 천사의 주스 블렌드, 망고 로코. 환상적인 맛과 몬스터 에너지 만의 마법으로 파티는 계속될 것입니다.',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (175kcal)',
        img: 'img/drink/mango-loco.png',
        fruit:'img/source/mango.png'
    },
    {
        name: 'pipeline punch',
        flavor: '패션후르츠, 오렌지, 구아바 등의 열대과일의',
        text: '전세계적으로 유명한 파도인 하와이 오아후 섬 노스쇼어 비치 `"반자이 파이프라인"`은 매년 겨울 짧은 기간 동안 최고의 파도를 만들어내죠.그 자연의 위대함에 경의를 표하며, 우리는 몬스터 에너지 파이프라인 펀치를 창조했습니다. 하와이를 대표하는 과일들인 패션프루트, 오렌지, 구아바에 우리의 대표적인 에너지 블렌드를 더해 "몬스터화"해냈습니다. 그리고 이름을 딴 파도에 어울리게 전설이 될 운명이죠!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (150kcal)',
        img: 'img/drink/punch.png',
        fruit:'img/source/Fashionfruits.png'
    },
    {
        name: 'ultra',
        flavor: '저칼로리로 가볍고 시원한 맛',
        text: '어떤 경우에도 만족하지 못하는 사람들이 있습니다. 사람들은 늘 새로운 것, 더 좋은 것을 원하죠. Monster 팀과 Girl 들도 마찬가지라서, 남들과 다른 제품, 이전에 없던 제품에 대한 힌트를 던져주고는 합니다. 그래서 에너지 드링크의 설탕을 빼고 칼로리를 확 줄였습니다. 하지만 몬스터 에너지 블렌드만의 폭발적인 기운은 그대로 담았죠! 몬스터의 새로운 트렌드는 화이트입니다. 몬스터 에너지 울트라로 칼로리 부담 없이 내 안의 야성을 깨워보세요!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (14kcal)',
        img: 'img/drink/ultra.png',
        fruit:'img/source/orange.png'
    },
    {
        name: 'ultra citra',
        flavor: '저칼로리에 시트러스의 상큼함을 느낄 수 있는 맛',
        text: '몬스터 시트라, 이 이름은 특이하게 생긴 프랑스 자동차나 스칸디나비아 보드카에서 온 것은 아닙니다. 고대부터 유래된 과일 시트론에서 영감을 받아 태어난 이 제품은 레몬과 비슷하지만 더 원초적이고 투박합니다. 마치 몬스터 에너지처럼요. 이 고대의 과일과 선조들에게서 영감을 얻은 우리는 전형적인 드링크를 새롭게 해석한 울트라 시트라를 만들었습니다. 울트라 시트라는 새콤달콤한 맛이 입안에서 잔잔하게 퍼지며 상쾌한 맛으로 마무리하죠. 저칼로리에 무설탕이지만 몬스터 에너지만의 블렌드는 변함없이 가득 담겨있답니다.',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (11kcal)',
        img: 'img/drink/ultra-citra.png',
        fruit:'img/source/lemon.png'
    },
    {
        name: 'ultra paradise',
        flavor:'저칼로리에 이색적인 키위-라임 향',
        text: '지상낙원은 어디에 있을까요? 산 위의 오두막, 강가의 목장 아니면 도심의 펜트하우스일까요. 백사장과 에메랄드 빛 바다, 그리고 부드럽게 불어오는 열대 바람이 있는 무인도는 어떨지요. 몬스터 울트라 파라다이스의 깨끗하고 상쾌한, 활기 넘치는 열대 섬의 맛. 긴장을 풀고 즐기세요. 그곳이 어디든 천국일테니까요!',
        sub: '고카페인 함유 (100mg/ 캔) 355ml (14kcal)',
        img: 'img/drink/ultra-paradise.png',
        fruit:'img/source/kiwi.png'
    }
]
const productCartImage = [
    'img/drink/energy.png',
    'img/drink/mango-loco.png',
    'img/drink/punch.png',
    'img/drink/ultra.png',
    'img/drink/ultra-citra.png',
    'img/drink/ultra-paradise.png'
]
const productCartName = [
    'monster energy',
    'mango loco',
    'pipeline punch',
    'monster energy ultra',
    'ultra citra',
    'ultra paradise'
]
let productIndex = 0;
let price = 2200;
let total = 1;
let priceTotal = 2200;
let productTotal = '1';
let realtotal = 0;
let finalTotal = 0;
let numberReset;
let isClick = false;
for(let i = 0; i < productDrinkNavList.length; i++){
    productDrinkNavList[i].addEventListener('click',(e)=>{
        let targetEl = e.currentTarget;
        productIndex = productDrinkNavList.indexOf(targetEl);
        console.log('productIndex',productIndex);
        for(let i = 0; i < productInfoLink.length; i++){
            productName.innerText = productInfoLink[productIndex].name;
            productFlavor.innerText = productInfoLink[productIndex].flavor;
            productInfoText.innerText = productInfoLink[productIndex].text;
            productSubInfo.innerText = productInfoLink[productIndex].sub;
            productDrinkImages.setAttribute('src', productInfoLink[productIndex].img);
            productFruitImages.setAttribute('src', productInfoLink[productIndex].fruit )

            ingredienKcal.innerText = ingredientTable[productIndex].kcal;
            SodiumGram.innerText = ingredientTable[productIndex].sodiumG;
            SodiumPer.innerText = ingredientTable[productIndex].sodiumP;
            CarbohydrateGram.innerText = ingredientTable[productIndex].CarbohydrateG;
            SugarGram.innerText = ingredientTable[productIndex].SugarG;
            SugarPer.innerText = ingredientTable[productIndex].SugarP;
            fatGram.innerText = ingredientTable[productIndex].FatG;
            fatPer.innerText = ingredientTable[productIndex].FatP;
            ProteinGram.innerText = ingredientTable[productIndex].ProteinG;
            ProteinPer.innerText = ingredientTable[productIndex].ProteinP;
            VitaminName.innerText = ingredientTable[productIndex].VitaminN;
            VitaminGram.innerText = ingredientTable[productIndex].VitaminG;
            VitaminPer.innerText = ingredientTable[productIndex].VitaminP;
            VitaminTweleveGram.innerText = ingredientTable[productIndex].VitaminTwelG;
            VitaminTwelevePer.innerText = ingredientTable[productIndex].VitaminTwelP;
            nutritionText.innerText = nutritionLink[productIndex].text;
            if(isClick === false){
                addDrinkNum.innerText = '1';
                addPriceNum.innerText = Number(price);
            }
        }
    })
}
cartButton.addEventListener('click', ()=>{
    console.log('cartButton');
    cartPopupSection.classList.add('active');
    if(cartListWrap.children.length < 5){
        cartEmptyList.style.display = 'none';
        cartEmptyList.style.visibility = 'visible';
        cartEmptyList.style.opacity = 0;
        cartListWrap.innerHTML +=
        `<li class ="cartList">
            <div class="cart-product-area">
                <div class ="cart-product-image">
                    <img src="${productCartImage[productIndex]}" alt="">
                </div>
                <div class ="cart-product-name">
                    <p>${productCartName[productIndex]}</p>
                </div>
                <div class ="cart-product-num">
                    <p>${productTotal}</p>
                </div>
                <div class ="cart-product-price">
                    <p>${priceTotal}</p>
                </div>
            </div>
            <div class ="li-remove-btn">
                <button><span></span><span></span></button>
            </div>
        </li>`; 
        let totalPrice = Number(priceTotal);
        finalTotal = Number(finalTotal + totalPrice);
        cartPriceTotal.innerHTML = `<span>${finalTotal}</span>`;    
        let cartProducCloseBtn = document.querySelectorAll('.li-remove-btn');
        for(let i = 0; i < cartProducCloseBtn.length; i++){
            cartProducCloseBtn[i].addEventListener('click',(e)=>{
                let closeBtn = document.querySelectorAll('.li-remove-btn');
                closeBtn  = Array.prototype.slice.call(cartProducCloseBtn);
                target = e.currentTarget;
                let productIndex = closeBtn.indexOf(target);  
                const targetEl = cartListWrap.children[productIndex];
                const targetPrice = targetEl.querySelector('.cart-product-price p').innerText;
                cartListWrap.removeChild(targetEl);
                finalTotal = Number(finalTotal - targetPrice);
                cartPriceTotal.innerHTML = `<span>${finalTotal}</span>`;
                if(cartListWrap.children.length === 0){
                    setTimeout(()=>{
                        cartEmptyList.style.display = 'block';
                        cartEmptyList.style.visibility = 'visible';
                        cartEmptyList.style.opacity = 1;
                    },500)
                }
            })
        }
        if(isClick === false){
            addDrinkNum.innerText = '1';
            addPriceNum.innerText = Number(price);
        }
        if(cartListWrap.children.length === 5){
            console.log('5');
            cartPopupSection.classList.remove('active');
            fullCartList.classList.add('active');
            setTimeout(()=>{
                fullCartList.classList.remove('active');
            },1500)
        } 
    }
})
// 제품 숫자 추가 (증가)버튼
addMinusBtn.addEventListener('click', ()=>{
    console.log('addMinusBtn');
    if(Number(addDrinkNum.textContent > 1)){
        let minus = Number(addDrinkNum.innerText);
        let PriceResult = Number(addPriceNum.innerText);
       minus--;
       addDrinkNum.textContent = minus;
       addPriceNum.textContent = PriceResult  - price;
       productTotal = addDrinkNum.textContent;
       priceTotal =  addPriceNum.textContent;
    }
})
// 제품 숫자 추가 (증감)버튼
addPlusBtn.addEventListener('click', ()=>{
    console.log('addPlusBtn');
    let plus = Number(addDrinkNum.innerText);
    let PriceResult  = Number(addPriceNum.innerText);
    plus++;
    addDrinkNum.textContent = plus;
    addPriceNum.textContent = PriceResult + price;
    productTotal = addDrinkNum.textContent;
    priceTotal =  addPriceNum.textContent;
})

buyButton.addEventListener('click', ()=>{
    console.log('buyButton');
    buyPopupSection.classList.add('active');
})
cartPopupCloseBtn.addEventListener('click', ()=>{
    console.log('cartPopupCloseBtn');
    cartPopupSection.classList.remove('active');
})
cartContinueBtn.addEventListener('click', ()=>{
    console.log('cartPopupCloseBtn');
    cartPopupSection.classList.remove('active');
})
cartGoingBtn.addEventListener('click', ()=>{
    console.log('cartGoingBtn');
    cartContainer.classList.add('active');
    cartPopupSection.classList.remove('active');
})
buyPopupCloseBtn.addEventListener('click', ()=>{
    console.log('buyPopupCloseBtn');
    buyPopupSection.classList.remove('active');
})
buyGoingBtn.addEventListener('click', ()=>{
    console.log('buyGoingBtn');
    buyPopupSection.classList.remove('active');
    cartContainer.classList.add('active');
})
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
ingredientBtn.addEventListener('click', ()=>{
    ingredientPopupBG.classList.add('active');
    setTimeout(()=>{
        ingredientPopup.classList.add('active');
    }, 200)
})
ingredientCloseBtn.addEventListener('click', ()=>{
    ingredientPopupBG.classList.remove('active');
    ingredientPopup.classList.remove('active');
})
nutritionBtn.addEventListener('click', ()=>{
    nutritionPopupBG.classList.add('active');
    setTimeout(()=>{
        nutritionPopup.classList.add('active');
    }, 200)
})
nutritionCloseBtn.addEventListener('click', ()=>{
    nutritionPopupBG.classList.remove('active');
    nutritionPopup.classList.remove('active');
})