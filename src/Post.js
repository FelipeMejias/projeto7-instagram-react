import Icone from './Icone'
import Imagem from './Imagem'
export default function Post(props){
    const {postouNome,postouImagem,foto,curtiuNome,curtiuImagem,qtdCurtidas}=props
    return(
        <div className="postagem">
            <div className="margenzinha">
                <div class="quem-postou">
                    <Imagem link={postouImagem} />
                    <p>{postouNome}</p>
                </div>
                <div>
                    <Icone nome="ellipsis-horizontal-outline" />
                </div>
            </div>
            <div className="imagem-postagem">
                <Imagem link={foto} />
            </div>
            <div class="margenzinha">
                <div class="icones-postagem"> 
                    <div>
                    <Icone nome="heart-outline" />
                    <Icone nome="chatbubble-outline" />
                    <Icone nome="paper-plane-outline" />
                    </div>
                    <Icone nome="bookmark-outline" />
                </div>
            </div>
            <div class="margenzinha"> 
                <div class="curtida-imagem">
                    <Imagem link={curtiuImagem} /> 
                    <p>Curtido por <span>{curtiuNome}</span> e <span> {qtdCurtidas} pessoas</span></p>
                </div>
            </div>
        </div>
    )
}