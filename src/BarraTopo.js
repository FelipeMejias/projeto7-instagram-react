import Icone from './Icone'
import Imagem from './Imagem'
export default function BarraTopo(){
    return (
        <div className="barra-topo">
            <div className="topo-mobile">
                <Icone nome="logo-instagram" />
                <Imagem link="logo.png" />
                <div class="enviar-mobile">
                    <Icone nome="paper-plane-outline" />
                </div>
            </div>
            <div className="some-no-mobile">
                <input tipe="text" value="Pesquisar"></input>
            </div>
            <div className="some-no-mobile">
                <Icone nome="paper-plane-outline" />
                <Icone nome="compass-outline" />
                <Icone nome="heart-outline" />
                <Icone nome="person-outline" />
            </div>
        </div>
    )
}