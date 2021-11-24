p1n=localStorage.getItem("n1");
p2n=localStorage.getItem("n2");
p1s=0;
p2s=0;
document.getElementById("player1n").innerHTML=p1n+" :";
document.getElementById("player2n").innerHTML=p2n+" :";
document.getElementById("player1s").innerHTML=p1s;
document.getElementById("player2s").innerHTML=p2s;
document.getElementById("playerq").innerHTML="Question Turn: "+p1n;
document.getElementById("playera").innerHTML="Answer Turn: "+p2n;

function submit(){
   get1stno=document.getElementById("no1").value;
   get2ndno=document.getElementById("no2").value;

   ans=parseInt(get1stno)*parseInt(get2ndno)
   
   q1="<h4>"  +get1stno+"X"+get2ndno+" </h4> ";
   i1="<br> A:<input type='number' id='ibox'>  ";
   b1="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button> ";
   total=q1+i1+b1
   document.getElementById("output").innerHTML=total;
   document.getElementById("no1").value="";
   document.getElementById("no2").value="";
}
qturn="player1"
aturn="player2"
function check(){
    getans=document.getElementById("ibox").value;
    if (getans==ans){
        if (aturn=="player1"){
            p1s=p1s+1;
            document.getElementById("player1s").innerHTML=p1s
        }else{
            p2s=p2s+1;
            document.getElementById("player2s").innerHTML=p2s
        }
    }
    if(qturn=="player1"){
        qturn="player2"
        document.getElementById("playerq").innerHTML="Question Turn : "+p2n
    }else{
        qturn="player1"
        document.getElementById("playerq").innerHTML="Question Turn : "+p1n
    }
    if(aturn=="player1"){
        aturn="player2"
        document.getElementById("playera").innerHTML="Answer Turn : "+p2n
    }else{
        aturn="player1"
        document.getElementById("playera").innerHTML="Answer Turn : "+p1n
    }
}