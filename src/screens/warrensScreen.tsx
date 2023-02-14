import { NavBar } from "../components/navBar"
import { ListGrid } from '../components/listGrid';

export const WarrensScreen = () => {
  return (
    <div 
      className="background-image" 
      style={{backgroundImage: `url(assets/background-img/loading_screen_warrens.png)`}}
    >

      <NavBar/>
      <ListGrid/>

    </div>
  )
}