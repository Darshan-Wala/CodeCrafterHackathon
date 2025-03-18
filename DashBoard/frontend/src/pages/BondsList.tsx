import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BondsList = () => {
  const navigate = useNavigate();
  
  const bonds = [
    { id: 1, name: "Gov Bond A", type: "Government", interestRate: 5, maturityDate: "2027-12-31" },
    { id: 2, name: "Corp Bond B", type: "Corporate", interestRate: 6.2, maturityDate: "2029-08-15" },
    { id: 3, name: "Infra Bond C", type: "Infrastructure", interestRate: 4.8, maturityDate: "2030-05-20" },
    { id: 4, name: "Green Bond D", type: "Green Energy", interestRate: 7.1, maturityDate: "2028-06-10" },
    { id: 5, name: "Bank Bond E", type: "Banking", interestRate: 5.5, maturityDate: "2031-02-18" },
    { id: 6, name: "Tech Bond F", type: "Tech Sector", interestRate: 6.8, maturityDate: "2032-09-30" }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Available Bonds</h2>

      <div className="grid grid-cols-3 gap-6">
        {bonds.map((bond) => (
          <div 
            key={bond.id} 
            className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition"
            onClick={() => navigate(`/bond/${bond.id}`)}
          >
            <h3 className="text-lg font-semibold">{bond.name}</h3>
            <p className="text-gray-600">{bond.type}</p>
            <p className="text-blue-600 font-medium">Interest: {bond.interestRate}%</p>
            <p className="text-gray-500">Maturity: {bond.maturityDate}</p>
          </div>
        ))}
      </div>

      {/* Button to Add a Bond */}
      
    </div>
  );
};

export default BondsList;