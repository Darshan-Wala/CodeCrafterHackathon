// StockDetail.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample stock data
const stockData = [
  { symbol: "RELIANCE", name: "Reliance Industries", livePrice: 2500, openingPrice: 2450, high: 2520, low: 2440 },
  { symbol: "TCS", name: "Tata Consultancy Services", livePrice: 3600, openingPrice: 3550, high: 3620, low: 3540 },
  { symbol: "INFY", name: "Infosys", livePrice: 1500, openingPrice: 1480, high: 1515, low: 1470 },
  { symbol: "HDFC", name: "HDFC Bank", livePrice: 1600, openingPrice: 1580, high: 1610, low: 1575 },
  { symbol: "ICICIBANK", name: "ICICI Bank", livePrice: 900, openingPrice: 890, high: 920, low: 885 }
];

// Sample Stock History Data (12 data points)
const stockHistory = {
  RELIANCE: [2200, 2300, 2350, 2400, 2450, 2500, 2550, 2600, 2650, 2700, 2750, 2800],
  TCS: [3200, 3300, 3400, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900],
  INFY: [1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750],
  HDFC: [1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950],
  ICICIBANK: [700, 750, 800, 850, 870, 900, 930, 950, 980, 1000, 1030, 1050]
};

const StockDetail = () => {
  const { symbol } = useParams();
  const stock = stockData.find((s) => s.symbol === symbol);

  const [quantity, setQuantity] = useState(1);
  const [stopLoss, setStopLoss] = useState("");
  const [transactionMessage, setTransactionMessage] = useState("");

  if (!stock) {
    return <h2 className="text-red-500 text-center mt-10">Stock Not Found</h2>;
  }

  // Chart Data (adjusted to match 12 data points)
  const chartData = {
    labels: [
      "Mar 2023", "Apr 2023", "May 2023", "Jun 2023",
      "Jul 2023", "Aug 2023", "Sep 2023", "Oct 2023",
      "Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024"
    ],
    datasets: [
      {
        label: `${stock.name} Stock Price`,
        data: stockHistory[symbol] || [],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
        tension: 0.3
      }
    ]
  };

  // Handle Buy/Sell transaction
  const handleTransaction = (type) => {
    const totalCost = stock.livePrice * quantity;
    const stopLossText = stopLoss ? ` with Stop Loss at ₹${stopLoss}` : "";
    setTransactionMessage(
      `${type} ${quantity} shares of ${stock.name} at ₹${totalCost}${stopLossText}`
    );

    // Send transaction data to backend API
    axios
      .post("http://localhost:5000/api/stock-transaction", {
        stock_symbol: stock.symbol,
        stock_name: stock.name,
        quantity,
        stop_loss: stopLoss,
        total_cost: totalCost,
        transaction_type: type,
      })
      .then((response) => {
        console.log(response.data); // Successfully stored transaction in DB
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        {stock.name} ({stock.symbol})
      </h1>

      {/* Stock Price Chart */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Stock Price Trend (Last 12 Months)</h2>
        <Line data={chartData} />
      </div>

      {/* Buy/Sell Section */}
      <div className="mt-6 p-6 border rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-semibold">Buy/Sell Stocks</h2>
        <p className="text-lg text-gray-700">
          Live Price: <span className="font-bold text-green-600">₹{stock.livePrice}</span>
        </p>

        {/* Input Fields */}
        <div className="mt-4 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="border p-2 w-24 text-center rounded-md"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => handleTransaction("Buy")}
          >
            Buy
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => handleTransaction("Sell")}
          >
            Sell
          </button>
        </div>

        {/* Stop Loss Input */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium">Set Stop Loss (Optional)</label>
          <input
            type="number"
            min="1"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            className="border p-2 w-32 text-center rounded-md mt-1"
            placeholder="Enter Stop Loss"
          />
        </div>

        {/* Transaction Message */}
        {transactionMessage && (
          <p className="mt-4 text-gray-700">{transactionMessage}</p>
        )}
      </div>
    </div>
  );
};

export default StockDetail;
