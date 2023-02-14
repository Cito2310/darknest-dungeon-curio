import "../styles/container-action-item.scss"

import { IActionItem } from '../types/curio';

import { routeItems } from '../helpers/routeItems';
import { capitalizeText } from '../helpers/capitalizeText';

interface props {
    actionItems : IActionItem[]
}

export const ContainerActionItem = ({ actionItems }: props) => {
    return (
        <ul className="container-action-item">
            {
                actionItems.length === 0 
                ? <img className="img-empty" src="assets/pass.png"/>
                : actionItems.map(({ item, effect, type }, index) => (<li key={index+type+item}>
                    <img className="img-supplies" src={routeItems[item]}></img>
                    <p className="text-effect">{capitalizeText(effect)}</p>
                </li>))
            }
        </ul>
    )
}