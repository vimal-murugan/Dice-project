document.querySelector("button").addEventListener("click",function(){
    var a=(Math.floor(Math.random()*6)+1);
    var b=(Math.floor(Math.random()*6)+1);

    var c="./d"
    var cc=".jpg"
    var d="./d"
    var dd=".jpg"
    document.querySelector(".dice1 #img1").src = c+a.toString()+cc
    document.querySelector(".dice2 #img2").src = d+b.toString()+dd

    if (a>b){
        document.querySelector(".result h4").innerHTML="Player 1 Win "
    }
    else if (b>a){
        document.querySelector(".result h4").innerHTML="Player 2 Win "

    }
    else{
        document.querySelector(".result h4").innerHTML="‎ ‎ ‎ ‎  DRAW "
    }

})
