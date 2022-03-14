import Perfil from './Perfil'
export default function ListaPerfis(){
    const listaPerfisSugeridos=[
        {imagem:"badvibesmemes1.png" ,titulo:"bad.vibes.memes" ,subTitulo:"segue você" ,seguir:"true"},
        {imagem:"chibirdart1.png" ,titulo:"chibirdart" ,subTitulo:"segue você" ,seguir:"true"},
        {imagem:"razoesparaacreditar1.png" ,titulo:"razoesparaacreditar" ,subTitulo:"Novo no Instagram" ,seguir:"true"},
        {imagem:"adorableanimals.png" ,titulo:"adorable_animals" ,subTitulo:"segue você" ,seguir:"true"},
        {imagem:"smallcutecats1.png" ,titulo:"smallcutecats" ,subTitulo:"segue você" ,seguir:"true"},
    ]
    return (
        <ul className="perfis-sugeridos">
            {listaPerfisSugeridos.map(converterPerfis)}
        </ul>
    )
}
function converterPerfis(props){
    const {imagem,titulo,subTitulo,seguir}=props
    return(
        <Perfil imagem={imagem} titulo={titulo} subTitulo={subTitulo} seguir={seguir} />
    )
}
