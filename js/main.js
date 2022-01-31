const monsterNavList = document.querySelectorAll('.monster-nav > ul > li > a');
const monsterNav = document.querySelector('.monster-nav');
let section = document.querySelectorAll('section');
const mainContainer = document.querySelector('.main-container');
const monsterMainImg = document.querySelector('.monster-main-images > img');
const monsterScrollIntend = document.querySelector('.monster-main-area > .scroll-intend');
const aboutContentText = document.querySelector('.about-content-text');
const aboutContentImages = document.querySelectorAll('.monster-about-images > img');
const aboutContentSvgs  = document.querySelectorAll('.svg-stars > svg');
const productContentContainer =  document.querySelector('.product-container > .product-content');
const productContent = document.querySelector('.product-container > .product-content >.product-text');
const bugerContainer = document.querySelector('.buger-container');
const bugerCover = document.querySelector('.buger-cover');
let bugerMonsterList = document.querySelectorAll('.buger-monster-list > ul > li')
const monsterHamBtn = document.querySelector('.monster-ham-btn');
const btnLine = document.querySelectorAll('.btn-line > span');
const cartResponsiveBtn = document.querySelector('.cartResponsiveBtn > a')
bugerMonsterList = Array.prototype.slice.call(bugerMonsterList);
const btt = document.getElementById('back-to-top');
let scrollPos;
let docHeight; 
docHeight = Math.max(mainContainer.scrollHeight,mainContainer.offsetHeight);


mainContainer.addEventListener('scroll',()=>{
    value = mainContainer.scrollTop;
    console.log(value);
    if(value >= 0 && value < 500){
        monsterMainImg.classList.remove('active');
        aboutContentImages[0].classList.remove('active');
        aboutContentImages[1].classList.remove('active');
        aboutContentSvgs[0].classList.remove('active');
        aboutContentSvgs[1].classList.remove('active');
        aboutContentSvgs[2].classList.remove('active');
        monsterNavList[0].classList.remove('active');
        
    }
    if(value >= 200 && value < 300){
        setTimeout(()=>{
            monsterScrollIntend.classList.add('active');
        }, 300)
      
    }
    if(value >= 300 && value < 700){
        monsterMainImg.classList.remove('active');
    }
    if(value >= 700 && value < 800){
        monsterMainImg.classList.remove('active');
        aboutContentText.classList.remove('active');
        aboutContentImages[0].classList.remove('active');
        aboutContentImages[1].classList.remove('active');
        aboutContentSvgs[0].classList.remove('active');
        aboutContentSvgs[1].classList.remove('active');
        aboutContentSvgs[2].classList.remove('active');
        monsterNavList[0].classList.add('active');
        monsterScrollIntend.classList.remove('active');
    }
    if(value >= 800 && value < 1000){
        aboutContentText.classList.add('active');
        monsterMainImg.classList.add('active');
        setTimeout(()=>{
            aboutContentImages[0].classList.add('active');
        }, 500)
        setTimeout(()=>{
            aboutContentImages[1].classList.add('active');
        }, 500)
        setTimeout(()=>{
            aboutContentSvgs[0].classList.add('active');
            aboutContentSvgs[1].classList.add('active');
            aboutContentSvgs[2].classList.add('active');
        }, 500)
      
    }

})


for(let i = 0; i < monsterNavList.length; i++){
    monsterNavList[i].addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e.target);
        let target = e.currentTarget;
        // monsterNavIndex = monsterNavList.indexOf(target);
        console.log('target', target);
        for(let i = 0; i < section.length; i++){
            section[i].classList.remove('active');

        }
        for(let j = 0; j < monsterNavList.length; j++){
            monsterNavList[j].classList.remove('active');
        }
        monsterNavList[i].classList.add('active');
        section[i].classList.add('active');
        musicianContainer.classList.remove('active');
        gamerContainer.classList.remove('active');


        
    })
}

