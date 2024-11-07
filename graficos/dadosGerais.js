const url = 'https://github.com/nieuwenhof/Api-2024-lal-/blob/main/Estilos_Musicais.json'

async function vizualizainfo(){
    const res = await fetch(url)
    const dados = await res.json()

    const Estilos_Musicais = Object.keys(dados)
    const Estilos_MaisVotado =  [0]
}