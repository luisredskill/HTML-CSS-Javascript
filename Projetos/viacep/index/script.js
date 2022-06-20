function fazGet(url){
    let request = new XMLHttpRequest
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    linha = document.createElement("tr")
    

    tdCep = document.createElement("td")
    // tdLogradouro = document.createElement("td")
    // tdComplemento = document.createElement("td")
    // tdBairro = document.createElement("td")
    // tdLocalidade = document.createElement("td")
    // tdUf = document.createElement("td")
    // tdIbge = document.createElement("td")
    // tdGia = document.createElement("td")
    // tdDdd = document.createElement("td")
    // tdSiafi = document.createElement("td")

    tdCep.innerHTML =  info.cep
    // tdLogradouro.innerHTML = info.logradouro
    // tdComplemento.innerHTML = info.complemento
    // tdBairro.innerHTML = info.bairro
    // tdLocalidade.innerHTML = info.localidade
    // tdUf.innerHTML = info.uf
    // tdIbge.innerHTML = info.ibge
    // tdGia.innerHTML = info.gia
    // tdDdd.innerHTML = info.ddd
    // tdSiafi.innerHTML = info.siafi
    

    linha.appendChild(tdCep)
    // linha.appendChild(tdLogradouro)
    // linha.appendChild(tdLogradouro)

    return linha;
}

function main() {
    let data = fazGet("https://viacep.com.br/ws/04292000/json/")
    let info = JSON.parse(data)  
    
    let tabela = document.getElementById("tabela")

    info.forEach(element => {
      let  linha = criaLinha(element)
      tabela.appendChild(linha)
    });
}

main()