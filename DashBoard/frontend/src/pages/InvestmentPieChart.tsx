import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Button from "../components/ui/button/Button";

const investmentPlans = {
  "Small Term": [
    { label: "Conservative", stocks: 30, bonds: 70 },
    { label: "Balanced", stocks: 50, bonds: 50 },
    { label: "Aggressive", stocks: 70, bonds: 30 },
    { label: "High Risk", stocks: 90, bonds: 10 },
  ],
  "Mid Term": [
    { label: "Conservative", stocks: 40, bonds: 60 },
    { label: "Balanced", stocks: 60, bonds: 40 },
    { label: "Aggressive", stocks: 80, bonds: 20 },
    { label: "High Risk", stocks: 95, bonds: 5 },
  ],
  "Long Term": [
    { label: "Conservative", stocks: 50, bonds: 50 },
    { label: "Balanced", stocks: 70, bonds: 30 },
    { label: "Aggressive", stocks: 85, bonds: 15 },
    { label: "High Risk", stocks: 98, bonds: 2 },
  ],
};

const COLORS = ["#0088FE", "#00C49F"];

export default function InvestmentPieChart() {
  const [selectedPlan, setSelectedPlan] = useState("Small Term");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelection = (plan: string, optionIndex: number) => {
    setSelectedPlan(plan);
    setSelectedOptions((prev) => {
      const newSelection = [...prev];
      const option = investmentPlans[plan][optionIndex];
      const existingIndex = newSelection.findIndex((o) => o.label === option.label);
      
      if (existingIndex !== -1) {
        newSelection.splice(existingIndex, 1); // Remove if already selected
      } else {
        newSelection.push(option);
      }
      return newSelection;
    });
  };

  const totalStocks = selectedOptions.reduce((sum, opt) => sum + opt.stocks, 0);
  const totalBonds = selectedOptions.reduce((sum, opt) => sum + opt.bonds, 0);
  const total = totalStocks + totalBonds;

  const chartData = total > 0 ? [
    { name: "Stocks", value: (totalStocks / total) * 100 },
    { name: "Bonds", value: (totalBonds / total) * 100 },
  ] : [];

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-xl font-bold">Investment Plans</h1>
      <div className="flex space-x-4">
        {Object.keys(investmentPlans).map((plan) => (
          <Button key={plan} onClick={() => setSelectedPlan(plan)}>{plan}</Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {investmentPlans[selectedPlan].map((option, index) => (
          <Button
            key={option.label}
            onClick={() => handleSelection(selectedPlan, index)}
            className={`px-4 py-2 ${selectedOptions.some((o) => o.label === option.label) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div className="w-full h-64 flex items-center justify-center">
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-lg font-semibold">Selected: {selectedPlan}</p>
    </div>
  );
}