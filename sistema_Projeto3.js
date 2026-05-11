const agentesInfo = require("./agentes_valorant.json")
console.log(agentesInfo)

function mostrarAgentes(lista){
lista.forEach((agentes)=>{
    console.log(agentes.nome + "---" + "Codinome: " + agentes.codinome + " tem a função de: " + agentes.classe + " faz a função de: " + agentes.funcao + " e tem: " + agentes.idade + " Anos.")
})
}

function adicionarItem(itemnovo){
    agentesInfo.push(itemnovo)
    

}

//adicione aqui o objeto novo:
const itemnovo ={
                nome: "Mateo Armendáriz De la Fuente",
                codinome: "Gekko",
                classe: "Iniciador",
                funcao: "Apoio",
                idade: "22",
                }

function converter(){
    agentesInfo.forEach((agentes)=>{
    agentes.idade=Number(agentes.idade)
  }) 
}

function filtrar(){
    var agentesFiltro = agentesInfo.filter((agentes)=> agentes.idade < 25)
    console.log("***** - Agentes menores de 25 anos: - *****")
    mostrarAgentes(agentesFiltro)
}

function aplicarPorcentagem(){
    var porcentagem = agentesInfo.map((agentes) => {
        return {...agentes, idade: agentes.idade * 0.25}
    })
    console.log("***** - Anos restantes de trabalho: - *****")
    porcentagem.forEach((agentes)=>{
        console.log(agentes.nome, "Anos restantes de trabalho: ", agentes.idade)
    })
}

function acharAgente(){
    var agente_A_ser_encontrado = "Chamber" //<---- coloque aqui o agente a ser encontrado. 
    var procurar = agentesInfo.find(agente => agente.codinome == agente_A_ser_encontrado)

    if (procurar){
        console.log("Agente", agente_A_ser_encontrado, "encontrado")
    }
    else{
        console.log("Agente", agente_A_ser_encontrado, "não foi encontrado")
    }

}
 

adicionarItem(itemnovo)
mostrarAgentes(agentesInfo)
converter()
filtrar()
aplicarPorcentagem()
acharAgente()





