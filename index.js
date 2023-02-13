const check1 = document.getElementById('switch1');
const check2 = document.getElementById('switch2')
const check3 = document.getElementById('switch3')


check1.addEventListener('click', function () {
    changeSwitch(check1)

})
check2.addEventListener('click', function () {
    changeSwitch(check2)
})
check3.addEventListener('click', function () {
    changeSwitch(check1)
    changeSwitch(check3)
})

function changeSwitch(check) {
    if (check.hasAttribute("checked")) {
        check.removeAttribute("checked")
    } else {
        check.setAttribute("checked", "")
    }
}