import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import axios from 'axios';

interface Transaction {
  id: number;
  stock_symbol: string;
  stock_name: string;
  quantity: number;
  stop_loss: number | null;
  total_cost: number;
  transaction_type: "Buy" | "Sell";
  created_at: string;
}

export default function RecentOrders() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/transactions")
      .then(response => {
         console.log("Fetched transactions:", response.data);
         if(response.data && response.data.length > 0) {
           setTransactions(response.data);
         } else {
           setTransactions([]);
         }
      })
      .catch(error => {
         console.error("Error fetching transactions", error);
         setTransactions([]);
      });
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Transactions
        </h3>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">ID</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">Stock Name</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">Symbol</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">Quantity</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">Stop Loss</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">Total Cost</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">Type</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start">Created At</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="py-3 text-center">
                  No transactions found.
                </TableCell>
              </TableRow>
            ) : (
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="py-3">{transaction.id}</TableCell>
                  <TableCell className="py-3">{transaction.stock_name}</TableCell>
                  <TableCell className="py-3">{transaction.stock_symbol}</TableCell>
                  <TableCell className="py-3">{transaction.quantity}</TableCell>
                  <TableCell className="py-3">
                    {transaction.stop_loss !== null ? transaction.stop_loss : 'N/A'}
                  </TableCell>
                  <TableCell className="py-3">₹{transaction.total_cost}</TableCell>
                  <TableCell className="py-3">{transaction.transaction_type}</TableCell>
                  <TableCell className="py-3">{new Date(transaction.created_at).toLocaleString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
