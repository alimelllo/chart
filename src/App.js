import classes from './App.module.css';
import binanceicon from './binance.jpeg';
import React, { Component }  from 'react';

import TradingViewWidget, { Themes , IntervalTypes } from "react-tradingview-widget";

function App() {

document.body.style.background='rgb(29, 29, 29)';


  return (
    <div className="App">
<div className={classes.header}>
  <div className={classes.leftheader}>
  <div className={classes.icon}><img src={binanceicon}></img></div>
<a>Buy Crypto</a>
<a>Markets</a>
<a>Tarde</a>
<a>Derivatives</a>
<a>Earn</a>
<a>Financce</a>
<a>NFT</a>
</div>
<div className={classes.rightheader}>
<div className={classes.tools}>tools</div>
<div className={classes.tools}>info</div>
<div className={classes.tools}>usd</div>
<a>English</a>
<a>Downloads</a>
<a>Register</a>
<a>Login</a>
</div>
</div>



<div className={classes.notification}>
  <p>binancestaking lunches mina staking with up to 12.29% apy (03-04)</p>
  <p>binancestaking lunches mina staking with up to 12.29% apy (03-04)</p>
  <p>binancestaking lunches mina staking with up to 12.29% apy (03-04)</p>
</div>


{/* middle main container */}

<div className={classes.middlecontainer}>
<div className={classes.leftmain}>
<div className={classes.middleheader}>
<a className={classes.coin}>BTC/USDT</a>
<a className={classes.coinprice}>39,439.50</a>
<a>24h Change</a>
<a>24h High</a>
<a>24h Low</a>
<a>24h Volume(BTC)</a>
<a>24h Volume(USDT)</a>
</div>

<div className={classes.leftbarandchart}>
<div className={classes.leftbarcontainer}>
<div className={classes.leftbar}> 
<div className={classes.baroptions}>
  <a>a</a>
  <a>a</a>
  <a>a</a>
</div>
<div className={classes.leftbartitles}>
<p>price USDT</p>
<p>amount(btc)</p>
<p>total</p>
</div>
{/*will render data  from server*/}
<div className={classes.leftbardata}>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftnegbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>

</div>

</div>
<h3>39,327.84</h3>
<div className={classes.leftbar}> 
<div className={classes.leftbardata}>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>
<div className={classes.leftposbarrow}><p>32345.79</p><p>0.09300</p><p>3.657.9468</p></div>

</div>

</div>

</div>

{/*chart component*/}
<div className={classes.chartandform}>
<div className={classes.chart}>

    <TradingViewWidget
      symbol="NASDAQ:AAPL"
      theme={Themes.DARK}
      locale="fr"
      autosize
      symbol="BINANCE:BTCPERP"
      interval={IntervalTypes.D}
      timezone="Etc/UTC"
      style="1"
      locale="in"
      />
  
</div>

<div className={classes.middleform}>
  <input placeholder={'price'}></input>
  <input placeholder={'amount'}></input>
  <input placeholder={'price'}></input>
  <input placeholder={'amount'}></input>
  <button>log in or register now</button>
  <button>log in or register now</button>
</div>
</div>

</div>


</div>



<div className={classes.rightmain}>
<div className={classes.rightbar}>
<input placeholder={'search'}></input>
  <div className={classes.rightbarnav}><p>busd</p><p>usdt</p><p>bnb</p><p>btc</p><p>altc</p><p>flat</p></div>
  <div className={classes.rightbartitles}>
<p>price USDT</p>
<p>amount(btc)</p>
<p>total</p>
</div>

  <div className={classes.rightbardata}>
<div className={classes.rightbarrow}><p>ACA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ACA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ACA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ACA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ACA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ACA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ADA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ADA</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>ADA</p><p>0.09300</p><p>--0.32%</p></div>
<div className={classes.rightbarrow}><p>ADA</p><p>0.09300</p><p>--0.32%</p></div>
<div className={classes.rightbarrow}><p>ACH</p><p>0.09300</p><p>--0.32%</p></div>
<div className={classes.rightbarrow}><p>ACH</p><p>0.09300</p><p>--0.32%</p></div>
<div className={classes.rightbarrow}><p>ACH</p><p>0.09300</p><p>--0.32%</p></div>
<div className={classes.rightbarrow}><p>ACH</p><p>0.09300</p><p>--0.32%</p></div>

</div>

</div>


<h3>market trades</h3>
<div className={classes.rightbar}>

<div className={classes.rightbartitles}>
<p>price USDT</p>
<p>amount(btc)</p>
<p>time</p>
</div>

  <div className={classes.secondrightbardata}>
<div className={classes.rightbarrow}><p>39.327.83</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>39.327.83</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>39.327.83</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>39.327.83</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>39.327.83</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>39.327.83</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>32.343.56</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>32.343.56</p><p>0.09300</p><p>-1.48%</p></div>
<div className={classes.rightbarrow}><p>32.343.56</p><p>0.09300</p><p>-0.32%</p></div>
<div className={classes.rightbarrow}><p>32.343.56</p><p>0.09300</p><p>-0.32%</p></div>
<div className={classes.rightbarrow}><p>43.546.78</p><p>0.09300</p><p>-0.32%</p></div>
<div className={classes.rightbarrow}><p>43.546.78</p><p>0.09300</p><p>-0.32%</p></div>
<div className={classes.rightbarrow}><p>43.546.78</p><p>0.09300</p><p>-0.32%</p></div>
<div className={classes.rightbarrow}><p>43.546.78</p><p>0.09300</p><p>-0.32%</p></div>

</div>
</div>

<h3>market activities</h3>



</div>








</div>

</div>
  );
}

export default App;
