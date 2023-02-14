export interface ICurio {
    dungeon: TDungeon,
    name: string,
    spawn: "room" | "corridor",
    linkImg: string,
    actionItem: IActionItem[],
    actionNotItem: IActionNotItem[]
}

interface IActionItem { 
    item: TSupplies, 
    effect: string
}

interface IActionNotItem { 
    chances: number, 
    effect: string
}

type TSupplies = "medicinal herbs" 
                | "bandages"
                | "antivenom"
                | "sholves"
                | "dog treats"
                | "torch"

type TDungeon = "cove" | "ruins" | "universal" | "warrens" | "weald"