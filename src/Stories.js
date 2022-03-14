import Icone from './Icone'
import ListaStories from './ListaStories'

export default function Stories(){
    return (
        <div className="stories">
            <div className="setinha">
                <Icone nome="chevron-forward-circle-outline" />
            </div>
            <ListaStories />
        </div>
    )
}