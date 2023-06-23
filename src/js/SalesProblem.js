
export function TopProduct(productProfitArray){
    if(productProfitArray.length === 0){
        return 'No Data is Found';
    }

    let MaxProfit = Number.NEGATIVE_INFINITY;
    let TopProduct = null;
    
    for(let i = 0; i < productProfitArray.length; i ++){
        const [Product, Profit] = productProfitArray[i];
        if(Profit > MaxProfit){
            MaxProfit = Profit;
            TopProduct = Product;
        }
    }
    return TopProduct;
}

export function BottomProduct(productProfitArray){
    if(productProfitArray.length === 0){
        return 'No Data is Found';
    }

    let MinProfit = Number.POSITIVE_INFINITY;
    let BottomProduct = null;

    for(let i = 0; i < productProfitArray.length; i++){
        const [Product, Profit] = productProfitArray[i];
        if(Profit < MinProfit){
            MinProfit = Profit;
            BottomProduct = Product;
        }
    }
    return BottomProduct;
}

export function zeroProfitProduct(productProfitArray){
    if(productProfitArray.length === 0){
        return 'No Data is Found';
    }

    let MinDiff = Number.POSITIVE_INFINITY;
    let zeroProfitProduct = null;

    for (let i = 0; i < productProfitArray.length; i++){
        const [Product, Profit] = productProfitArray[i];
        const diff = Math.abs(Profit);
        if(diff < MinDiff || (diff === MinDiff && Profit > 0)){
            MinDiff = diff;
            zeroProfitProduct = Product;
        }
    }
    return zeroProfitProduct;
}