const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    
    rl.question('What do you listen to while doing that? ', (answer3) => {
      
      rl.question('What\'s your favourite food? ', (answer4) => {
      
        rl.question('What\'s your favorite fruit? ', (answer5) => {
         
          rl.question('What\'s your favorite sport? ', (answer6) => {
         
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
             
              console.log(`My name is ${answer1}. My favorite activity is ${answer2}. I listen to ${answer3} while doing it. My favorite food is ${answer4} and my favorite fruit is ${answer5}. I like playing ${answer6} and my awesome super power is ${answer7}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});




