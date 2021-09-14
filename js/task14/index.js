'use strict'
const timer={
  secondsPassed:0,
  minutesPassed:0,
  timerId:null,
  startTimer(){
    console.log(this);
    this.timerId=setInterval(()=>{
      console.log(this);
      this.secondsPassed+=1;
      if(this.secondsPassed===60){
        this.minutesPassed+=1;
        this.secondsPassed=0;
      }
    },1000)
    
  },
  stopTimer(){
clearInterval(this.timerId)
  },
  getTime(){

  },
  resetTimer(){

  }
}
timer.startTimer()

// // lose context #1
// const startFunc = timer.startTimer();
// startFunc();

// setInterval(()=>{
// console.log('monday')
// },2000)