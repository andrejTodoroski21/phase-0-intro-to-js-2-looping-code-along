// Code your solutions in this file
function writeCards(names, event){
    let thankNames = []
    for (let i = 0; i < names.length; i++){
        thankNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankNames
}

function countDown(num){
    while(num >= 0 ){
        console.log(num)
        num--
    }
}