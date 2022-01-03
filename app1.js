document.getElementById('div1').innerHTML='<input type="text" id="input1"><button id="displayButton" onclick="display()">Display Amount</button>'
let input1=document.getElementById('input1')
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
function globalData() {
    fetch("https://api.coingecko.com/api/v3/global")
    .then(res=>res.json())
    .then(data=>{
        titleText=`<div class="bigData">Total Market Cap<br>${numberWithCommas(data.data.total_market_cap.usd)}</div>
                    <div class="bigData">24h Trading Volume<br>${numberWithCommas(data.data.total_volume.usd)}</div>
                    <div class="bigData">Bitcoin Market Percentage<br>${Math.round(data.data.market_cap_percentage.btc*100)/100}%</div>
                    <div class="bigData">Ethereum Market Percentage<br>${Math.round(data.data.market_cap_percentage.eth*100)/100}%</div>`
        document.getElementById('div2').innerHTML=titleText
    })
    .catch((error)=>{
    console.log(error);
    })
}
function display(num=30) {
    let numberOfResults=input1.value
    if(numberOfResults=='')
    numberOfResults=num
    else
    numberOfResults=input1.value
    const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numberOfResults}&sparkline=false&price_change_percentage=7d`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        tableText='<table id="p1table"><tr><th>#</th><th>Coin</th><th>Symbol</th><th>Price(USD)</th><th>7D</th><th>24h Volume</th><th>MarketCap</th></tr>'
        for (let i = 0; i < numberOfResults; i++) {
            tableText+=`<tr><td>${data[i].market_cap_rank}</td>
                        <td><img style="width:18px; height: 18px;" src="${data[i].image}">${data[i].name}</td>
                        <td>${data[i].symbol}</td>
                        <td ${color(data[i].price_change_percentage_7d_in_currency)}>${numberWithCommas(data[i].current_price)}</td>
                        <td ${color(data[i].price_change_percentage_7d_in_currency)}>${Math.round(data[i].price_change_percentage_7d_in_currency*10)/10}%</td>
                        <td>${numberWithCommas(data[i].total_volume)}</td>
                        <td>${numberWithCommas(data[i].market_cap)}</td></tr>`
        }
        tableText+='</table>'
        document.getElementById('div3').innerHTML=tableText
    })
    .catch((error)=>{
    console.log(error);
    })
}
globalData()
display()

let input2=document.getElementById('search')
function InjectIt() {
  searchCrypto=input2.value
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
