import { Routes, Route, Navigate } from "react-router-dom";

import { AppDungeonLayout } from './components/AppDungeonLayout';

import "./styles/background-image.scss"
import "./config.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cove" element={ <AppDungeonLayout dungeon="cove"/> } />
        <Route path="/ruins" element={ <AppDungeonLayout dungeon="ruins"/> } />
        <Route path="/warrens" element={ <AppDungeonLayout dungeon="warrens"/> } />
        <Route path="/weald" element={ <AppDungeonLayout dungeon="weald"/> } />

        <Route path="/*" element={<Navigate to={"/ruins"} />} />
        <Route path="/" element={<Navigate to={"/ruins"} />} />
      </Routes>
    </div>
  )
}

export default App