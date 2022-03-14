import Imagem from './Imagem'
export default function Perfil(props){
    return (
        <div className="perfil-sugerido">
            <div className="perfil">
                <Imagem link={props.imagem} />
                <div >
                    <strong><p>{props.titulo}</p></strong>
                    <p>{props.subTitulo}</p>
                </div>
            </div>
                
            <div className="seguir">
                <p>{props.seguir==="true" ? "seguir" : ""}</p>
            </div>
        </div>
    )
}