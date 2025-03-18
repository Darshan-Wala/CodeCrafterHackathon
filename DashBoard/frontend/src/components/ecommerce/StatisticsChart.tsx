import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";

// Define the Transaction interface with an added 'month' field.
interface Transaction {
  id: number;
  name: string;
  type: "Stock" | "Bond";
  category: "Stocks" | "Bonds";
  price: string;
  status: "Delivered" | "Pending" | "Canceled";
  month: number; // Month number (1 = Jan, …, 12 = Dec)
}

export default function StatisticsChart() {
  // Dummy transactions – same as in RecentOrders.tsx but with a 'month' field added.
  const dummyData: Transaction[] = [
    { id: 1, name: "Reliance Industries", type: "Stock", category: "Stocks", price: "₹2500", status: "Delivered", month: 1 },
    { id: 2, name: "Tata Consultancy Services", type: "Stock", category: "Stocks", price: "₹3600", status: "Delivered", month: 2 },
    { id: 3, name: "Infosys", type: "Stock", category: "Stocks", price: "₹1500", status: "Pending", month: 3 },
    { id: 4, name: "Government Bond", type: "Bond", category: "Bonds", price: "₹1000", status: "Delivered", month: 4 },
    { id: 5, name: "Corporate Bond XYZ", type: "Bond", category: "Bonds", price: "₹2000", status: "Canceled", month: 5 },
  ];

  // Define month names for x-axis categories.
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Initialize 12-element arrays for profit and loss (one entry per month).
  const profitArray = new Array(12).fill(0);
  const lossArray = new Array(12).fill(0);

  // Calculate profit and loss from dummyData.
  dummyData.forEach((tx) => {
    // Remove any currency symbol and commas, then parse as a float.
    const priceNum = parseFloat(tx.price.replace(/[^0-9.]/g, ""));
    const index = tx.month - 1; // Convert month to array index.
    if (tx.status === "Delivered") {
      profitArray[index] += priceNum;
    } else if (tx.status === "Pending" || tx.status === "Canceled") {
      lossArray[index] += priceNum;
    }
  });

  // Define the series for the chart.
  const [series] = useState([
    { name: "Profit", data: profitArray },
    { name: "Loss", data: lossArray },
  ]);
  const [categories] = useState(monthNames);

  // Chart options
  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF", "#9CB9FF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      curve: "straight",
      width: [2, 2],
    },
    fill: {
      type: "gradient",
      gradient: { opacityFrom: 0.55, opacityTo: 0 },
    },
    markers: {
      size: 0,
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 6 },
    },
    grid: {
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: true, x: { format: "dd MMM yyyy" } },
    xaxis: {
      type: "category",
      categories: categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: { style: { fontSize: "12px", colors: ["#6B7280"] } },
      title: { text: "", style: { fontSize: "0px" } },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Profit and Loss Statistics
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Your per month Profit and Loss Stats appear here.
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <ChartTab />
        </div>
      </div>
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}
