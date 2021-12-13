// 영양 칼로리
const ingredienKcal = document.querySelector('.ingredient-title-sub > span:last-of-type');
// 나트륨
const SodiumGram = document.querySelector('.ingredient-table > table > tbody > tr:first-of-type > td:nth-of-type(2)');
const SodiumPer = document.querySelector('.ingredient-table > table > tbody > tr:first-of-type > td:nth-of-type(3)');
// 탄수화물
const CarbohydrateGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(2) > td:nth-of-type(2)');
const CarbohydratePer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(2) > td:nth-of-type(3)');
// 당류
const SugarGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(3) > td:nth-of-type(2)');
const SugarPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(3) > td:nth-of-type(3)');

const fatGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(4) > td:nth-of-type(2)');
const fatPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(4) > td:nth-of-type(3)');
// 단백질
const ProteinGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(8) > td:nth-of-type(2)');
const ProteinPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(8) > td:nth-of-type(3)');
// 비타민2 ~ 판토텐산(비타민5)
const VitaminName = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(9) > td:nth-of-type(1)');
const VitaminGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(9) > td:nth-of-type(2)');
const VitaminPer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(9) > td:nth-of-type(3)');
// 비타민 12
const VitaminTweleveGram = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(11) > td:nth-of-type(2)');
const VitaminTwelevePer = document.querySelector('.ingredient-table > table > tbody > tr:nth-of-type(11) > td:nth-of-type(3)');

let ingredientTable = [
    { // 몬스터에너지
        kcal:'168kcal',
        sodiumG:'273mg',
        sodiumP:'14%',
        CarbohydrateG:'44g',
        CarbohydrateP:'14%',
        SugarG:'41g',
        SugarP:'41%',
        FatG:'0g',
        FatP:'0%',
        ProteinG:'0g',
        ProteinP:'0%',
        VitaminN:'비타민 B2',
        VitaminG:'2.6mg',
        VitaminP:'186%',
        VitaminTwelG:'9μg',
        VitaminTwelP:'375%',
    },
    {   // 망고로코
        kcal:'175kcal',
        sodiumG:'61mg',
        sodiumP:'3%',
        CarbohydrateG:'41g',
        CarbohydrateP:'13%',
        SugarG:'41g',
        SugarP:'41%',
        FatG:'0.8g',
        FatP:'1%',
        ProteinG:'1g',
        ProteinP:'2%',
        VitaminN:'비타민 B2',
        VitaminG:'2.6mg',
        VitaminP:'186%',
        VitaminTwelG:'9μg',
        VitaminTwelP:'375%',
    },
    { // 파이프펀치
        kcal:'150kcal',
        sodiumG:'56mg',
        sodiumP:'3%',
        CarbohydrateG:'36g',
        CarbohydrateP:'11%',
        SugarG:'35g',
        SugarP:'35%',
        FatG:'1g',
        FatP:'2%',
        ProteinG:'0.1g',
        ProteinP:'0%',
        VitaminN:'비타민 B2',
        VitaminG:'2.6mg',
        VitaminP:'186%',
        VitaminTwelG:'9μg',
        VitaminTwelP:'375%',
    },
    { // 울트라
        kcal:'14kcal',
        sodiumG:'275mg',
        sodiumP:'14%',
        CarbohydrateG:'4g',
        CarbohydrateP:'1%',
        SugarG:'0g',
        SugarP:'0%',
        FatG:'0.4g',
        FatP:'1%',
        ProteinG:'1g',
        ProteinP:'2%',
        VitaminN:'펜토펜산(비타민 B5)',
        VitaminG:'15mg',
        VitaminP:'300%',
        VitaminTwelG:'9μg',
        VitaminTwelP:'375%',
    },
    { // 울트라 시트라
        kcal:'11kcal',
        sodiumG:'275mg',
        sodiumP:'14%',
        CarbohydrateG:'4g',
        CarbohydrateP:'1%',
        SugarG:'0g',
        SugarP:'0%',
        FatG:'0.1g',
        FatP:'0%',
        ProteinG:'1g',
        ProteinP:'2%',
        VitaminN:'펜토펜산(비타민 B5)',
        VitaminG:'15mg',
        VitaminP:'300%',
        VitaminTwelG:'9μg',
        VitaminTwelP:'375%',
    },
    { // 울트라 파라다이스
        kcal:'14kcal',
        sodiumG:'230mg',
        sodiumP:'12%',
        CarbohydrateG:'2g',
        CarbohydrateP:'1%',
        SugarG:'0g',
        SugarP:'0%',
        FatG:'0g',
        FatP:'0%',
        ProteinG:'1.4g',
        ProteinP:'3%',
        VitaminN:'펜토펜산(비타민 B5)',
        VitaminG:'15mg',
        VitaminP:'300%',
        VitaminTwelG:'8μg',
        VitaminTwelP:'333%',
    }
]

