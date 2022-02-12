# Project 
## MONSTER ENERGY DRINK Renewal Website


에너지 음료 “monster energy” 를 주제로 웹사이트를 제작하였습니다.
작업을 시작하기 앞서 가장 목표로 했던 부분들을 list화 하였습니다.

***1. 가독성***

***2. 디자인***

***3. 불필요한 html 및 css 사용 줄이기***

***4. 연산기능***


총 4가지의 목표를 잡고 직접 디자인을 한 시안을 토대로 제작단계에 돌입했습니다.



### Chapter 1 - Main page

------------------------------------------------

<img width="750" alt="monster1" src="https://user-images.githubusercontent.com/92290951/153712169-8d46b644-a1d9-4903-b512-e104ccecdc4e.png">


    
메인 페이지인만큼 블랙과 대조되는 네온 그린을 메인컬러로 사용하여 몬스터 에너지 특유의 강렬함이 돋보일 수 있도록 노력하였고
monster energy가 가지고 있는 슬로건 "UNLEASH THE BEAST"을 marquee 태그를 활용하여 흘러가도록 작업하였습니다.
스크롤 시 about 페이지로 이어지며, top 버튼 클릭 시 최상단으로 되돌아갑니다.




### Chapter 2 - Product page

------------------------------------------------

<img width="750" alt="monster2" src="https://user-images.githubusercontent.com/92290951/153712724-97223315-238b-46c9-a3cf-04ddf12ab629.png">



제품상세 페이지 입니다. 
우측 리스트를 통해 원하는 제품을 선택하면 설명과 영양성분 등을 확인할 수 있으며 갯수 선택 후 제품 구매 버튼을 통해 가격값과 함께 장바구니에 담기도록 작업하였습니다.
연산기능은 연습만 해보고 실질적으로 작업해본 것은 처음이라 간단한 작업임에도 어려움을 겪었습니다.



+또는 - 버튼을 눌렀을 때 제품 갯수가 추가되며 각각의 가격의 + - 되는 작업코드 
// 아래의 코드는 값이 감소되는 식



```Javascript

let productIndex = 0;
let price = 2200;
let total = 1;
let priceTotal = 2200;

addMinusBtn.addEventListener('click', ()=>{
    console.log('addMinusBtn'); // 버튼이 눌리는지 콘솔로 확인
    if(Number(addDrinkNum.textContent > 1)){
        let minus = Number(addDrinkNum.innerText);
        let PriceResult = Number(addPriceNum.innerText); // 가격값이 담길 변수를 선언해준 뒤 가격값의 텍스트를 할당해준다.
       minus--; // 버튼 누를 시 minus 감소
       addDrinkNum.textContent = minus; // 감소된 값이 변수 addDrinkNum 안의 텍스트값에 할당
       addPriceNum.textContent = PriceResult  - price;
       productTotal = addDrinkNum.textContent;
       priceTotal =  addPriceNum.textContent;
    }
})
```



### Chapter 3 - sponsor page 

------------------------------------------------

<img width="750" alt="monster_sponsor1" src="https://user-images.githubusercontent.com/92290951/153713110-5edfdf5a-fa99-412c-bcb8-1cdc03e292c5.png">



몬스터 에너지에서 후원하는 스폰서 페이지 입니다. 뮤지션, 게이머 두 챕터로 나누어 작업하였습니다.



<img width="750" alt="monster3" src="https://user-images.githubusercontent.com/92290951/153713057-22b86f9b-e4b2-49e8-8425-40a863e70b90.png">



화살버튼을 통해 스폰서들을 확인할 수 있으며 sns 아이콘을 클릭하면 해당 뮤지션 및 게이머의 sns 사이트로 이동합니다.
javascript의 배열을 활용하여 버튼 클릭 시 텍스트와 이미지가 바뀌도록 했습니다.



### Chapter 4 - cart page 

------------------------------------------------

<img width="750" alt="monster4" src="https://user-images.githubusercontent.com/92290951/153713372-da15e07c-edb5-4b4c-8a51-47707afa1ffb.png">



장바구니 페이지 입니다. 
제품페이지에서 담은 제품명과 갯수, 토탈 가격값 등을 확인할 수 있습니다.
제품 리스트에 마우스 커서를 올리면 삭제버튼이 뜨도록 작업하였습니다. 



1. product page에서 addcart 버튼을 눌렀을 때 카트에 제품이 담아주기 위한 코드
   - html을 비워둔 뒤, innerHTML 를 활용하여 비어있는 ul에 li를 추가시켜줍니다.



```Javascript

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
```


2.  카트에 담긴 제품들의 가격을 합산하는 코드
3.  카트에 담긴 제품 리스트 삭제 코드



```Javascript

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
```




## 작업 후기



여러모로 어려움이 많았던 작업물이지만 그만큼 내가 해냄!이라는 만족감을 얻을 수 있었습니다.
처음 해보는 기능도 있었고, 제법 손에 익은 기능도 있었지만 작업을 할 때마다 새로웠습니다.

막힐 때는 도대체 왜 오류가 뜨는지, 오류마저 뜨지 않고 실행이 안될 때에는 내가 어디서부터 잘못되었는가를 되집어보며 찬찬히 코드를 뜯어봤던 것 같습니다.
그리고 해결했을 때의 그 해방감과 쾌감이 작업 하면서 어렵고 힘들게만 느껴졌던 그 순간들을 싹 지워주는 것 같았습니다.. 이래서 코딩하는 구나 싶고.
물론 엄청나게 대단한 프로젝트를 한 것은 아니지만 제가 할 수 있는 모든 것을 쏟아부은 작업물이 된 것 같습니다!
목표했던 %를 채울 수 있는 사람에 더 가까워진 것 같습니다. 다음에는 더 재밌고, 새로운 기능들을 도전해볼 생각입니다.

오늘도 저는 한걸음 나아갑니다~!!




