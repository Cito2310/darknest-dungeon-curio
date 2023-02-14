import { ListGridDev } from "../components/listGridDev"
import { NavBar } from "../components/navBar"

export const DarkestDungeonScreen = () => {
  return (
    <section 
      className="background-image" 
      style={{backgroundImage: `url(assets/background-img/loading_screen_darkestdungeon.png)`}}
    >
      <NavBar/>
      <ListGridDev/>
    </section>
  )
}