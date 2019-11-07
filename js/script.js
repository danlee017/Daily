document.addEventListener('DOMContentLoaded', function () {

    let startBtn = document.querySelector('.timer_on_btn'),
        addBtn = document.querySelector('.timer_add_btn'),
        prBtn = document.querySelector('.web_btn'),
        arBtn = document.querySelector('.art_btn'),
        box = document.querySelectorAll('.counter__checkbox_box');

    let btnDis,
        intId;
    btnDis = true;

    let my_timer = document.querySelector('.counter__timer_clock');
    let time = my_timer.innerHTML;
    let arr = time.split(":"),
        h = 2,
        m = arr[1],
        s = arr[2];

    addBtn.classList.add('disabled');
    addBtn.setAttribute('disabled', '');

    function startTimer() {
        if (s == 0) {
            if (m == 0) {
                if (h == 0) {
                    alert("Время вышло");
                    return;
                }
                h--;
                m = 60;
                if (h < 10) h = "0" + h;
            }
            m--;
            if (m < 10) m = "0" + m;
            s = 59;
        } else s--;
        if (s < 10) s = "0" + s;
        my_timer.innerHTML = `${h}:${m}:${s}`;
    }

    startBtn.addEventListener('click', function () {
        if (!startBtn.classList.contains('active_btn')) {
            startBtn.classList.add('active_btn');
            clearInterval(intId);
            startBtn.textContent = 'Продолжить';
        } else {
            startBtn.classList.remove('active_btn');
            intId = setInterval(startTimer, 1000);
            startBtn.textContent = 'Пауза';
        }
        if (btnDis == true) {
            addBtn.classList.remove('disabled');
            addBtn.removeAttribute('disabled', '');
            btnDis = false;
        }
    });

    addBtn.addEventListener('click', function () {
        h = `0${h++,h++,h++,h++,h++}`;
        addBtn.setAttribute('disabled', '');
        addBtn.classList.add('disabled')
    });

    prBtn.addEventListener('click', function () {
        if (box[0].classList.contains('active_box')) {
            box[0].classList.remove('active_box');
        } else {
            box[0].classList.add('active_box');
        }
    });

    arBtn.addEventListener('click', function () {
        if (box[1].classList.contains('active_box')) {
            box[1].classList.remove('active_box');
        } else {
            box[1].classList.add('active_box');
        }
    });

});