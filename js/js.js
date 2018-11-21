//搜索框聚焦变色 失焦褪色
var search = document.getElementById("search");
var s = document.getElementById("s");
var placeHolder = document.getElementsByClassName("placeholder")[0];
search.onfocus = function () {
    search.style.borderColor = "rgb(255,103,0)";
    // s.style.borderColor = "rgb(255,103,0)";
    placeHolder.style.display = "none";
}
search.onblur = function () {
    search.style.borderColor = "rgb(224,224,224)";
    // s.style.borderColor= "rgb(224,224,224)";
    placeHolder.style.display = "block";
}
// 下拉菜单
var downItems = document.getElementsByClassName("down-items");
var drop = document.getElementsByClassName("drop");
for (let i = 0; i < downItems.length; i++) {
    drop[i].onmouseenter = function () {
        downItems[i].style.display = "block";
    }
    drop[i].onmouseleave = function () {
        downItems[i].style.display = "none";
    }
}

// 右菜单栏
var dropRight = document.getElementsByClassName("drop-right");
var right = document.getElementsByClassName("right");
console.log(dropRight);
console.log(right);
for (let i = 0; i < right.length; i++) {
    dropRight[i].onmouseenter = function () {
        right[i].style.display = "block";
    }
    dropRight[i].onmouseleave = function () {
        right[i].style.display = "none";
    }
}

//图片播放
var p = document.getElementById("photoShow");
var i = 1;
function changePhoto() {
    function changeUrl() {
        p.src = "images/" + i + ".jpg";
        i++;
    }
    changeUrl();
    if (i == 5) {
        i = 1;
    }
}
setInterval(changePhoto, 3000);


// 倒计时
var time = document.getElementById("time");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");


var h = 1;
var m = 60;
var s = 60;
function getTime() {

    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    s = s - seconds;
    m = m - minutes;

    if (h != 1) {
        if (s == 60) {
            s = 0;
        }
        if (m == 60) {
            m = 0;
        }
        time.innerHTML = hours + ":00 场";
        hour.innerHTML = "00";
        minute.innerHTML = m < 10 ? "0" + m : m;
        second.innerHTML = s < 10 ? "0" + s : s;
        // console.log(s);
        m = 60;
        s = 60;
    }
    else {
        time.innerHTML = hours + ":00 场";
        hour.innerHTML = "0" + h;
        minute.innerHTML = "00";
        second.innerHTML = "00";
        h--;
    }
    // console.log(s);
}
setInterval(getTime, 1000);


// 家电展示模块
var jiadian = document.getElementsByClassName("jiadian");
var jiadianHide = document.getElementsByClassName("jiadian-hide");

for(let i = 0 ; i < jiadian.length ; i++){
    if(i==0){
        jiadianHide[i].style.display = "block";
    }
    else{
        jiadianHide[i].style.display = "none";
    }

}
for(let i = 0 ; i < jiadian.length ; i++){
    jiadian[i].onmouseenter = function(){
        if(jiadianHide[i].style.display!="block"){
            for(let j=0;j<jiadian.length;j++){
                if(j!=i){
                    jiadianHide[j].style.display = "none";
                }
            }
            jiadianHide[i].style.display = "block";
        }
    }
}