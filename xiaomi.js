{
let imgs = document.querySelectorAll(".banner-img img");
let points = document.querySelectorAll(".lunbodian");
console.log(imgs)
points.forEach(function (ele, index) {
    ele.onclick = function () {
        for (let i = 0; i < points.length; i++) {
            points[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        ele.classList.add("active");
        imgs[index].classList.add("active");
        now = index;
    }
});
let now = 0;
let st = setInterval(fn, 2000);

function fn(dir="r") {
    if(dir=="r"){
        now++;
        if(now===points.length){
            now=0;
        }
    }
    if(dir=="l"){
        now--;
        if(now === -1){
            now = points.length-1;
        }
    }
    for (let i = 0; i < points.length; i++) {
        points[i].classList.remove("active");
        imgs[i].classList.remove("active");
    }
    points[now].classList.add("active");
    imgs[now].classList.add("active");
}}
// clearInterval()  清除某个时间函数
let banner = document.querySelector("#banner")
banner.onmouseover = function () {
    clearInterval(st);
};
banner.onmouseout = function () {
    st = setInterval(fn, 2000);
}
let xz = document.querySelector("#zuo");
let xy = document.querySelector("#you");
console.log(xy)
console.log(xz)
xy.onclick=function () {
    fn("r")
}
xz.onclick=function () {
    fn("l")
}
// 明星单品
{
    let left = document.querySelector('.danpin-anniuzuo');
    let right = document.querySelector('.danpin-anniuyou');
    let goods = document.querySelector('.danpin-bottom');
    right.onclick = nextfn;
    function nextfn() {
        right.classList.add('move');
        left.classList.remove('move');
        goods.style.marginLeft = '-1240px';
    };
    left.onclick = prefn;
    function prefn() {
        left.classList.add('move');
        right.classList.remove('move');
        goods.style.marginLeft = '0';
    };
    let num = 0;
    let stop = setInterval(stopfn, 2000);
    function stopfn() {
        num++;
        if (num % 2 == 0) {
            prefn();
        } else {
            nextfn();
        }
    };
    let box = document.querySelector('#danpin');
    box.onmouseover = function () {
        clearInterval(stop);
    };
    box.onmouseout = function () {
        stop = setInterval(stopfn, 3000);
    };
}
//家电
{
let jiadian = document.querySelectorAll(".jiadian-top-you-wenzi");
let jiadian2 = document.querySelectorAll(".jiadian-under-you");
jiadian.forEach(function(ele,index){
    ele.onmouseover = function(){
        for(let i = 0;i < jiadian.length;i++){
            jiadian[i].classList.remove("active");
            jiadian2[i].style.display = "none";

        }
        ele.classList.remove("active");
        jiadian2[index].style.display = "block";
    }
})}
//内容
{
    let kuang = document.querySelector(".nrhuadong");
    let dd = document.querySelectorAll(".lbd");
    dd.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < dd.length; i++) {
                dd[i].classList.remove("active");
            }
            ele.classList.add("active");
            kuang.style.marginLeft= -296*index+"px";
        }
    });

    }
