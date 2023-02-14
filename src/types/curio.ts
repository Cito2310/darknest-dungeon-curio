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
    effect: string,
    type: TType,
}

export interface IActionNotItem { 
    chances: number, 
    effect: string,
    types: TType,
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

export type TType = "bleed"
                    | "blight"
                    | "buff"
                    | "debuff"
                    | "disease"
                    | "heal stress"
                    | "heal"
                    | "loot"
                    | "none"
                    | "purge negative quirk"
                    | "purge positive quirk"
                    | "quirk negative"
                    | "quirk positive"
                    | "stress"
                    | "summon"
                    | "torch"