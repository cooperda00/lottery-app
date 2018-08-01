//Variables
const button = document.querySelector('button');

//Create Random Number 1-59 Function
function randNum() {
  return Math.floor(Math.random() * 59) + 1; 
}

//Button On-click
button.addEventListener('click', () => {
  //create empty array
  let lotteryNumbers = [];
  
  //Loop 7 times (one for each ball)
  for (let i = 0; i < 7; i++){
    //create random num and assign to variable
    let num = randNum();
    //if statement to check it's not in array
    if(lotteryNumbers.indexOf(num) === -1) {
      //push to array
      lotteryNumbers.push(num);
      //Otherwise Try Again
    } else {
      i--;
    }
    //Put array numbers in right locations
    document.querySelector('#ball'+(i+1)).textContent = lotteryNumbers[i];
  }
  
  //Log numbers for testing
  console.log(lotteryNumbers);
});