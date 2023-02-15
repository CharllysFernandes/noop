const check0 = document.getElementById('chck1')
const check1 = document.getElementById('chck2')
const check2 = document.getElementById('chck3')

const check = (n) => document.getElementById(`check${n}`)

const save = (data) => localStorage.setItem('noop', JSON.stringify(data))
const getSave = localStorage.getItem('noop')
let arr = new Array()

// arr.push(JSON.parse(getSave))

arr = JSON.parse(getSave)

console.log(getSave)
render(arr)

function addArray() {
    newArray =  {check: true }
    arr.push(newArray)
    console.log(arr)
    save(arr)
}

function render(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].check === true) {
            console.log(i+1)
            check(i+1).setAttribute("checked", "")
            console.log(check[i])
        }

    }
}
