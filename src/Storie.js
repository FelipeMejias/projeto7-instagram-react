import Imagem from './Imagem'
export default function Storie(props){
    return(
        <div className="externo">
            <div className="borda-story">
                <Imagem link="borda-story.jpg" />
                <div className="interno">
                    <Imagem link={props.imagem} />
                </div>
            </div>
            <p>{props.titulo}</p>
        </div>
    )
}