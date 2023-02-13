const check1 = document.getElementById('switch1');
const check2 = document.getElementById('switch2')
const check3 = document.getElementById('switch3')

check1.addEventListener('click', function () {
    check2.setAttribute("checked", "")
    check3.setAttribute("checked", "")

})

function changeSwitch(check, status ) {
    // use hasAttributes
        
}