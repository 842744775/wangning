{
    let imgs = document.querySelector(".banner-img")
    let now = 0;
    setInterval(function () {
        now++;
        if (now === 0) {
            imgs.style.transition = "all 1s"
        }
        imgs.style.marginLeft = -1226 * now + "px"
    }, 500);
    imgs.addEventListener("transitionend", function () {
        if (now === 5) {
            imgs.style.transition = "none"
            img.style.marginLeft = 0;
            now = 0;
        }
    })}

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
    jiadian.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (let i = 0; i < jiadian.length; i++) {
                jiadian[i].classList.remove("active");
                jiadian2[i].style.display = "none";

            }
            ele.classList.remove("active");
            jiadian2[index].style.display = "block";
        }
    })
}
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
            kuang.style.marginLeft = -296 * index + "px";
        }
    });

}