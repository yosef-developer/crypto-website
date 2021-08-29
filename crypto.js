let firstHeader = document.querySelector(".first-header");
let faBars = document.querySelector(".fa-bars");
let nav = document.querySelector(".nav");
window.addEventListener("scroll" , function(){
    if(window.scrollY > 0) {
        firstHeader.classList.add("show");
    }
    else {
        firstHeader.classList.remove("show");

    }

    if(nav.classList.toggle("show")){
        nav.classList.remove("show");
        faBars.className = "fas fa-bars" ;
    }
})


faBars.addEventListener("click" , function(){
    if(nav.classList.toggle("show")) {
        nav.classList.add("show");
        faBars.className  = "fas fa-times" ;
    }
    else {
        nav.classList.remove("show");
        faBars.className  = "fas fa-bars" ;

    }
})

let bitcoin = document.querySelector("#bitcoin");
let ethereum = document.querySelector("#ethereum");
let dogecoin = document.querySelector("#dogecoin");
let litecoin = document.querySelector("#litecoin");
let tera = document.querySelector("#tera");
let chainlink = document.querySelector("#chainlink");
let solana = document.querySelector("#solana");

window.addEventListener("DOMContentLoaded", handler);
setInterval(handler, 3000);
function handler() {
    fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
        .then(res => res.json())
        .then(text => {
            x = text;
            let y = Number(text.price);
            bitcoin.innerHTML = y.toFixed(2) + "$";
            return fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT");
        })
        .then(res => res.json())
        .then(text => {
            let y = Number(text.priceChangePercent);
            let y2 = Number(text.volume)
            bitcoin.nextElementSibling.nextElementSibling.innerHTML = y.toFixed(2) + "%"
            bitcoin.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = y2.toFixed(2);
            return fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT")
        })
        .then(res => res.json())
        .then(text => {
            let y3 = Number(text.price);
            let x3 = y3 / parseInt(bitcoin.innerHTML) ;
            bitcoin.nextElementSibling.innerHTML = x3.toFixed(4) + "%" ;
        })
        

    /////////////////////////////////////

    fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT")
        .then(res2 => res2.json())
        .then(text2 => {
            x = text2;
            let y = Number(text2.price);
            ethereum.innerHTML = y.toFixed(2) + "$";
            return fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT");
        })
        .then(res => res.json())
        .then(text => {
            let y = Number(text.priceChangePercent);
            let y2 = Number(text.volume)
            ethereum.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = y2.toFixed(2);
            ethereum.nextElementSibling.nextElementSibling.innerHTML = y.toFixed(2) + "%"
            return fetch("https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT")
        })
        .then(res => res.json())
        .then(text => {
            let y3 = Number(text.price);
            let x3 = y3 / parseInt(ethereum.innerHTML) ;
            ethereum.nextElementSibling.innerHTML = x3.toFixed(4) + "%" ;
        })

    ///////////////////////////////////////////////////////////


    fetch("https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT")
        .then(res2 => res2.json())
        .then(text2 => {
            x = text2;
            let y = Number(text2.price);
            dogecoin.innerHTML = y.toFixed(2) + "$";
            return fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=DOGEUSDT");

        })
        .then(res => res.json())
        .then(text => {
            let y = Number(text.priceChangePercent);
            let y2 = Number(text.volume);
            dogecoin.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = y2.toFixed(2);
            dogecoin.nextElementSibling.nextElementSibling.innerHTML = y.toFixed(2) + "%";
            return fetch("https://api.binance.com/api/v3/avgPrice?symbol=DOGEUSDT")
            
        })
        .then(res => res.json())
        .then(text => {
            let y3 = Number(text.price);
            let x3 = y3 / parseInt(dogecoin.innerHTML) ;
            dogecoin.nextElementSibling.innerHTML = x3.toFixed(4) + "%" ;
            if(dogecoin.nextElementSibling.innerHTML == "Infinity%"){
                dogecoin.nextElementSibling.innerHTML = "1.00%"
            }
        })

    ///////////////////////////////////////////////////////



    fetch("https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT")
        .then(res2 => res2.json())
        .then(text2 => {
            x = text2;
            let y = Number(text2.price);
            litecoin.innerHTML = y.toFixed(2) + "$";
            return fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=LTCUSDT");

        })
        .then(res => res.json())
        .then(text => {
            let y = Number(text.priceChangePercent);
            let y2 = Number(text.volume);
            litecoin.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = y2.toFixed(2);
            litecoin.nextElementSibling.nextElementSibling.innerHTML = y.toFixed(2) + "%";
            return fetch("https://api.binance.com/api/v3/avgPrice?symbol=LTCUSDT")

        })
        .then(res => res.json())
        .then(text => {
            let y3 = Number(text.price);
            let x3 = y3 / parseInt(litecoin.innerHTML) ;
            litecoin.nextElementSibling.innerHTML = x3.toFixed(4) + "%" ;
        })

    ///////////////////////////////////////////////////////



    fetch("https://api.binance.com/api/v3/ticker/price?symbol=LUNAUSDT")
        .then(res2 => res2.json())
        .then(text2 => {
            x = text2;
            let y = Number(text2.price);
            tera.innerHTML = y.toFixed(2) + "$";
            return fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=LUNAUSDT");
        })
        .then(res => res.json())
        .then(text => {
            let y = Number(text.priceChangePercent);
            let y2 = Number(text.volume);
            tera.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = y2.toFixed(2);
            tera.nextElementSibling.nextElementSibling.innerHTML = y.toFixed(4) + "%"
            return fetch("https://api.binance.com/api/v3/avgPrice?symbol=LUNAUSDT")

        })
        .then(res => res.json())
        .then(text => {
            let y3 = Number(text.price);
            let x3 = y3 / parseInt(tera.innerHTML) ;
            tera.nextElementSibling.innerHTML = x3.toFixed(4) + "%" ;
        })

    /////////////////////////////////////////////////////



    fetch("https://api.binance.com/api/v3/ticker/price?symbol=LINKUSDT")
        .then(res2 => res2.json())
        .then(text2 => {
            x = text2;
            let y = Number(text2.price);
            chainlink.innerHTML = y.toFixed(2) + "$";
            return fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=LINKUSDT");
        })
        .then(res => res.json())
        .then(text => {
            let y = Number(text.priceChangePercent);
            let y2 = Number(text.volume);
            chainlink.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = y2.toFixed(2);
            chainlink.nextElementSibling.nextElementSibling.innerHTML = y.toFixed(2) + "%";
            return fetch("https://api.binance.com/api/v3/avgPrice?symbol=LINKUSDT")

        })
        .then(res => res.json())
        .then(text => {
            let y3 = Number(text.price);
            let x3 = y3 / parseInt(chainlink.innerHTML) ;
            chainlink.nextElementSibling.innerHTML = x3.toFixed(4) + "%" ;
        })

    /////////////////////////////////////////////////////////



    fetch("https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT")
        .then(res2 => res2.json())
        .then(text2 => {
            x = text2;
            let y = Number(text2.price);
            solana.innerHTML = y.toFixed(2) + "$";
            return fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=SOLUSDT");

        })
        .then(res => res.json())
        .then(text => {
            let y = Number(text.priceChangePercent);
            let y2 = Number(text.volume);
            solana.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = y2.toFixed(2);
            solana.nextElementSibling.nextElementSibling.innerHTML = y.toFixed(2) + "%";
            return fetch("https://api.binance.com/api/v3/avgPrice?symbol=SOLUSDT")

        })
        .then(res => res.json())
        .then(text => {
            let y3 = Number(text.price);
            let x3 = y3 / parseInt(solana.innerHTML) ;
            solana.nextElementSibling.innerHTML = x3.toFixed(4) + "%" ;
        })
}




