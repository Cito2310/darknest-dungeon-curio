import { NavBar } from "../components/navBar"
import { ListGrid } from '../components/listGrid';

export const CoveScreen = () => {
  return (
    <div 
      className="background-image" 
      style={{backgroundImage: `url(assets/background-img/loading_screen_cove.png)`}}
    >

      <NavBar/>
      <ListGrid/>

    </div>
  )
}