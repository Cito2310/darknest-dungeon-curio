import "../styles/container-action-not-item.scss"

import { IActionNotItem } from '../types/curio';

import { routeEffects } from '../helpers/routeEffects';


interface props {
    actionNotItem: IActionNotItem[]
}

export const ContainerActionNotItem = ({ actionNotItem }: props) => {
    return (
        <ul className="container-action-not-item">
            {
                actionNotItem.map(({ chances, effect })=><li>
                    <p className="text-chances">{`${chances}%`}</p>
                    <img src={routeEffects["disease"]}/>
                    <p className="text-effect">{effect}</p>
                </li>)
            }
        </ul>
    )
}