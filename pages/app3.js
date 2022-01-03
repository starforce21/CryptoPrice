function numberWithCommas(num) {
    var parts=num.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}
function color(value) {
    return value>=0? "style='color:green'" : "style='color:red'"
}
function value(data) {
    return data==null ? "---" : numberWithCommas(data)
}
function fetchMultipleTimes() {
    let responses = [];
    for(let i = 1; i <= 50; i++) {
      let response = fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${i}&sparkline=false`);
      responses.push(response);
    } 
    return Promise.all(responses);
  }
  
const awaitJson = (response) => Promise.all(response.map(response => {
    if(response.ok) return response.json();
    throw new Error(response.statusText);
  }));
  
  fetchMultipleTimes()
    .then(awaitJson)
    .then(data=>{
        reducedData=data.reduce((a,b)=>a.concat(b))
        filteredData=reducedData.filter(x=>x.total_volume>100000)
        filtered2Data=filteredData.filter((x, index)=> filteredData.indexOf(x)=== index)
        sortAsc=filtered2Data.sort((a,b)=> a.price_change_percentage_24h- b.price_change_percentage_24h)
        sortDesc=sortAsc.slice().reverse()
        console.log(sortAsc);
      table1Text='<h2>Top Losers</h2><table id="table1"><tr><th>Coin</th><th>Price(USD)</th><th>MarketCap</th><th>24h Volume</th><th>Delta</th></tr>'
      for (let i = 0; i < 20; i++) {
          table1Text+=`<tr><td><img style="width:18px; height: 18px;" src="${sortAsc[i].image}">${sortAsc[i].name}</td>
                      <td ${color(sortAsc[i].price_change_percentage_24h)}>${numberWithCommas(sortAsc[i].current_price)}</td>
                      <td>${numberWithCommas(sortAsc[i].market_cap)}</td>
                      <td>${numberWithCommas(sortAsc[i].total_volume)}</td>
                      <td ${color(sortAsc[i].price_change_percentage_24h)}>${Math.round(sortAsc[i].price_change_percentage_24h*10)/10}%</td></tr>`
      }
      table1Text+='</table>'
      table2Text='<h2>Top Gainers</h2><table id="table2"><tr><th>Coin</th><th>Price(USD)</th><th>MarketCap</th><th>24h Volume</th><th>Delta</th></tr>'
      for (let i = 0; i < 20; i++) {
          table2Text+=`<tr><td><img style="width:18px; height: 18px;" src="${sortDesc[i].image}">${sortDesc[i].name}</td>
                      <td ${color(sortDesc[i].price_change_percentage_24h)}>${numberWithCommas(sortDesc[i].current_price)}</td>
                      <td>${numberWithCommas(sortDesc[i].market_cap)}</td>
                      <td>${numberWithCommas(sortDesc[i].total_volume)}</td>
                      <td ${color(sortDesc[i].price_change_percentage_24h)}>${Math.round(sortDesc[i].price_change_percentage_24h*10)/10}%</td></tr>`
      }
      table2Text+='</table>'
      document.getElementById('flex5').innerHTML=table1Text
      document.getElementById('flex4').innerHTML=table2Text
    })
    .catch((error)=>{
        console.log(error);
    })

function top7() {
    fetch('https://api.coingecko.com/api/v3/search/trending')
    .then(res=>res.json())
    .then(data=>{
        trendingTable='<table id="table3"><tr><th>Coin</th><th>Symbol</th><th>Market Cap Rank</th><th>Price(btc)</th></tr>'
        for (let i = 0; i < 7; i++) {
            trendingTable+=`<tr><td><img style="width:18px; height: 18px;" src="${data.coins[i].item.thumb}">${data.coins[i].item.name}</td>
                        <td>${data.coins[i].item.symbol}</td>
                        <td>${data.coins[i].item.market_cap_rank}</td>
                        <td>${data.coins[i].item.price_btc}</td></tr>`
        }
      trendingTable+='</table>'
      document.getElementById('div1').innerHTML=trendingTable
    })
    .catch((error)=>{
        console.log(error);
    })
}
let input1=document.getElementById('search')
function InjectIt() {
  searchCrypto=input1.value
  fetch(`https://api.coingecko.com/api/v3/coins/${searchCrypto}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    list1Text=`<ul style="list-style: none;">
              <li>Name</li>
              <li>Symbol</li>
              <li>Current Price</li>
              <li>7D</li>
              <li>14D</li>
              <li>30D</li>
              <li>60D</li>
              <li>1Y</li>
              <li>Market Cap</li>
              <li>Market Cap Rank</li>
              <li>24h Trading Volume</li>
              <li>24h High/24h Low</li>
              <li>All-Time High</li>
              <li>All-Time Low</li>
              <li>Circulating Supply</li>
              <li>Total Supply</li>
              <li>Max Supply</li>
              <li>Fully Diluted Valuation</li>
              </ul>`
    list2Text=`<ul style="list-style: none;">
              <li><img style="width:18px; height: 18px;" src="${data.image.thumb}">${data.name}</li>
              <li>${data.symbol}</li>
              <li>${numberWithCommas(data.market_data.current_price.usd)}</li>
              <li ${color(data.market_data.price_change_percentage_7d_in_currency.usd)}>${data.market_data.price_change_percentage_7d_in_currency.usd}%</li>
              <li ${color(data.market_data.price_change_percentage_14d_in_currency.usd)}>${data.market_data.price_change_percentage_14d_in_currency.usd}%</li>
              <li ${color(data.market_data.price_change_percentage_30d_in_currency.usd)}>${data.market_data.price_change_percentage_30d_in_currency.usd}%</li>
              <li ${color(data.market_data.price_change_percentage_60d_in_currency.usd)}>${data.market_data.price_change_percentage_60d_in_currency.usd}%</li>
              <li ${color(data.market_data.price_change_percentage_1y_in_currency.usd)}>${data.market_data.price_change_percentage_1y_in_currency.usd}%</li>
              <li>${numberWithCommas(data.market_data.market_cap.usd)}</li>
              <li>${data.market_cap_rank}</li>
              <li>${numberWithCommas(data.market_data.total_volume.usd)}</li>
              <li>${numberWithCommas(data.market_data.high_24h.usd)}/${data.market_data.low_24h.usd}</li>
              <li>${numberWithCommas(data.market_data.ath.usd)} Date:${data.market_data.ath_date.usd}</li>
              <li>${numberWithCommas(data.market_data.atl.usd)} Date:${data.market_data.atl_date.usd}</li>
              <li>${value(data.market_data.circulating_supply)}</li>
              <li>${value(data.market_data.total_supply)}</li>
              <li>${value(data.market_data.max_supply)}</li>
              <li>${value(data.market_data.fully_diluted_valuation.usd)}</li>
              </ul>`
    document.getElementById('flex1').innerHTML=list1Text
    document.getElementById('flex2').innerHTML=list2Text
})
  .catch((error)=>{
  console.log(error);
  })
}

top7()