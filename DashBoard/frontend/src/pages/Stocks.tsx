import { useState } from "react";
import { Link } from "react-router-dom";

const stockData = [
  { symbol: "RELIANCE", name: "Reliance Industries", livePrice: 2500, openingPrice: 2450, high: 2520, low: 2440 },
  { symbol: "TCS", name: "Tata Consultancy Services", livePrice: 3600, openingPrice: 3550, high: 3620, low: 3540 },
  { symbol: "INFY", name: "Infosys", livePrice: 1500, openingPrice: 1480, high: 1515, low: 1470 },
  { symbol: "HDFC", name: "HDFC Bank", livePrice: 1600, openingPrice: 1580, high: 1610, low: 1575 },
  { symbol: "ICICIBANK", name: "ICICI Bank", livePrice: 900, openingPrice: 890, high: 920, low: 885 },
  { symbol: "HUL", name: "Hindustan Unilever", livePrice: 2700, openingPrice: 2680, high: 2725, low: 2670 },
  { symbol: "SBIN", name: "State Bank of India", livePrice: 550, openingPrice: 540, high: 560, low: 535 },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", livePrice: 7200, openingPrice: 7100, high: 7250, low: 7050 },
  { symbol: "MARUTI", name: "Maruti Suzuki", livePrice: 9400, openingPrice: 9300, high: 9450, low: 9250 },
  { symbol: "LT", name: "Larsen & Toubro", livePrice: 3200, openingPrice: 3150, high: 3250, low: 3140 }
];

const Stocks = () => {
  const [stocks] = useState(stockData);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Stock Market Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stocks.map((stock) => {
          const priceChange = stock.livePrice - stock.openingPrice;
          const priceColor = priceChange >= 0 ? "text-green-600" : "text-red-600";

          return (
            <div 
              key={stock.symbol} 
              className="p-5 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              <h2 className="text-lg font-bold text-blue-600 hover:underline">
                <Link to={`/stock/${stock.symbol}`}>{stock.name}</Link>
              </h2>
              <p className={`font-semibold ${priceColor}`}>
                Live Price: ₹{stock.livePrice} ({priceChange >= 0 ? "▲" : "▼"} {Math.abs(priceChange)})
              </p>
              <p className="text-gray-700">Opening Price: ₹{stock.openingPrice}</p>
              <p className="text-gray-700">High: ₹{stock.high}</p>
              <p className="text-gray-700">Low: ₹{stock.low}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stocks;
