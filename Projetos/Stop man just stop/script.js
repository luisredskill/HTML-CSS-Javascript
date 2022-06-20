
var conjuntos = ['Fruta', 'Nome', 'MSE', 'Alimento', 'Animal', 'Celebridade', 'Carro']

var frutas = ['Amora', 'Bergamota', 'Carambola', 'Damasco', 'NDA', 'Fruta-do-conde', 'Groselha', 'NDA', 'Imbu', 'Jamelão', 'Kiwi', 'Lichia', 'Meracujá', 'Noz', 'NDA', 'Pistache', 'NDA', 'Romã', 'Seriguela', 'Toranja', 'Uva', 'NDA', 'NDA', 'NDA', 'NDA', 'NDA']

var nomes = ['Aurora', 'Bella', 'Chole', 'Deborah', 'Evelyn', 'Frida', 'Gisele', 'Hannah', 'Ísis', 'Joana', 'Kauane', 'Liz', 'Milena', 'Naiara', 'Olga', 'Penélope', 'Quésia', 'Ravena', 'Sandra', 'Thalia', 'Úsrsula', 'Viviane', 'Whitney', 'Xuxa', 'Yasmin', 'Zoe']

var mse = ['Adorável', 'Brava', 'Calma', 'Divertida', 'Emotiva', 'Faladora', 'Gentil', 'Honesta', 'Ilustre', 'Justa', 'NDA', 'Louvável', 'Majestosa', 'Notável', 'Obesa', 'Pacata', 'Quieta', 'Respeitável', 'Silenciosa', 'Tolerante', 'Útil', 'Virtuosa', 'NDA', 'NDA', 'NDA', 'Zelosa']

var alimentos = ['Alho', 'Bolo', 'Chocolate', 'Dendê', 'Empada', 'Farofa', 'Gelatina', 'NDA', 'Iogurte', 'Jaca', 'Kiwi', 'Leite', 'Mandioca', 'Nachos', 'Ovo', 'Patê', 'Queijo', 'Rúcula', 'Sorvete', 'Tucupi', 'Uva', 'Vatapá', 'NDA', 'NDA', 'Yakisoba', 'NDA']

var animais = ['Andorinha', 'Bode', 'Camelo', 'Dromedário', 'Escorpião', 'Formiga', 'Gato', 'Hipopótamo', 'Iguana', 'Jabuti', 'NDA', 'Lontra', 'Morcego', 'NDA', 'Ovelha', 'Pato', 'Quero-Quero', 'Rato', 'Serpente', 'Texugo', 'Urso', 'Vespa', 'NDA', 'NDA', 'NDA', 'NDA']

var celebridades = ['Amy Winehouse', 'Bob Marley', 'Cláudia Raia', 'Dado Dilabella', 'Eliana', 'Fergie', 'Glória Maria', 'Harru Styles', 'Ingrid Guimarães', 'Justin Bieber', 'Kesha', 'Lil Nax X', 'Madonna', 'Nicki Minaj', 'Olivia Rodrigo', 'Pelé', 'Queen', 'Rihanna', 'Suzana Vieira', 'Tom Holland', 'Usain Bolt', 'Vanessa da Mata', 'Wesley Safadão', 'Xuxa', 'Yudi', 'Zedd']

var carros = ["Audi", 'B-Class Mercedes', 'Corolla', 'Discovery', 'EcoSport', 'Fusca', 'GLA', 'HR-V', 'i3 BMW', 'Jetta', 'Kicks', 'Lancer', 'Mercedes-Benz', 'Nissan', 'Onix', 'Parati', 'Q3 Audi', 'Ranger', 'Santa Fé', 'Up!', 'Vectra']


function trocando() {
    var txtvar = document.getElementById("txt").value;
    var number = 0
    var res = document.getElementById("res")
    var seletor = document.getElementsByClassName("seletor")
    var table = document.getElementsByName("table")

    //tr[0].innerHTML += "<tr><td> Frutas </td><td>" + number + "</td></tr>"

    switch (txtvar) {
        case "a":
            number = 0 + 1
            break;
        case "b":
            number = 1 + 1
            break;
        case "c":
            number = 2 + 1
            break;
        case "d":
            number = 3 + 1
            break;
        case "e":
            number = 4 + 1
            break;
        case "f":
            number = 5 + 1
            break;
        case "g":
            number = 6 + 1
            break;
        case "h":
            number = 7 + 1
            break;
        case "i":
            number = 8 + 1
            break;
        case "j":
            number = 9 + 1
            break;
        case "k":
            number = 10 + 1
            break;
        case "l":
            number = 11 + 1
            break;
        case "m":
            number = 12 + 1
            break;
        case "n":
            number = 13 + 1
            break;
        case "o":
            number = 14 + 1
            break;
        case "p":
            number = 15 + 1
            break;
        case "q":
            number = 16 + 1
            break;
        case "r":
            number = 17 + 1
            break;
        case "s":
            number = 18 + 1
            break;
        case "t":
            number = 19 + 1
            break;
        case "u":
            number = 20 + 1
            break;
        case "v":
            number = 21 + 1
            break;
        case "w":
            number = 22 + 1
            break;
        case "x":
            number = 23 + 1
            break;
        case "y":
            number = 24 + 1
            break;
        case "z":
            number = 25 + 1
            break;
        default:
            break;
    }
    table[0].innerHTML = ''
    for (let i = 0; i < conjuntos.length; i++) {
        const element = conjuntos[i];
        if (seletor[i].checked && number > 0) {

            let itens = [frutas[number - 1], nomes[number - 1], mse[number - 1], alimentos[number - 1], animais[number - 1], celebridades[number - 1], carros[number - 1]]

            table[0].innerHTML += "<tr><td>" + element + "</td><td>" + itens[i] + "</td></tr>"
        }
    }
}

