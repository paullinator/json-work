import { asValue, asString, asObject, asBoolean } from 'cleaners'
import { CURRENCY_DATA } from './testData.js'

const asCurrency = asObject({
    currencyCode: asString,
    displayName: asString,
    buySellSupport: asBoolean,
    swapSupport: asBoolean,
    status: asValue("up", "down", "partial")
})


let problems = Object.values(CURRENCY_DATA.assets).filter(each => !asCurrency(each))


if(problems.length === 0){
    console.log("No issues, JSON is good")
}
// console.log(asCurrency({
//     currencyCode: "BTC",
//     displayName: 'Bitcoin',
//     buySellSupport: true,
//     swapSupport: true,
//     status: "up"
// }))