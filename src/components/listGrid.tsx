import { useEffect, useState } from "react"

import { ICurio, TDungeon } from '../types/curio';

import "../styles/list-grid.scss"
import { ContainerActionItem } from './ContainerActionItem';
import { ContainerActionNotItem } from './ContainerActionNotItem';
import { ContainerNameImg } from "./ContainerNameImg";
import { routeDungeon } from '../helpers/routeDungeon';

interface props {
    dungeon: TDungeon
}

export const ListGrid = ({ dungeon }: props) => {
    const [dataCurio, setDataCurio] = useState<[] | ICurio[]>([])

    // function get data curio
    useEffect(()=>{
        Promise.all([
            fetch(routeDungeon.universal).then(resp => resp.json()),
            fetch(routeDungeon[dungeon]).then(resp => resp.json()),
        ]).then(( arrayData: ICurio[][] ) => {
            const allCurios = arrayData.reduce(( prev, curr )=> [...prev, ...curr] ,[]);
            setDataCurio( allCurios );
        })
    }, [])

    return (
        <section className="list-curio">
            {
                dataCurio.map( (curio, index) => <div key={curio.dungeon+index+curio.name} className="item-curio-container">
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