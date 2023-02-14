import { NavBar } from "../components/navBar"
import { ListGrid } from '../components/listGrid';

export const RuinsScreen = () => {
  return (
    <div 
      className="background-image" 
      style={{backgroundImage: `url(assets/background-img/loading_screen_ruins.png)`}}
    >

      <NavBar/>
      <ListGrid/>

    </div>
  )
}