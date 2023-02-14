import "../styles/container-name-img.scss"

import { capitalizeText } from '../helpers/capitalizeText';

interface props {
    linkImg: string,
    name: string,
    spawn: "corridor" | "room",
}

export const ContainerNameImg = ({ linkImg, name, spawn }: props) => {
  return (
    <div className="container-name-img">
        <img className="img-curio" src={linkImg}/>
        
        <div className="div-name">
          <p className="text-name">{ capitalizeText(name) }</p>
          <p className="text-spawn">{ capitalizeText(spawn) }</p>
        </div>
    </div>
  )
}