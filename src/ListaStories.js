import Storie from './Storie'
export default function ListaStories(){
    const listaStories=[
        {imagem:"9gag.png", titulo:"9gag"},
        {imagem:"meowed.png", titulo:"meowed"},
        {imagem:"barked.png", titulo:"barked"},
        {imagem:"nathanwpylestrangeplanet(1).png", titulo:"nathanwpyle..."},
        {imagem:"wawawiwacomicsa.png", titulo:"wawawiwac..."},
        {imagem:"respondeai.png", titulo:"respondeai"},
        {imagem:"filomoderna.png", titulo:"filomoderna"},
        {imagem:"memeriagourmet(1).png", titulo:"memeriagourmet"}
    ]
    return (
        <ul class="lista-stories">
            {listaStories.map(converterStories)}
        </ul>
    )
}
function converterStories(props){
    const {imagem,titulo}=props
    return (
        <Storie imagem={imagem} titulo={titulo} />
    )
}