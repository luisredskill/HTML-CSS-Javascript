function Get (url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {

}

// function main() {
//     console.log(Get("https://poe.ninja/api/data/currencyoverview?league=Kalandra&type=Currency&language=en"))
// }

function main() {
    console.log(Get("https://viacep.com.br/ws/01001000/json/"))
}

main()

