import { useEffect, useState } from "react"

import { ICurio } from '../types/curio';

import "../styles/list-grid.scss"
import { ContainerActionItem } from './containerActionItem';
import { ContainerActionNotItem } from './containerActionNotItem';
import { ContainerNameImg } from "./containerNameImg";

export const ListGridDev = () => {
    const [dataCurio, setDataCurio] = useState<[] | ICurio[]>([])

    // function get data curio
    useEffect(()=>{
        Promise.all([
                fetch('data/curio_universal.json').then(resp => resp.json()),
                fetch('data/curio_ruins.json').then(resp => resp.json()),
                fetch('data/curio_cove.json').then(resp => resp.json()),
                fetch('data/curio_warrens.json').then(resp => resp.json()),
                fetch('data/curio_weald.json').then(resp => resp.json()),
            ]).then(( arrayData: ICurio[][] ) => {
                const allCurios = arrayData.reduce(( prev, curr )=> [...prev, ...curr] ,[]);
                setDataCurio( allCurios );
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