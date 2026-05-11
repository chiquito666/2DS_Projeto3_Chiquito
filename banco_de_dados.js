const agentes = [
    {
       nome: "Joon-hee",
       codinome: "Jett",
       classe: "Duelista",
       funcao: "Combate",
       idade: "21",
       origem: "Corea do Sul"
    },
    {
       nome: "Vincent Fabron",
       codinome: "Chamber",
       classe: "Sentinela",
       funcao: "Lurker",
       idade: "28",
       origem: "França"
    },
    {
       nome: "Vincent Fabron",
       codinome: "Chamber",
       classe: "Sentinela",
       funcao: "Lurker",
       idade: "28",
       origem: "França"
    },
    {
       nome: "Ollie Bard",
       codinome: "Clove",
       classe: "Controlador",
       funcao: "Combate",
       idade: "19",
       origem: "Escócia"
    },
    {
      nome: "Varun Batra",
      codinome: "Harbor",
      classe: "Controlador",
      funcao: "Suporte",
      idade: "31",
      origem: "Índia"
    },
    {
      nome: "Yoru",
      codinome: "Yoru",
      classe: "Duelista",
      funcao: "Entry",
      idade: "22",
      origem: "Japão"
    },
    {
      nome: "Klara Böhringer",
      codinome: "Killjoy",
      classe: "Sentinela",
      funcao: "Defesa",
      idade: "27",
      origem: "Alemanha"
    },
    {
      nome: "Alexander Sasha Novikov.",
      codinome: "Sova",
      classe: "Iniciador",
      funcao: "Spott",
      idade: "35",
      origem: "Rússia" 
    },
    {
      nome: "Sabine Callas",
      codinome: "Viper",
      classe: "Controlador",
      funcao: "Suporte",
      idade: "32",
      origem: "EUA" 
    },
    {
      nome: "Kirra Foster",
      codinome: "Skye",
      classe: "Iniciador",
      funcao: "Cegar",
      idade: "27",
      origem: "Austrália" 
    }
   ]
   
   const agentesJSON = JSON.stringify(agentes)
   const fs = require("fs")
   fs.writeFileSync("agentes_valorant.json", agentesJSON)