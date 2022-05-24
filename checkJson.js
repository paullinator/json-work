import { asValue, asString, asObject, asBoolean } from 'cleaners'
import { CURRENCY_DATA } from './testData.js'

const asCurrency = asObject({
    currencyCode: asString,
    displayName: asString,
    buySellSupport: asBoolean,
    swapSupport: asBoolean,
    status: asValue("up", "down", "partial")
})


function checkCleanliness(token){
    try{
        if(asCurrency(token)){
            console.log(`${token.currencyCode} is clean`)
        }
    }catch(error){
        console.log(`There is an issue with ${token.displayName}`)
    }
}

let data = Object.values(CURRENCY_DATA.assets).map(each => each)

let tokenChains = data.filter(each => each.tokens)

data.forEach(token => checkCleanliness(token))


let chainTokens = tokenChains.map(chain => Object.values(chain.tokens))

chainTokens.forEach(each => each.forEach(eeach => checkCleanliness(eeach)))