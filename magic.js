
function option1() {
    if (document.getElementById("check2").checked == true ) {
        document.getElementById("check3").checked = false  
    }
    // else
    // {
    //     document.getElementById("check2").checked = false 
    // }
     
}
function option2() {
    if (document.getElementById("check3").checked == true) {
        document.getElementById("check1").checked = false
    }
    
}
function option3() {
    if (document.getElementById('check1').checked == true) {
        document.getElementById('check2').checked = false
    } 
}