function CriandoInputs() {
    var res2 = document.getElementById("res2")
    
    res2.innerHTML = ""
    for (let i = 0; i <= 25; i++) {
        // Criando duas divs que vão receber duas colunas de inputs
        var divDupla = document.createElement("div")
       
        if (i == 0) {
        var divDuplaColuna = 0
        divDupla.className = "duasdiv"
        res2.appendChild(divDupla)
        divDuplaColuna = 0
        } 
        if (i == 13) {
        var divDuplaColuna = 0
        divDupla.className = "duasdiv"
        res2.appendChild(divDupla)
        divDuplaColuna = 1 
        } 

        var divDuplaSelecao = document.getElementsByClassName("duasdiv")

        // -------------------------------------------------------------
        // Criando a div que será inserida em ambas as colunas já com o texto inserido

        var divCriada = document.createElement("div")
        divCriada.className = "divname"
        var letter = ""
        switch (i) {
            case 0:
                letter = "<p>A</p>"
                break;
            case 1:
                letter = "<p>B</p>"
                break;
            case 2:
                letter = "<p>C</p>"
                break;
            case 3:
                letter = "<p>D</p>"
                break;
            case 4:
                letter = "<p>E</p>"
                break;
            case 5:
                letter = "<p>F</p>"
                break;
            case 6:
                letter = "<p>G</p>"
                break;
            case 7:
                letter = "<p>H</p>"
                break;
            case 8:
                letter = "<p>I</p>"
                break;
            case 9:
                letter = "<p>J</p>"
                break;
            case 10:
                letter = "<p>K</p>"
                break;
            case 11:
                letter = "<p>L</p>"
                break;
            case 12:
                letter = "<p>M</p>"
                break;
            case 13:
                letter = "<p>N</p>"
                break;
            case 14:
                letter = "<p>O</p>"
                break;
            case 15:
                letter = "<p>P</p>"
                break;
            case 16:
                letter = "<p>Q</p>"
                break;
            case 17:
                letter = "<p>R</p>"
                break;
            case 18:
                letter = "<p>S</p>"
                break;
            case 19:
                letter = "<p>T</p>"
                break;
            case 20:
                letter = "<p>U</p>"
                break;
            case 21:
                letter = "<p>V</p>"
                break;
            case 22:
                letter = "<p>W</p>"
                break;
            case 23:
                letter = "<p>X</p>"
                break;
            case 24:
                letter = "<p>Y</p>"
                break;
            case 25:
                letter = "<p>Z</p>"
                break;
            default:
                break;
        }
        divCriada.innerHTML = letter

        //--------------------------------------------------------------
        // Inserindo a div criada em cada elemento respectivamente

        divDuplaSelecao[divDuplaColuna].appendChild(divCriada)

        var input = document.createElement("input")
        input.className = "input"

        let divInserida = document.getElementsByClassName("divname")
        divInserida[i].appendChild(input)
    }   
}

function Confirmando(){
    var confirmandoInput = document.getElementById("confirmandoInput").value
    var res1 = document.getElementById("res1")
    var res2 = document.getElementById("res2")
    res2.innerHTML = ""
   if (confirmandoInput == "") {
        res1.innerHTML = "Digite algo"
        res2.innerHTML = ""
   } else if (confirmandoInput.length < 3) {
    res1.innerHTML = "Categoria curta demais para ser cadastrada!"
    res2.innerHTML = ""
   } else if (confirmandoInput.length > 15){
    res1.innerHTML = "Categoria longa demais para ser cadastrada!"
    res2.innerHTML = ""
   } else {
    res1.innerHTML = "Categoria pode ser cadastrada! Digite as palavras!"

    CriandoInputs()
   }

}

function Cadastrando(){
    let res2 = document.getElementById("res2")
    let divcadastrando = document.getElementsByClassName("divname")
    
}







