import React, { useState, useEffect } from "react";

interface InsurancePlan {
  company: string;
  type: string;
  age_range: [number, number];
  location: string;
  features: string[];
  url: string;
  price: string;
  premiumDueDate: string;
  purchaseDate: string;
}

const Insurance = () => {
  const [selectedPlan, setSelectedPlan] = useState<InsurancePlan | null>(null);

  // Dynamically load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded successfully.");
    script.onerror = () =>
      console.error("Failed to load Razorpay script.");
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_lzy7Z3rYGMLviU", // Replace with your API Key ID
      amount: "10000", // Amount in paise (10000 paise = ₹100)
      currency: "INR",
      name: "Your Website",
      description: "Test Transaction",
      image: "https://your-logo-url.com", // Optional: your logo URL
      handler: function (response: any) {
        alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "testuser@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    // Check if Razorpay script is loaded
    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert("Razorpay SDK failed to load. Are you online?");
    }
  };

  const insuranceData: InsurancePlan[] = [
    {
      company: "LIC",
      type: "Life Insurance",
      age_range: [18, 65],
      location: "India",
      features: ["Term Life", "Whole Life"],
      url: "https://www.licindia.in/",
      price: "₹10,000/year",
      premiumDueDate: "15th June 2025",
      purchaseDate: "12th June 2024",
    },
    {
      company: "ICICI Lombard",
      type: "Health Insurance",
      age_range: [18, 70],
      location: "India",
      features: ["Individual Health", "Family Health"],
      url: "https://www.icicilombard.com/",
      price: "₹12,500/year",
      premiumDueDate: "20th July 2025",
      purchaseDate: "18th July 2024",
    },
    {
      company: "HDFC Life",
      type: "Life Insurance",
      age_range: [18, 60],
      location: "India",
      features: ["Term Life", "Endowment"],
      url: "https://www.hdfclife.com/",
      price: "₹15,000/year",
      premiumDueDate: "10th August 2025",
      purchaseDate: "7th August 2024",
    },
    {
      company: "Reliance General Insurance",
      type: "Motor Insurance",
      age_range: [18, 80],
      location: "India",
      features: ["Third Party", "Comprehensive"],
      url: "https://www.reliancegeneral.co.in/",
      price: "₹8,000/year",
      premiumDueDate: "5th September 2025",
      purchaseDate: "3rd September 2024",
    },
    {
      company: "Bajaj Allianz",
      type: "Health Insurance",
      age_range: [18, 75],
      location: "India",
      features: ["Individual Health", "Family Floater"],
      url: "https://www.bajajallianz.co.in/",
      price: "₹13,000/year",
      premiumDueDate: "22nd October 2025",
      purchaseDate: "20th October 2024",
    },
    {
      company: "SBI Life Insurance",
      type: "Life Insurance",
      age_range: [18, 60],
      location: "India",
      features: ["Term Life", "Pension"],
      url: "https://www.sbilife.co.in/",
      price: "₹9,500/year",
      premiumDueDate: "18th November 2025",
      purchaseDate: "15th November 2024",
    },
    {
      company: "New India Assurance",
      type: "General Insurance",
      age_range: [18, 75],
      location: "India",
      features: ["Fire", "Marine", "Travel"],
      url: "https://www.newindiaassurance.co.in/",
      price: "₹7,500/year",
      premiumDueDate: "30th December 2025",
      purchaseDate: "27th December 2024",
    },
    {
      company: "Aditya Birla Health Insurance",
      type: "Health Insurance",
      age_range: [18, 65],
      location: "India",
      features: ["Individual Health", "Family Floater", "Critical Illness"],
      url: "https://www.adityabirlacapital.com/healthinsurance/",
      price: "₹11,000/year",
      premiumDueDate: "12th January 2026",
      purchaseDate: "10th January 2025",
    },
    {
      company: "Star Health Insurance",
      type: "Health Insurance",
      age_range: [18, 75],
      location: "India",
      features: ["Senior Citizen Health", "Family Health", "Accident Care"],
      url: "https://www.starhealth.in/",
      price: "₹14,000/year",
      premiumDueDate: "5th March 2026",
      purchaseDate: "2nd March 2025",
    },
    {
      company: "Tata AIG General Insurance",
      type: "Travel Insurance",
      age_range: [0, 80],
      location: "India",
      features: ["Domestic", "International", "Senior Citizen"],
      url: "https://www.tataaig.com/travel-insurance",
      price: "₹6,000/year",
      premiumDueDate: "25th April 2026",
      purchaseDate: "22nd April 2025",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Insurance Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insuranceData.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{plan.company}</h3>
            <p className="text-sm text-gray-600">{plan.type}</p>
            <p className="text-xs text-gray-500">
              Age: {plan.age_range[0]} - {plan.age_range[1]}
            </p>
            <p className="text-sm font-semibold mt-2">Features:</p>
            <ul className="text-xs text-gray-700 list-disc pl-4">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between">
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Visit Website
              </a>
              <button
                onClick={() => setSelectedPlan(plan)}
                className="text-white bg-blue-500 hover:bg-blue-700 font-medium py-1 px-3 rounded"
              >
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Insurance Details */}
      {selectedPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-2">
              {selectedPlan.company} - {selectedPlan.type}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Location:</strong> {selectedPlan.location}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Price:</strong> {selectedPlan.price}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Premium Due Date:</strong> {selectedPlan.premiumDueDate}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Purchase Date:</strong> {selectedPlan.purchaseDate}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Coverage Duration:</strong> 1 Year
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Claim Process:</strong> Online & Offline
            </p>
            <button
              className="w-full mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded"
              onClick={handlePayment}
            >
              Pay Premium
            </button>
            <button
              className="w-full mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 rounded"
              onClick={() => setSelectedPlan(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Insurance;
