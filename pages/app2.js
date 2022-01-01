// myPick=['bitcoin','ethereum','cardano','terra-luna','matic-network','crypto-com-chain','algorand','monero','harmony','yieldly']

function numberWithCommas(num) {
  var parts=num.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

// function fetchMultipleTimes() {
//   let responses = [];
//   for(let i = 0; i < myPick.length; i++) {
//     let response = fetch(`https://api.coingecko.com/api/v3/coins/${myPick}`);
//     responses.push(response);
//   } 
//   return Promise.all(responses);
// }

// const awaitJson = (response) => Promise.all(response.map(response => {
//   if(response.ok) return response.json();
//   throw new Error(response.statusText);
// }));

// fetchMultipleTimes()
//   .then(awaitJson)
//   .then(data=>{
//     tableText='<table id="p1table"><tr><th>#</th><th>Coin</th><th>Symbol</th><th>Price(USD)</th><th>7D</th><th>24h Volume</th><th>MarketCap</th></tr>'
//     for (let i = 0; i < myPick.length; i++) {
//         tableText+=`<tr><td>${data.market_cap_rank}</td>
//                     <td><img style="width:18px; height: 18px;" src="${data.image.thumb}">${data.name}</td>
//                     <td>${data.symbol}</td>
//                     <td>${numberWithCommas(data.market_data.current_price.usd)}</td>
//                     <td>${Math.round(data.market_data.price_change_percentage_7d_in_currency.usd*10)/10}%</td>
//                     <td>${numberWithCommas(data.market_data.total_volume.usd)}</td>
//                     <td>${numberWithCommas(data.market_data.market_cap.usd)}</td></tr>`
//     }
//     tableText+='</table>'
//     document.getElementById('div2').innerHTML=tableText
//   })
//   .catch((error)=>{
//   console.log(error);
//   })

// let writeUp=
// `Bitcoin - BTC
// <br>
// The grand-daddy of crypto. The biggest and the meanest. The all-father.
// <br>
// +It is the biggest and most stable crypto out there, everyone knows it and the community that supports it is the largest. Institutions, funds and companies hold BTC and the number of them is increasing every day.
// <br>
// +Safest bet in cryptoverse and only 21 million of BTC will ever exist. A lot of that BTC has been lost forever and as such illiquid.
// <br>
// +It's a synonymous with the word crypto and digital gold for a good reason. It's considered one if not the best store of value to hedge ever increasing inflation!
// <br>
// -Movement is sometimes slower than altcoins.
// <br>
// -Transactions are slow and can get pricey even though Lightning network updated is trying to fix the scalability issues at the cost of
// <br>
// -Smaller potential for high returns
// <br>
// <br>
// Ethereum - ETH
// <br>
// The original altcoin and second biggest crypto right after BTC.
// <br>
// +Insane support for dapps, smart contracts, DeFi and so on
// <br>
// +Good support even in dips
// <br>
// +Very good support in community
// <br>
// -We are still waiting for full Ethereum 2.0 release
// <br>
// -Transaction fees can get outrageous, be vary when transferring to wallets
// <br>
// -Other altcoins are slowly gaining on ETH in terms of tech, smart contracts and other aspects
// <br>
// <br>
// Cardano - ADA
// <br>
// Child of Charles Hoskinson which has been growing steadily despite recent dips. Recently implemented long awaited smart contracts.
// <br>
// +Super easy to stake it and reap rewards with Yoroi and its DPos staking buit in right in the app!
// <br>
// +Cardano has support for native tokens without any need for smart contracts meaning that you don't need to pay for gas fees on it's network.
// <br>
// +Cardano has a massive support from the followers and Charles is a very likable face of ADA.
// <br>
// -Recent smart contract upgrade didn't live to the hype.
// <br>
// -Cardanos main thing was cheap and fast transactions which many of the other PoS coins now have and more.
// <br>
// -Staking on Cardano is great but competitors like DOT take it to a higher level.
// <br>
// <br>
// Terra - LUNA
// <br>
// A very hot L1 project that you probably heard about LUNA recently when it started it's rocketing to the...LUNA?
// <br>
// +Fuels whole Terra network and supports Terra stablecoins and payments. And Terra has a really deep wallet and they are using it to support their project.
// <br>
// +Allows swapping of stablecoins which makes Terra awesome for cross border payements. The Mirror and Anchor protocols on Terra are impressive.
// <br>
// +LUNAtic community of supporters and some big names of the industry world
// <br>
// -Stablecoins are not backed by cash so it can crash the price of LUNA. Regulation on stablecoins can affect it.
// <br>
// -Regulators be eyeing Terra like (≖ ͜ʖ≖)
// <br>
// -Tokenomics are sketchy and we still don't know how exactly that went down back in the day
// <br>
// <br>
// Polygon - MATIC
// <br>
// Polygon or formerly Matic is a L2 scaling solution on ETH network.
// <br>
// +Enhancing ETH network with its solutions = ETH with cheap gas fees!!!
// <br>
// +Good support of the fanbase and strong DeFi integration support
// <br>
// +Extremely low fees (you get enough MATIC from a faucet to perform 10 transactions!) and great TPS on sidechains
// <br>
// -There is a doubt that Eth 2.0 could make it obsolute (Vitalik denied that though)
// <br>
// -Long, long, loooong accumulation time which put off some people from investing in Matic
// <br>
// -Many L2 competitors such as Loopring, Arbitrum (which our moons run on), Optimism and so on
// <br>
// <br>
// Crypto.com - CRO
// <br>
// One Word: Hype
// <br>
// The marketing team for CRO is leaps and bound above everyone else. With crypto being such a speculavtive assest public sentiment is a massive price driver.
// <br>
// It also have one of the best crypto lending/staking service in the space. It also currently got the best crypto credit card in the space.
// <br>
// It is no wonder why they are the fastest growing crypto exchange with prospect of surpassing Coinbase in the relative future.
// <br>
// <br>
// Algorand - Algo
// Honesty, one of my favorite platform crypto currently. It has crazy low fee for transaction as well as a ridiculously easy POS experience.
// <br>
// I reckon most user would passively earn more Algo then using spending it on fees. With it's goverenace system and future roadmap
// <br>
// I currently see no reason why it wouldnt be a dominant player it the Crypto Space.
// <br>
// <br>
// Monero - XMR
// <br>
// If privacy is important to you XMR is the way. Monero is what people orginally thought bitcoin was. Anonymity and fungibitly is it main ttraction.
// <br>
// Due to the nature of Anonymity and fungibitly, critics of monero often points out that monero is mostly used for crimes.
// <br>
// While this can be true. I respect the idea of a decentralized cryptocurrency that keep everyone safe from any government.
// <br>
// <br>
// Harmony - One
// <br>
// Harmony One is a cross-chain blockchain project. Cross-chain means that it is designed to be a bridge between different blockchains. It was founded in California, USA by ex-FAANG* employees ( Facebook, Apple, Amazon, Netflix, Google )
// <br>
// Harmony One is one of those project that is here to stay and got a good team and community, I'm bullish on Harmony One in both the long term and short term
// <br>
// Harmony One's mainnet runs ETH apps with just two seconds of transaction speed and a hundred times lower gas fee. Harmony One is pretty Fast , their mainnet supports four pieces of 1 000 nodes, producing one block in just two seconds Harmony One is also one of the first cryptocurrencies to implementing Sharding.
// <br>
// <br>
// Yieldly - Yldy
// <br>
// Yieldly is a DeFi service on Algorand and oh boy is it good. It currently offer a staking no-loss prize game, where staking Algo is like entering
// <br>
// a lottery game with chance to win large amount of Algo. Even if you dont win, you still receive roughly 10% interest in Yldy.
// <br>
// Then you can use that Yldy in their staking pool which generates 35% interest. As well as all these DeFi service it recently launched
// <br>
// it Cross-Chain Bridges which they aim to Swap ASA tokens seamlessly via the world's first audited cross-chain bridge connecting Algorand and broader DeFi networks. `

// document.getElementById('div3').innerHTML=writeUp

let input1=document.getElementById('search')
function InjectIt() {
  searchCrypto=input1.value
  fetch(`https://api.coingecko.com/api/v3/coins/${searchCrypto}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    list1Text=`<ul>
              <li>Current Price</li>
              <li>Name</li>
              <li>Symbol</li>
              <li>Market Cap</li>
              <li>Market Cap Rank</li>
              <li>24h Trading Volume</li>
              <li>24h Low/24h High</li>
              <li>All-Time High</li>
              <li>all-Time Low</li>
              <li>Circulating Supply</li>
              <li>Total Supply</li>
              <li>Max Supply</li>
              <li>Fully Diluted Valuation</li>
              </ul>`
    list2Text=`<ul>
              <li>Current Price</li>
              <li>Name</li>
              <li>Symbol</li>
              <li>Market Cap</li>
              <li>${data.market_cap_rank}</li>
              <li>24h Trading Volume</li>
              <li>24h Low/24h High</li>
              <li>All-Time High</li>
              <li>all-Time Low</li>
              <li>Circulating Supply</li>
              <li>Total Supply</li>
              <li>Max Supply</li>
              <li>Fully Diluted Valuation</li>
              </ul>`
    tableText+=`<tr><td>${data.market_cap_rank}</td>
                <td><img style="width:18px; height: 18px;" src="${data.image.thumb}">${data.name}</td>
                <td>${data.symbol}</td>
                <td>${numberWithCommas(data.market_data.current_price.usd)}</td>
                <td>${Math.round(data.market_data.price_change_percentage_7d_in_currency.usd*10)/10}%</td>
                <td>${numberWithCommas(data.market_data.total_volume.usd)}</td>
                <td>${numberWithCommas(data.market_data.market_cap.usd)}</td></tr>`
    tableText+='</table>'
    document.getElementById('div1').innerHTML=tableText
})
  .catch((error)=>{
  console.log(error);
  })
}
