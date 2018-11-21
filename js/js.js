//搜索框聚焦变色 失焦褪色
var search = document.getElementById("search");
var s = document.getElementsByClassName("search")[0];

search.onfocus = function(){
    search.style.borderRight = "1px solid rgb(255,103,0)";
    s.style.border = "1px solid rgb(255,103,0)";
}
search.onblur = function(){
    search.style.borderRight = "1px solid rgb(224,224,224)";
    s.style.border = "1px solid rgb(224,224,224)";
}

//图片播放
var p = document.getElementById("photoShow");
var i = 1;
function changePhoto(){
    function changeUrl(){
        p.src = "images/" + i + ".jpg"; 
        i++;
    }
    changeUrl();
    if(i==5){
        i=1;
    }
}
setInterval(changePhoto,3000);

var time = document.getElementById("time");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");


var h = 1;
var m = 60;
var s = 60;
function getTime(){
    
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    s = s - seconds;
    m = m - minutes;

    if(h!=1){
        if(s==60){
            s=0;
        }
        if(m==60){
            m=0;
        }
        time.innerHTML = hours + ":00 场";
        hour.innerHTML = "00";
        minute.innerHTML = m < 10 ? "0" + m : m;
        second.innerHTML = s < 10 ? "0" + s : s;
        console.log(s);
        m=60;
        s=60;
    }
    else{
        time.innerHTML = hours + ":00 场";
        hour.innerHTML = "0" + h;
        minute.innerHTML = "00";
        second.innerHTML = "00";
        h--;
    }
    console.log(s);
}
setInterval(getTime,1000);