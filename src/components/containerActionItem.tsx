import "../styles/container-action-item.scss"

import { IActionItem } from '../types/curio';

import { routeItems } from '../helpers/routeItems';

interface props {
    actionItems : IActionItem[]
}

export const ContainerActionItem = ({ actionItems }: props) => {
    return (
        <ul className="container-action-item">
            {
                actionItems.length === 0 
                ? <img className="img-empty" src="assets/pass.png"/>
                : actionItems.map( actionItem => (<li>
                    <img className="img-supplies" src={routeItems[actionItem.item]}></img>
                    <p>{actionItem.effect}</p>
                </li>))
            }
        </ul>
    )
}