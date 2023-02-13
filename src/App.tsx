import "./config.scss"

import { Routes, Route, Navigate } from "react-router-dom";
import { CoveScreen } from './screens/coveScreen';
import { DarkestDungeonScreen } from "./screens/darkestDungeonScreen";
import { WarrensScreen } from "./screens/warrensScreen";
import { WealdScreen } from "./screens/wealdScreen";
import { RuinsScreen } from './screens/ruinsScreen';

import "./styles/background-image.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cove" element={ <CoveScreen/> } />
        <Route path="/ruins" element={ <RuinsScreen/> } />
        <Route path="/darkestdungeon" element={ <DarkestDungeonScreen/> } />
        <Route path="/warrens" element={ <WarrensScreen/> } />
        <Route path="/weald" element={ <WealdScreen/> } />

        <Route path="/*" element={<Navigate to={"/ruins"} />} />
        <Route path="/" element={<Navigate to={"/ruins"} />} />
      </Routes>
    </div>
  )
}

export default App