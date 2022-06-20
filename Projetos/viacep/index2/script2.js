function consultaEndereco() {
    let cep = document.getElementById("cep").value

    if (cep.length !== 8) {
        alert("Cep inválido")
        alert(cep.lenght)
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response){
        response.json().then(function(data){
            
            
        })
    })
}

function mostrarEndereco(dados) {
    let resultado = document.getElementById("resultado")
    if (dados.erro) {
        resultado.innerHTML = "Não foi possível localizar o endereço"
    }else{
        resultado.innerHTML = `<p>Endereço:${dados.logradouro}</p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Bairro : ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade} - ${dados.uf}</p> `
    }

}