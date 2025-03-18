import { useParams, useNavigate } from "react-router-dom";

const bondsData = [
  { id: 1, name: "Gov Bond A", type: "Government", interestRate: 5.2, investment: 10000, maturity: 5 },
  { id: 2, name: "Corp Bond B", type: "Corporate", interestRate: 6.5, investment: 15000, maturity: 7 },
  { id: 3, name: "Infra Bond C", type: "Infrastructure", interestRate: 4.8, investment: 12000, maturity: 6 },
  { id: 4, name: "Green Bond D", type: "Green Energy", interestRate: 5.7, investment: 11000, maturity: 4 },
  { id: 5, name: "Bank Bond E", type: "Banking", interestRate: 6.2, investment: 13000, maturity: 8 },
  { id: 6, name: "Tech Bond F", type: "Tech Sector", interestRate: 7.0, investment: 14000, maturity: 10 },
];

export default function BondDetail() {
  const { id } = useParams();
  const bond = bondsData.find((b) => b.id === Number(id));
  const navigate = useNavigate();

  if (!bond) {
    return <div className="text-center text-red-500 text-lg">Bond not found.</div>;
  }

  // Estimated Profit Calculation
  const estimatedProfit = (bond.investment * bond.interestRate * bond.maturity) / 100;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-semibold">{bond.name}</h2>
      <p className="text-gray-600">{bond.type} Bond</p>
      <p className="mt-2">Investment: ₹{bond.investment.toLocaleString()}</p>
      <p>Interest Rate: {bond.interestRate}%</p>
      <p>Maturity: {bond.maturity} years</p>

      {/* Estimated Profit Card */}
      <div className="bg-gray-100 p-4 mt-4 rounded-lg">
        <h3 className="text-lg font-semibold">Estimated Profit</h3>
        <p className="text-green-600 text-xl font-bold">₹{estimatedProfit.toLocaleString()}</p>
      </div>

      {/* Purchase Bond Button */}
      <button
        onClick={() => alert(`You have purchased ${bond.name}!`)}
        className="w-full bg-green-500 text-white p-2 mt-4 rounded-lg hover:bg-green-600 transition"
      >
        Purchase Bond
      </button>

      <button
        onClick={() => navigate("/bonds")}
        className="w-full bg-gray-300 text-black p-2 mt-2 rounded-lg hover:bg-gray-400 transition"
      >
        Back to Bonds
      </button>
    </div>
  );
}