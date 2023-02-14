import { ListGrid } from "../components/listGrid"
import { NavBar } from "../components/navBar"

export const WealdScreen = () => {
  return (
    <div 
      className="background-image" 
      style={{backgroundImage: `url(assets/background-img/loading_screen_weald.png)`}}
    >

      <NavBar/>
      <div className="container-app">
        <ListGrid/>
      </div>

    </div>
  )
}