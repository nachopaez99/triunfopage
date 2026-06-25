  
  import "../../styles/components/FloatingActions.css"
  import { assetsData } from "../../data/assetsData"
  import { NavLink } from "react-router-dom"
  
  export function FloatingActions(){


    return(
        <div className="floating-actions">
            <button className="floating-actions-navs"><img src={assetsData.isoPas} alt="" /></button>
            <NavLink to="/clientes" className="floating-actions-navs">
                <img src={assetsData.isoClientes} alt="" />
              </NavLink>
        </div>

        )
}