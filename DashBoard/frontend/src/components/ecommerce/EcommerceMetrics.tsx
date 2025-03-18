import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

// Transaction interface for dummy profit/loss calculation.
interface Transaction {
  id: number;
  name: string;
  variants: string; // "Stock" or "Bond"
  category: string; // "Stocks" or "Bonds"
  price: string;
  status: "Delivered" | "Pending" | "Canceled";
  image: string;
}

export default function EcommerceMetrics() {
  const [totalInvestments, setTotalInvestments] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);

  // Fetch total investments from the backend.
  useEffect(() => {
    axios.get("http://localhost:5000/api/total-investments")
      .then(response => {
        // Assume response.data.totalInvestments is a number.
        setTotalInvestments(response.data.totalInvestments);
      })
      .catch(error => {
        console.error("Error fetching total investments:", error);
      });
  }, []);

  // Dummy transactions data for calculating profit/loss.
  const dummyTransactions: Transaction[] = [
    {
      id: 1,
      name: "Reliance Industries",
      variants: "Stock",
      category: "Stocks",
      price: "₹2500",
      status: "Delivered",
      image: "/images/stock/reliance.jpg",
    },
    {
      id: 2,
      name: "Tata Consultancy Services",
      variants: "Stock",
      category: "Stocks",
      price: "₹3600",
      status: "Delivered",
      image: "/images/stock/tcs.jpg",
    },
    {
      id: 3,
      name: "Infosys",
      variants: "Stock",
      category: "Stocks",
      price: "₹1500",
      status: "Pending",
      image: "/images/stock/infy.jpg",
    },
    {
      id: 4,
      name: "Government Bond",
      variants: "Bond",
      category: "Bonds",
      price: "₹1000",
      status: "Delivered",
      image: "/images/bond/govt.jpg",
    },
    {
      id: 5,
      name: "Corporate Bond XYZ",
      variants: "Bond",
      category: "Bonds",
      price: "₹2000",
      status: "Canceled",
      image: "/images/bond/corp.jpg",
    },
  ];

  // Calculate profit and loss from dummy transactions.
  useEffect(() => {
    // Total profit from 'Delivered' transactions.
    const totalProfit = dummyTransactions
      .filter(tx => tx.status === "Delivered")
      .reduce((sum, tx) => sum + parseFloat(tx.price.replace(/[^0-9.]/g, "")), 0);

    // Total loss from transactions that are 'Pending' or 'Canceled'.
    const totalLoss = dummyTransactions
      .filter(tx => tx.status !== "Delivered")
      .reduce((sum, tx) => sum + parseFloat(tx.price.replace(/[^0-9.]/g, "")), 0);

    // Net profit/loss calculated as (profit - loss)
    setProfitLoss(totalProfit - totalLoss);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Total Investments Card (unchanged) */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Investments
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              ₹{totalInvestments}
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* Profit / Loss Card (now showing rupee calculation) */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Profit / Loss
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              ₹{profitLoss}
            </h4>
          </div>
          <Badge color="error">
            <ArrowDownIcon />
            9.05%
          </Badge>
        </div>
      </div>
    </div>
  );
}
