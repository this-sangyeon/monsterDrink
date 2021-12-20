const monsterNavList = document.querySelectorAll('.monster-nav > ul > li > a');
let section = document.querySelectorAll('section');
const mainContainer = document.querySelector('.main-container');
const monsterMainImg = document.querySelector('.monster-main-images > img');
const monsterScrollIntend = document.querySelector('.monster-main-area > .scroll-intend');
const aboutContentText = document.querySelector('.about-content-text');
const aboutContentImages = document.querySelectorAll('.monster-about-images > img');
const aboutContentSvgs  = document.querySelectorAll('.svg-stars > svg');
const productContent = document.querySelector('.product-container > .product-content >.product-text');


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


monsterNavList[1].addEventListener('click',()=>{
    console.log('click');
    setTimeout(()=>{
        productContent.classList.add('active');
    },55);
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


