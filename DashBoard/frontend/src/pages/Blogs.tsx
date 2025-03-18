import React from "react";
import ComponentCard from "../components/common/ComponentCard";

const Blogs: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        📖 Investment Blogs
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Stay updated with the latest investment trends in India.
      </p>

      <ComponentCard title="Stock Market Basics for Indian Investors" desc="A beginner-friendly guide to stock market investing in India.">
        <p className="text-gray-700 dark:text-gray-300">
          Learn how the Indian stock market works, key terminologies, and how to start investing in stocks through NSE and BSE.
        </p>
      </ComponentCard>

      <ComponentCard title="Top 5 Mutual Funds for Indian Investors in 2025" desc="Best-performing mutual funds based on risk and return.">
        <p className="text-gray-700 dark:text-gray-300">
          Discover the best mutual funds in India that offer high returns with managed risk. A comparison of ELSS, debt funds, and hybrid funds.
        </p>
      </ComponentCard>

      <ComponentCard title="Tax-Saving Investment Options in India" desc="Maximize savings under Section 80C of the Income Tax Act.">
        <p className="text-gray-700 dark:text-gray-300">
          Explore tax-saving investments like PPF, ELSS, NPS, and FD that help you reduce taxable income while growing wealth.
        </p>
      </ComponentCard>
    </div>
  );
};

export default Blogs;
