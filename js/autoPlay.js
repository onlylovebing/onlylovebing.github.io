var pics = document.getElementById("img");
var uls = document.getElementById("ul1").getElementsByTagName("li");
var con = document.getElementById("con");
var ols = document.getElementById("ols").getElementsByTagName("li");
var left = document.getElementById("left");
var right = document.getElementById("right");

var j=0;
function autoplay(){
    for(var i=0;i<=uls.length-1;i++){
        uls[i].style.display="none";
        ols[i].className="";
    }
    j++
    if(j>uls.length-1){
        j=0;
    }
    uls[j].style.display="block";
    ols[j].className="hh";
}
ss=setInterval(autoplay,3000);
con.onmousemove=function(){
    clearInterval(ss);
    left.style.display="block";
    right.style.display="block"
}
con.onmouseout=function(){
    ss=setInterval(autoplay,3000);
    left.style.display="none";
    right.style.display="none"
}
left.onclick=function(){
    for(var i=0;i<uls.length;i++){
        uls[i].style.display="none";
        ols[i].className=""
    }
    j--
    if(j<0){
        j=uls.length-1
    }
    uls[j].style.display="block";
    ols[j].className="hh";

}
for(var k=0;k<ols.length;k++){
    ols[k].index=k;
    ols[k].onmouseover=function(){
        j=this.index-1;
        autoplay();
    }
}

right.onclick=function(){
    autoplay();
}