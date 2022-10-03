
function option1() {
    if (document.getElementById("check2").checked == true) {
        document.getElementById("check3").checked = false
    }
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

// Pegar paramentos da url
urlParams = new URLSearchParams(location.search);

// armazena em uma variavel
strings = urlParams.toString()

// criar uma array
array_options = strings.split('+', 3)

console.log(array_options)


// verificar se a array tem 3 indices

if (array_options.length == 3) {
    console.log('tem 3')
    document.getElementById('section-card').style.visibility = 'hidden';
    document.getElementById('label_option1').innerHTML = array_options[0]
    document.getElementById('label_option2').innerHTML = array_options[1]
    document.getElementById('label_option3').innerHTML = array_options[2]

} else {
    console.log('menos 3')
    document.getElementById('section-card').style.visibility = 'visible';
}

// Pega valor da opção 1 para adicionar a div
function mudarTexto1() {
   
    label_opcao = document.getElementById("input1").value
    document.getElementById('label_option1').innerHTML = label_opcao
 
 
console.log(label_opcao)
}

// Pega valor da opção 2 para adicionar a div
function mudarTexto2() {
    label_opcao = document.getElementById("input2").value
    document.getElementById('label_option2').innerHTML = label_opcao
   
    
console.log(label_opcao)
}

// Pega valor da opção 1 para adicionar a div
function mudarTexto3() {
    label_opcao = document.getElementById("input3").value
    document.getElementById('label_option3').innerHTML = label_opcao
    
    
console.log(label_opcao)
}

// Copiar para area de transferencia



function copiarURL() {
    // var array_option
    
    // array_option = array_option.push(document.getElementById("input1").value)
    // array_option.push(document.getElementById('input2').value)
    // array_option.push(document.getElementById('input3').value)

    // alert("Link para compartilhar: " + window.location.href+"?"+array_option[0]+"+"+array_option[1]+"+"+array_option[2]+"+")

    alert("Em breve")
    console.log(array_option)
}
