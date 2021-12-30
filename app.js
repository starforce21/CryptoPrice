document.getElementById('div1').innerHTML='<input type="text" id="input1"><button id="displayButton" onclick="display(input1)">Display</button>'
function display(numberOfResults) {
    const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numberOfResults}&sparkline=false&price_change_percentage=7d`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        tableText='<table><tr><th>#</th><th>Coin</th><th>Symbol</th><th>Price(USD)</th><th>7D</th><th>24h Volume</th><th>MarketCap</th></tr>'
        for (let i = 0; i < numberOfResults; i++) {
            tableText+=`<tr><td>${data[i].market_cap_rank}</td><td><img style="width:18px; height: 18px;" src="${data[i].image}">${data[i].name}</td><td>${data[i].symbol}</td><td>${data[i].current_price}
            </td><td>${Math.round(data[i].price_change_percentage_7d_in_currency*10)/10}%</td><td>${data[i].total_volume}</td><td>${data[i].market_cap}</td></tr>`
        }
        tableText+='</table>'
        console.log(tableText)
        document.getElementById('div2').innerHTML=tableText
        console.log(numberOfResults)
    })
    .catch((error)=>{
    console.log(error);
    })
}
display(30)
let input1=document.getElementById('input1').value

