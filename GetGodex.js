import {CURRENCY_DATA} from './testData.js'
import fetch from 'node-fetch'


const TOKEN_CHAINS = ['ETH', 'AVAX', 'MATIC', 'FTM'];

let Gocoins = await fetch('https://api.godex.io/api/v1/coins')
                    .then(response => response.json())
                    .then(data => data.map(coin => coin.code))
                    .catch(error => console.log(error));

(function getMainChain(){
    let mainChain = Object.values(CURRENCY_DATA.assets).filter(coin => Gocoins.includes(coin.currencyCode));
    mainChain.forEach(coin => console.log(coin.currencyCode))
})();

(function getTokenizedChains(){
    let tokenizedChains = Object.values(CURRENCY_DATA.assets).filter(coin => TOKEN_CHAINS.includes(coin.currencyCode));

    console.log("Tokenized Chains:");
    tokenizedChains.forEach(chain =>{
        console.log(chain.currencyCode);
        let tokens = Object.values(chain.tokens);
        let supported = tokens.filter(token => Gocoins.includes(token.displayName))
        console.log(supported)
    })
})();