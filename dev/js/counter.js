let totalNumber = document.querySelectorAll('.counter-text');
let getNumber = Array.from(totalNumber)


getNumber.map((viewNumber) => {
  console.log(viewNumber.dataset.number)
  let startCount = 0
  let counterUP = () => {
      startCount++
     viewNumber.innerHTML = `${startCount}`
     if(startCount == viewNumber.dataset.number){
         clearInterval(countStop)
     }
  }
  let countStop = setInterval(() => {
      counterUP()
  },50)
})



