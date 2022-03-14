import Perfil from './Perfil'
import ListaPerfis from './ListaPerfis'
export default function SideBar(){
    return (
        <div className="side-bar">
            <Perfil imagem="catanacomics1.png" titulo="catanaomics" subTitulo="Catana" seguir="false" />
            <div className="sugestoes">
                <strong><p>Sugestões para você</p></strong>
                <p>Ver tudo</p>
            </div>
            <ListaPerfis />
        </div>
    )
}