//Importing libraries
var readlineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;
let seriesSelect = 0;
let quesListSelect;

var userName = readlineSync.question(chalk.green('What is your name ?  '));

function welcome(){
console.log('\nWelcome '+chalk.blue(userName)+'\n');
console.log(chalk.green('******************'));
}

function start(){
   seriesSelect = readlineSync.question(chalk.green('What anime series do you like ? \n 1.One Piece \n 3.Dragon Ball Z \n What is your option: '));
  console.log('You selected :'+chalk.green(seriesSelect)+'\n');
  console.log('\n'+chalk.blue('Let me ask some questions related to series')+'\n');
} 




function question(ques, ans){
  var userAns = readlineSync.question(chalk.green(ques));

  if( userAns == ans){
    score = score + 1 ;
    console.log(chalk.green('Correct'));
    console.log('current score : '+chalk.blue(score));
    console.log(chalk.green('******************'));
  } else{
    if( score > 0  ) { score = score - 1 ;}
    console.log(chalk.red('Wrong!'));
    console.log('current score : '+chalk.blue(score));
    console.log(chalk.green('******************'));
  } 

}

const quesList1 = [{question:'Who promised that they would never lose another fight until they defeated a certain someone? \n 1.Luffy \n 2.Sanji \n 3.Zoro \n What is your answer 1,2,3 \n ',ans:3},
          {question:'How did Luffy get the scar under his eye? \n 1.Fight with animal \n 2.Himself \n 3.Attacked by bandits  \n What is your answer 1,2,3 \n ',ans:2},
          {question:'Who was the first member of the SH crew to try and recruit a new member besides Luffy? \n 1.Zoro \n 2.Sanji \n 3.Nami  \n What is your answer 1,2,3 \n ',ans: 3},
          {question:'Who was the first villain to defeat Luffy?  \n 1.Arlong \n 2.Crocodile \n 3.Buggy    \n What is your answer 1,2,3 \n ',ans:2},
          {question:'Who was the first Admiral to be shown in the series? \n 1.Aokiji \n 2.Kizaru \n 3.Akainu  \n What is your answer 1,2,3 \n ',ans:1},
          ];

  
 const quesList2 = [{question:'Who was the first character in Dragon Ball Z to make a wish on the Dragon Balls? \n 1.Bulma  \n 2.Krillin \n 3.Master Roshi \n What is your answer 1,2,3 \n ',ans:3},
          {question:'Which planet is never shown to be destroyed at any point in Dragon Ball Z? \n 1. Earth \n 2.King Kais Planet \n 3.The Sacred World of the Kai  \n What is your answer 1,2,3 \n ',ans:3},
          {question:'What is the name of Universe 7 God of Destruction? \n 1.Beerus \n 2.kami \n 3.piccolo  \n What is your answer 1,2,3 \n ',ans: 1},
          {question:' Which Planet was Goku born? \n 1.Planet Vegeta \n 2.Planet piccolo \n 3.Earth    \n What is your answer 1,2,3 \n ',ans:1},
          
          ]; 



function game(){
  
  if ( seriesSelect == 1 ) {
      quesListSelect = quesList1;
  } else {
    quesListSelect = quesList2;
  }

  for (let i = 0 ; i< quesListSelect.length ; i++){
    question(quesListSelect[i].question,quesListSelect[i].ans);
  }

}

function end(){
console.log(chalk.blue('------------------'));
console.log(chalk.yellow('Your Last Score :'+score));
console.log(chalk.blue('------------------'));
}

welcome();
start();
game();
end();




