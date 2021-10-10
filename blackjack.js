let card1,card2,card3,card=[1,2,3],sum,hasBlackJack,isAlive,msg,msgSum,msgCard,x=0;
function initialise()
{ 
    card1=Math.floor(Math.random()*14)+1;
    card2=Math.floor(Math.random()*14)+1;
    card=[card1,card2];
    sum=card1+card2;
    hasBlackJack=false;
    isAlive=true;
    msg="";
    msgSum="Sum: ";
    msgCard="Cards: "+card[0]+" "+card[1];
    x=0;
}
//console.log(card.length!=3);
function start()
{
    if(x<1)
    initialise();
    x++;
    document.querySelector("#p2").textContent=msgCard;
    document.querySelector("#p3").textContent=msgSum+sum;
    if(sum<=20)
    {
        msg="Do you want to draw a new card?";
        document.getElementById("p1").textContent=msg; 
    }
    else if(sum===21)
    {
        msg="Wohooo!!! You've got a black jack!!! :)";
        hasBlackJack=true;
        document.getElementById("p1").textContent=msg;
    }
    else
    {
        msg="You are out of game :("
        isAlive=false;
        document.getElementById("p1").textContent=msg;
    }
}
function newCard()
{
    if(isAlive&&!hasBlackJack)
    {
        let card3=Math.floor(Math.random()*14)+1;
        card.push(card3);
        sum+=card[2];
        msgCard+=" "+card[2];
        start();
    }
}
function restart()
{
    initialise();
    document.getElementById("p1").textContent="want to play a round";
    document.getElementById("p2").textContent="Cards:";
    document.getElementById("p3").textContent="Sum:";


}