import { useEffect, useState } from "react"

import { ICurio } from '../types/curio';

import "../styles/list-grid.scss"
import { ContainerActionItem } from './containerActionItem';
import { ContainerActionNotItem } from './containerActionNotItem';
import { ContainerNameImg } from "./containerNameImg";

export const ListGrid = () => {
    const [dataCurio, setDataCurio] = useState<[] | ICurio[]>([])

    // function get data curio
    useEffect(()=>{
        fetch("data/curio_universal.json").then(resp => {
            resp.text().then((text)=> { setDataCurio(JSON.parse(text)) })
        })
    }, [])

    return (
        <section className="list-curio">
            {
                dataCurio.map( curio => <div className="item-curio-container">
                    <ContainerNameImg 
                        linkImg={curio.linkImg}
                        name={curio.name}
                        spawn={curio.spawn}
                    />

                    <ContainerActionItem actionItems={curio.actionItem} />

                    <ContainerActionNotItem actionNotItem={ curio.actionNotItem }/>
                </div>)
            }
        </section>
    )
}