const sponserNavList = document.querySelectorAll('.sponser-content>.sponser-nav > .nav-area > nav > ul > li');
const sponserArea = document.querySelectorAll('.sponser-area');
const musicianContainer = document.querySelector('.musician-container');
let musicianList = document.querySelectorAll('.sponser-area > .sponser-kind  > .music > ul > li ');
const musicianPrevBtn = document.querySelector('.musician-btn > button.prev');
const musicianNextBtn = document.querySelector('.musician-btn > button.next');
const musicianName = document.querySelector('.musician-title > h3');
const musicianInfo = document.querySelector('.musician-info > p');
let musicianSns = document.querySelectorAll('.musician-sns > .sns-imgs > img');

musicianList = Array.prototype.slice.call(musicianList);
musicianSns = Array.prototype.slice.call(musicianSns);

let musicianInfoLInk =[
    {
        name:'Ayanis',
        img:'img/musician/Ayanis.jpg',
        info:'he dream soon became a reality. Ayanis signed with island Prolific/Atlantic Records in December 2017 and soon after released the girl power single, “F.I.Y.T.” (Fuck Is You Thinking).” In 2018, Ayanis wrapped the Access Granted: HBCU Tour presented by Atlantic Records and Live Nation Urban where she was visiting select HBCUs throughout the homecoming season. That same year, she released her debut EP, DIRECTION, which included acclaimed tracks “Awh Yeh” and “F.I.Y.T. (Fuck Is You Thinking).” In 2019, she tapped rap superstar Wiz Khalifa to deliver a sensual record, “One Night.” 2020 marked the start of a new chapter in the artist’s career, unveiling a new collaboration with fellow R&B sensation Queen Naija for “Lil Boi (Big Talk),” later to be remixed in 2021 by Jack Harlow. The year also welcomed her single, “Ecstasy,” ahead of the release of her second EP, YANI. 2020 was a noteworthy year but Ayanis is not letting up. She kicked off the new year as one of Billboard’s ‘15 Hip-Hop and R&B Artists to Watch in 2021’ and has followed that up with the release of the sensual track “Blues” and the impressive collaboration, “Drip (Feat. Mulatto).”'
    },
    {
        name:'The Bloody Beetroots',
        img:'img/musician/TheBloodyBeetroots.jpg',
        info:'A joyful cheer … a raised fist … an upward roll of the eyes … no matter where you come from, you can decode these signals without a dictionary. You don` t always need words to communicate but they sure can make a big difference. "I wasn`t mature enough before to understand how much weight words can have," says producer Sir Bob Cornelius Rifo, mastermind of The Bloody Beetroots. Now, as his music evolves to a higher state, language—in all its gravity and fluidity—plays a pivotal role as heard on this third album The Great Electronic Swindle for Last Gang Records. Certainly, language barriers didn`t stop the Italian-born Rifo from connecting with audiences worldwide almost immediately after he unleashed The Bloody Beetroots in late 2006. Inspired by Rifo`s lifelong love of comic books and punk rock, the visceral kick of the Beetroots sound has featured prominently in TV shows and video games, and powered dozens of remixes for artists including Chemical Brothers, Depeche Mode, The Refused, Peaches and Britney Spears. The Bloody Beetroots and Sir Bob Cornelius Rifo’s discography features a string of successful EPs and two full length albums (2009’s Roborama and 2013’s Hide) —including collaborations with Sir Paul McCartney, Tommy Lee, Steve Aoki, Peter Frampton and many more. Clubs, theaters and festivals around the world have thrilled to different incarnations of The Bloody Beetroots’ incendiary live show. From Coachella and Lollapalooza to Governor’s Ball and Big Day Out, The Bloody Beetroots Live have entertained millions across six continents.   Rifo doesn`t just want to entertain audiences; he strives to engage and challenge them, emotionally and intellectually. Changes in Rifo`s personal life and the world in general have inspired him to speak with increasing openness–and listen attentively to the words and ideas of others as well. That in turn enabled Rifo to work more closely with myriad artists on this album.',
    },
    {
        name:'Five Finger Death Punch',
        img:'img/musician/FiveFingerDeathPunch.jpg',
        info:'Five Finger Death Punch is a rock band from Los Angeles. Formed in 2005, the group`s name comes from classical martial arts films. It consists of vocalist Ivan Moody, guitarist Zoltan Batori, Jason Hook, bassist Chris Kael and drummer Jeremy Spencer. Their debut album The Way of the FIST was released in 2007, heralding the band`s rapid success. The 2009 follow-up album WAR IS THE Answer further increased their popularity, and both albums were gold certified by the American Recording Industry Association. The ban`s third album, American Capitalist, was released in October 2011, achieving its gold status within the year. The band has a joint headline for the 2013 Mayhem Festival Tour (USA) and is often seen performing the largest international music festivals such as Download (UK), Lockamling (GER), Soundwave (AUS), and Knotfest (JP). Five Finger Death Punch was the winner of the Radio Contraband Rock Radio Awards for "Indie Artist of the Year" in 2011, 2012, and 2013. They were also honored in the 2012 Radio Contraband Rock Radio Awards Album category and Song of the Year category.',
    },
    {
        name:'Madball',
        img:'img/musician/TheBloodyBeetroots.jpg',
        info:'When you talk about New York Hardcore ( NYHC ) one name comes to your mind, MADBALL. They are one of the most respected band on the hardcore scene, performing allover the world for more than two decades. Frontman Freddy Cricien who`s little brother of AGNOSTIC FRONT Roger Miret has an incredible energy on stage, a real beast! This is a band you must see live. Europe is lucky enough to have the Rebellion tour every year hosted by MADBALL themself. The band is also oftne seen performing in every main European festivals, playing in front of thousands of fans. They are the heavy weight belt of hardcore music!',
    },
    {
        name:'RIZE',
        img:'img/musician/Ayanis.jpg',
        info:'A Japanese rock band consisting of members; Jesse (Vo, G), Kaneko Nobuaki (Dr) and KenKen (Ba, Vo). Formed in 1997, their major debut in single "Kaminari" released in 2000. That attitude that expresses the present (now) of Rock is supported by many listeners. They continue to show off their live performances to domestic and foreign rock fans alike, including his own tour, appearances in numerous domestic festivals, success in the national tour abroad, participating in events in various parts of Asia. In 2017 they hit their 20 years anniversary and performed 40 domestic tours as well as their first Japanese Budokan performance.'
    },
    {
        name:'Suicidal Tendencies',
        img:'img/musician/Ayanis.jpg',
        info:'Judging from their name, Suicidal Tendencies were never afraid of a little controversy. Formed in Venice, CA, during the early `80s, the group`s leader from the beginning was outspoken vocalist Mike Muir. The outfit specialized in vicious hardcore early on -- building a huge following among skateboarders, lending a major hand in the creation of skatepunk -- before turning their focus eventually to thrash metal. Early on, the group (whose original lineup included Muir, guitarist Grant Estes, bassist Louiche Mayorga, and drummer Amery Smith) found it increasingly difficult to book shows, due to rumors of its members` affiliation with local gangs and consistent violence at their performances. The underground buzz regarding Suicidal Tendencies grew too loud for labels to ignore though, as the quartet signed on with the indie label Frontier; issuing Muir and company`s classic self-titled debut in 1983. The album quickly became the best-selling hardcore album up to that point; its best-known track, "Institutionalized," was one of the first hardcore punk videos to receive substantial airplay on MTV, and was eventually used in the Emilio Estevez cult classic movie Repo Man, as well as in an episode for the hit TV show Miami Vice (for which the group made a cameo appearance).'
    },
    
]

for(let i = 0; i < sponserNavList.length; i++){
    sponserNavList[i].addEventListener('click',()=>{
        for(let i = 0; i < sponserArea.length; i++){
            sponserArea[i].classList.remove('active');
        }
        sponserArea[i].classList.add('active');
    })
}
for(let i = 0; i < musicianList.length; i++){
    musicianList[i].addEventListener('click', (e)=>{
        let musicianEl = e.currentTarget;
        musicIndex = musicianList.indexOf(musicianEl);
        console.log('musicIndex', musicIndex);
        musicianContainer.classList.add('active');
        for(let i = 0; i < musicianInfoLInk)
    })
}
// console.log(musicianList);
// console.log(musicianContainer);