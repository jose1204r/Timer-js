function counttime(time1){
    let timer = setInterval(function(){
      time1--;
      if(time1 <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time1);
      }
  
    },1000)
  }
  
  function rGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("Opps It took " + times + " try again");
      }
    },1000)
  }