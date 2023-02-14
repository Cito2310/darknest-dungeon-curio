import { NavBar } from "./NavBar";
import { ListGrid } from './ListGrid';

import { TDungeon } from "../types/curio";

interface props {
    dungeon: TDungeon
}

export const AppDungeonLayout = ({ dungeon }: props) => {
    return (
        <div 
            className="background-image" 
            style={{backgroundImage: `url(assets/background-img/${dungeon}.png)`}}
        >

        <NavBar/>
        <div className="container-app">
            <ListGrid dungeon={dungeon}/>
        </div>

        </div>
    )
}