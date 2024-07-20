// /challenge one/
let message  = 'There is no war in Ba Sing Se' ;
let arr= message .split(' ');
let cpt =arr.length;
console.log(cpt);



//  /challenge two/
let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']
for (let i = 0; i < countries.length; i++) {
    
console.log(`Your country : ${countries[i]} has the capital named : ${capital[i]}`);
}


// /challenge three/
let randomizer=parseInt(Math.random()*3);
console.log(randomizer);
switch (randomizer) {
    case 0:
        console.log(`your fate is “A certain victory”`);
        break;
    case 1:
        console.log(`your fate is “not so certain victory”`);
        break;
    case 2:
        console.log(`your fate is “an uneasy victory”`);
        break;
    default:
        console.log(` “Your fate is unclear, ô chosen undead”`);
        break;
}


// /challenge four/
function checkSeason(month ) { 
    if ((month=='december')||(month=='januaru')||(month=='february') ) {
        console.log(`the season:Winter`); 
    }else if ((month=='march')||(month=='april')||(month=='may') ) {
        console.log(`the season:Spring `); 
    }else if ((month=='june')||(month=='july')||(month=='august') ) {
        console.log(`the season:Summer `); 
    }else{
        console.log(`the season:Autumns `);
    }
}

checkSeason("april");
