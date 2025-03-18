import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import Badge from "../ui/badge/Badge";
import axios from 'axios';

interface Transaction {
  id: number;
  name: string;
  variants: string; // "Stock" or "Bond"
  category: string; // "Stocks" or "Bonds"
  price: string;
  image: string;
  status: "Delivered" | "Pending" | "Canceled";
}

export default function RecentOrders() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Dummy data representing stocks and bonds transactions
  const dummyData: Transaction[] = [
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

  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions")
      .then(response => {
         console.log("Fetched transactions:", response.data);
         if(response.data && response.data.length > 0) {
           setTransactions(response.data);
         } else {
           setTransactions(dummyData);
         }
      })
      .catch(error => {
         console.error("Error fetching transactions", error);
         setTransactions(dummyData);
      });
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Transactions
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Transaction
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Category
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Price
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-3 text-center">
                  No transactions found.
                </TableCell>
              </TableRow>
            ) : (
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                        <img src={transaction.image} className="h-[50px] w-[50px]" alt={transaction.name} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {transaction.name}
                        </p>
                        <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                          {transaction.variants}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {transaction.category}
                  </TableCell>
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {transaction.price}
                  </TableCell>
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <Badge size="sm" color={transaction.status === "Delivered" ? "success" : transaction.status === "Pending" ? "warning" : "error"}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
