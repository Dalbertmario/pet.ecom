export function moneyformat(value){
    return Intl.NumberFormat('en-IN',{
        style:'currency',
        currency:'INR'
    }).format(value)
}