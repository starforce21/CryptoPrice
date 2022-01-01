document.getElementById('div1').innerHTML='<input type="text" id="input1"><button id="displayButton" onclick="display()">Display Amount</button>'
let input1=document.getElementById('input1')
function numberWithCommas(num) {
    var parts=num.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
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
                        <td>${numberWithCommas(data[i].current_price)}</td>
                        <td>${Math.round(data[i].price_change_percentage_7d_in_currency*10)/10}%</td>
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


