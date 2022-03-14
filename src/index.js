import ReactDOM from 'react-dom'
import BarraTopo from './BarraTopo'
import Menu from './Menu'
import PartePrincipal from './PartePrincipal'
import SideBar from './SideBar'

function App(){
    return(
        <div>
            <div className="margem branca">
                <BarraTopo />
                <Menu />
            </div>
            <div className="margem cinza">
                <div className="container">
                    <PartePrincipal />
                    <div className="organizadora"></div>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}
const root=document.querySelector('.root')
ReactDOM.render(<App />,root)

