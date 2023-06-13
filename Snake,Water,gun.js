
function swg(wo)
  {
    return wo[Math.floor(Math.random()*wo.length)];
  }
alert("let the game begin!!!!")

let chances=0;
while(chances!==2)
  { 
    let wo=["snake","water","gun"]
    let player1=prompt("choose player 1:")
    let player2=swg(wo);
    alert("player 2 is: " + player2)
    
   


    if(player1=="snake" && player2=="gun")
    {
      alert("player2 wins!!")
    }
    else if(player1=="gun" && player2=="snake")
    {
      alert("player1 wins!!")
    }
     else if(player1=="snake" && player2=="water")
    {
      alert("player1 wins!!")
    }
     else if(player1=="water" && player2=="snake")
    {
      alert("player2 wins!!")
    }
     
    else if(player1=="water" && player2=="gun")
    {
      alert("player1 wins!!")
    }
    else if(player1=="gun" && player2=="water")
    {
      alert(" player2 wins!!")
    }
   else if(player1=="snake" && player2=="snake")
   {
     alert("tieee")
   }
    else if(player1=="water" && player2=="water")
   {
     alert("tieee")
   }
    else if(player1=="gun" && player2=="gun")
   {
     alert("tieee")
   }
    chances++;
  }
if(chances=2)
{
  alert("the end")
}
