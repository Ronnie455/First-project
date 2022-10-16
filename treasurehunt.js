alert("You're connected!")
var winningNumber = Math.ceil(Math.random()*9)
var counter=3
const placeHolder = (id) => {
  if(counter>0){
    if(id===winningNumber){
      document.getElementById(id).innerHTML="🪙"
document.getElementById("winorlose").innerHTML="YOU WIN"
    }else {
    document.getElementById(id).innerHTML="💣"
    counter = counter-1
    document.getElementById("winorlose").innerHTML="YOU LOSE"
    }
  }
}
