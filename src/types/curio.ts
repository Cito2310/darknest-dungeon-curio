export interface ICurio {
    dungeon: TDungeon,
    name: string,
    spawn: "room" | "corridor",
    linkImg: string,
    actionItem: IActionItem[] | [],
    actionNotItem: IActionNotItem[]
}

export interface IActionItem { 
    item: TSupplies, 
    effect: string
}

export interface IActionNotItem { 
    chances: number, 
    effect: string
}

export type TSupplies = "medicinal herbs" 
                | "bandage"
                | "antivenom"
                | "shovel"
                | "dog treats"
                | "torch"
                | "holy water"
                | "skeleton key"

export type TDungeon = "cove" | "ruins" | "universal" | "warrens" | "weald"