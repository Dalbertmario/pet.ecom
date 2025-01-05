export function UseTitileformation(paras){
const tile = paras?.split('')
const correctedTitle = []
tile.map((el)=> {
   if(el==='-'){
    correctedTitle.push(' ')
   }else{
     correctedTitle.push(el)
   }
})
const cd =correctedTitle[0].toUpperCase()
const finalCorrectedtitle = cd+correctedTitle.splice(1,correctedTitle.length).join('')
return finalCorrectedtitle
}