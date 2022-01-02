function numberWithCommas(num) {
    var parts=num.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  }
  function color(value) {
    return value>=0? "style='color:green'" : "style='color:red'"
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
top7()