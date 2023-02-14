import "../styles/container-action-not-item.scss"

import { IActionNotItem } from '../types/curio';

import { routeEffects } from '../helpers/routeEffects';
import { capitalizeText } from '../helpers/capitalizeText';


interface props {
    actionNotItem: IActionNotItem[]
}

export const ContainerActionNotItem = ({ actionNotItem }: props) => {
    return (
        <ul className="container-action-not-item">
            {
                actionNotItem.map(({ chances, effect, type }, index)=><li key={type+index+chances}>
                    <p className="text-chances">{`${chances}%`}</p>
                    <img className="img-effect" src={routeEffects[type]}/>
                    <p className="text-effect">{capitalizeText(effect)}</p>
                </li>)
            }
        </ul>
    )
}