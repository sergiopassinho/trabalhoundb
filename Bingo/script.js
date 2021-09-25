const sortearButton = document.querySelector('.sortear-button');
let itemsDisplay = document.querySelectorAll(".numeros-cartela li")
let sorteioDisplay = document.querySelector(".numero")

// Criacao de listas, contadores
let numeroSorteado = 0;
let contador = 0;
let listaNumeros = [];
let cartela = [];
let numerosSorteados = [];
let numeros50 = [];

// Criacao de 50 numeros para lista
for (var i = 1; i < 50; i++) {
    listaNumeros.push(i);
}

for (var i = 1; i <= 50; i++) {
    numeros50.push(i);
}

// Vai baguncar a lista de numeros
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(listaNumeros)
shuffleArray(numeros50)

// Retornar um numero aleatorio 
function getRandomFromBucket() {
    var randomIndex = Math.floor(Math.random() * listaNumeros.length);
    return listaNumeros.splice(randomIndex, 1)[0];
}


// pegar lis da UL da cartela
// for (let i = 0; i < itemsDisplay.length; i++) {
//     console.log(itemsDisplay[i])

// }

// Toda vez que clicar vai retorna um numero da lista de 50 numeros e digita na cartela
for (let i = 0; i < itemsDisplay.length; i++) {
    let numeroAleatorio = getRandomFromBucket()
    itemsDisplay[i].textContent = numeroAleatorio
    cartela.push(numeroAleatorio)

}

tentativas = 0;

sortearButton.addEventListener("click", function () {
    // Pegar numero sorteado

    let numeroSorteado = numeros50[contador]
    if (cartela.includes(numeroSorteado)) {
        tentativas++;
        console.log(tentativas)
        itemsDisplay[cartela.indexOf(numeroSorteado)].style.backgroundColor = "green";
    }


    if (tentativas == 20) {
        sortearButton.setAttribute("disabled", "disabled")
        sortearButton.classList.remove("sortear-button");
        sortearButton.classList.add("disableButton")
    }

    // console.log(numeros50[contador])
    numerosSorteados.push(numeroSorteado);
    sorteioDisplay.textContent = numeroSorteado
    contador++
})

function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';


}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';

}

function openModal1(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';


}

function closeModal1(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';

}