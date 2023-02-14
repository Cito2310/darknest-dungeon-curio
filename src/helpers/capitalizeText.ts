export const capitalizeText = ( value: string ) => {
    const words: string[] = value.split(" ");
    const capitalize = words.map( word => word[0].toLocaleUpperCase() + word.slice(1) )
    
    return capitalize.join(" ")
}