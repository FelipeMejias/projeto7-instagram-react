import Post from './Post'
export default function ListaPosts(){
    const listaPosts=[
        {
            postouNome:"meowed",
            postouImagem:"meowed.png",
            foto:"gato-telefone.png",
            curtiuNome:"respondeai",
            curtiuImagem:"respondeai.png",
            qtdCurtidas:101.523
        },
        {
            postouNome:"barked",
            postouImagem:"barked.png",
            foto:"dog.png",
            curtiuNome:"adorable_animals",
            curtiuImagem:"adorableanimals.png",
            qtdCurtidas:99.159
        }
    ]
    return(
        <ul className="feed">
            {listaPosts.map(converterPosts)}
        </ul>    
    )
}
function converterPosts(props){
    const {postouNome,postouImagem,foto,curtiuNome,curtiuImagem,qtdCurtidas}=props
    return(
        <Post postouNome={postouNome} postouImagem={postouImagem} foto={foto} curtiuNome={curtiuNome} curtiuImagem={curtiuImagem} qtdCurtidas={qtdCurtidas} />
    )
}