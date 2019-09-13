export const numberWithCommas: (x: number | string) => string = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const displayAsMoney: (x: number | string) => string = (x) => {
    return numberWithCommas(Number(x).toFixed(2)); 
}