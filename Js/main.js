// Função para capturar o valor do input
function Coletar(){
    let cidade = document.querySelector('.BuscadorCep').value
    Dados(cidade)
}

// Consumindo dados da API OpenWeather
async function Dados(cep){
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    
    ExibirDados(dados)
}


function ExibirDados(dados){
    document.querySelector('.Estado').value = dados.uf

    document.querySelector('.Cidade').value  = dados.localidade

    document.querySelector('.Endereco').value  = dados.bairro

    document.querySelector('.Rua').value  = dados.logradouro

    document.querySelector('.ddd').value  = dados.ddd
}