const nutritionText = document.querySelector('.nutrition-content > p');
let nutritionLink = [
    {
        text:'정제수, 설탕, 포도당, 구연산, 합성향료(플레이버-엠이지), 몬스터 에너지 코리아 블렌드[타우린, 니코틴산아미드, 정제소금, 비타민 B12 제제(만니톨, 비타민 B12) 이노시톨, 과라나추출분말, 비타민 B6 염산염, 비타민 B2, 덱스트린], 구연산삼나트륨, 안식향산(보존료), L-카르니틴, 이산화탄소, 차추출물(녹차), 카페인(향미증진제), 포도과피색소, 수크랄로스(감미료)'
    },
    {
        text:'정제수, 설탕, 망고농축퓨레, 포도당, 구아바퓨레, 백포도농축액, 구연산, 타우린, 사과농축액, 합성향료, 이산화탄소, 구연산칼륨, 파인애플시럽, 오렌지농축액, 인삼추출물, 구연산나트륨, 살구퓨레, 복숭아퓨레, DL-사과산, 수크랄로스(감미료), 차추출물(녹차), 카페인(향미증진제), β-카로틴(착색료), 덱스트린, 니코틴산아미드, 잔탄검, 알긴산나트륨, 아라비아검,  L-카르니틴, 과라나추출분말, 이노시톨, 패션프루트농축액, 포도과즙색소, 레몬농축액, 비타민 B6염산염, 자색고구마농축액, 비타민 B2, 스테비올배당체, 비타민 B12 복숭아 함유'
    },
    {
        text:'정제수, 설탕, 파이프라인펀치컴파운드[사과농축액, 오렌지농축액, 구아바농축액, 파인애플농축액, 패션푸르트농축액, 구연산, 코코넛오일, 유채유, 변성전분, β-카로틴(착색료), 비타민 E, 비타민 C, 합성향료(파이프라인펀치향)], 포도당, 이산화탄소, 코리아 파이프라인 에너지 블렌드[타우린, 말토덱스트린, 니코틴산, 이노시톨, 비타민 B6염산염, 비타민 B2, 과라나씨추출물, 비타민 B12], 구연산, 합성향료(망고구아바향), 인삼추추룰, 구연산삼나트륨, 소브산칼륨(보존료), 카페인(향미증진제), 차추출물(녹차), 안식향산나트륨(보존료), 수크랄로스(감미료), L-카르니틴, 정제소금'
    },
    {
        text:'정제수, 설탕, 포도당, 구연산, 에리스리톨, 이산화탄소, 몬스터  코리아 울트라 블렌드[타우린, 니코틴산아미드, 판토텐산칼슘, 정제소금, 과라나추출분말, 이노시톨, 비타민 B6 염산염, 비타민 B12 제제(비타민B12, 덱스트린)], 구연산삼나트륨, 인삼추출물(진세노이드 1.6mg/g 이상)안식향산(보존료), L-카르니틴, 합성착향료(트로피칼향, 시트러스향), 에스디 클라우딩 에이전트(아라비아검, 덱스트린, 중쇄중성지바), 수크랄로스(감미료), 차추출물(녹차), 카페인(향미증진제), 아세설팜칼륨(합성감미료)'
    },
    {
        text:'정제수 에리스티롤, 이산화탄소, 몬스터 콜리아 울트라[타우린, 니코틴산아미드, 판토텐산칼슘, 정제소금, 과라나추출분말, 이노시톨, 비타민 B6염산염, 비타민B12제제(비타민B12, 덱스트린)], 구연산, 레몬에이드향타입 에멀젼[정제수, 아라비아검, 천연레몬햐, 에스테르검, 구연산, 안식향산나트륨(보존료)], 합성향료(레몬에이드향, 시트론레몬향, 시트러스향), 인삼추출물, 구연산나트륨,  L-카르니틴, 소브산칼륨(보존료), 수크랄로스(감미료), 차추출물(녹차), 안식향나트륨(보존료), 카페인(향미증진제), 아세설팜칼륨(감미료), 옐로우칼라솔루션[정제수, 식용색소황색제4호(착색료), 식용색소황색제 5호(착색료), 구연산, 안식향산나트륨(보존료)], 대두(레몬에이드향) 함유'
    },
    {
        text:'정제수, 구연산, 타우린, 이산화탄소, 구연산삼나트륨, 인삼추춞물, 합성향료,  L-카르니틴, 소브산칼륨(보존료), 아세설팜칼륨(감미료),  수크랄로스(감미료), 차추출물(녹차), 안식향나트륨(보존료), 카페인(향미증진제), 니코틴산아미드, 판토텐산칼슘, 아라비아검, 정제소금, 과라나추출분말, 이노시톨, 에스테르검, 천얀향료, 비타민B6염산염, 젖산, 덱스트린, 식용색소황색제 4호(착색료), 식용색소청색제1호(착색료), 비타민B12'
    }

]

ingredientTable = Array.prototype.slice.call(ingredientTable);
nutritionLink = Array.prototype.slice.call(nutritionLink);