let isSecond = false;
monsterNavList[1].addEventListener('click',()=>{
    console.log('click');
    setTimeout(()=>{
        productContent.classList.add('active');
    },55);
    if(isSecond === false){
        let first = 0;
        productName.innerText = productInfoLink[first].name;
        productFlavor.innerText = productInfoLink[first].flavor;
        productInfoText.innerText = productInfoLink[first].text;
        productSubInfo.innerText = productInfoLink[first].sub;
        productDrinkImages.setAttribute('src', productInfoLink[first].img);
        productFruitImages.setAttribute('src', productInfoLink[first].fruit )

        ingredienKcal.innerText = ingredientTable[first].kcal;
        SodiumGram.innerText = ingredientTable[first].sodiumG;
        SodiumPer.innerText = ingredientTable[first].sodiumP;
        CarbohydrateGram.innerText = ingredientTable[first].CarbohydrateG;
        SugarGram.innerText = ingredientTable[first].SugarG;
        SugarPer.innerText = ingredientTable[first].SugarP;
        fatGram.innerText = ingredientTable[first].FatG;
        fatPer.innerText = ingredientTable[first].FatP;
        ProteinGram.innerText = ingredientTable[first].ProteinG;
        ProteinPer.innerText = ingredientTable[first].ProteinP;
        VitaminName.innerText = ingredientTable[first].VitaminN;
        VitaminGram.innerText = ingredientTable[first].VitaminG;
        VitaminPer.innerText = ingredientTable[first].VitaminP;
        VitaminTweleveGram.innerText = ingredientTable[first].VitaminTwelG;
        VitaminTwelevePer.innerText = ingredientTable[first].VitaminTwelP;
        nutritionText.innerText = nutritionLink[first].text;
    }
})
monsterNavList[2].addEventListener('click',()=>{
    console.log('click');
    setTimeout(()=>{
        productContent.classList.remove('active');
    },55);
})

function scrollToTop(){
    var scrollInterval = setInterval(()=>{
        scrollPos = mainContainer.scrollTop;
        if(scrollPos != 0){
            mainContainer.scrollBy(0, -55);
        }else{
            clearInterval(scrollInterval);
        }
    }, 15);
}

btt.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollToTop();
});



if(matchMedia("screen and (max-width : 600px)").matches){
    monsterNav.classList.add('active');
    
    monsterHamBtn.addEventListener('click',()=>{
        console.log('click!');
        bugerContainer.classList.toggle('active');
        bugerCover.classList.toggle('active');

    })

    for(let i = 0; i < bugerMonsterList.length; i++){
        bugerMonsterList[i].addEventListener('click',(e)=>{
            let targetIndex = e.currentTarget;
            navListIndex = bugerMonsterList.indexOf(targetIndex);
            for(let i = 0; i < section.length; i++){
                section[i].classList.remove('active');
            }
            console.log('click');
            section[i].classList.add('active');
            setTimeout(()=>{
                bugerContainer.classList.toggle('active');
                bugerCover.classList.toggle('active');
            },1000)
        })
    }
    cartResponsiveBtn.addEventListener('click',()=>{
        cartContainer.classList.add('active');
        bugerContainer.classList.toggle('active');
        bugerCover.classList.toggle('active');
    })
}

window.addEventListener('resize',()=>{
    if(matchMedia("screen and (min-width : 601px)and (max-width : 1024px)").matches){
        console.log('cdfsddfsds');
        productContent.style.visibility= 'visible';
        productContent.style.opacity= '1';
        // productContentContainer.style.background ='red'; 
        // productImages.style.background ='green';
        // productImages.style.width ='50%';
        // productContent.style.order ='0';
        // productContent.style.background ='blue';
    }
    if(matchMedia("screen and (max-width : 600px)").matches){
        console.log('cdfsddfsds');
        // productContent.style.visibility= 'visible';
        // productContent.style.opacity= '1';
        // monsterNav.classList.add('active');
        // productContent.style.order ='2';
    }
  
})
