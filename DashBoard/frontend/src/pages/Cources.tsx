import React from "react";


const courses = [
  {
    title: "Stock Market Investing for Beginners",
    price: "₹1,999",
    image: "/images/cources/stock.png", // Placeholder image path
  },
  {
    title: "Mutual Fund Masterclass",
    price: "₹2,499",
    image: "/images/cources/mutual.png",
  },
  {
    title: "Personal Finance & Tax Planning",
    price: "₹1,799",
    image: "/images/cources/tax.png",
  },
  {
    title: "Real Estate Investing in India",
    price: "₹3,299",
    image: "/images/cources/real.png",
  },
  {
    title: "Cryptocurrency & Blockchain Basics",
    price: "₹2,999",
    image: "/images/cources/CB.png",
  },
  {
    title: "Retirement Planning & Wealth Growth",
    price: "₹2,199",
    image: "/images/cources/retire.png",
  },
];

const Courses: React.FC = () => {
  return (
    <div className="p-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        🎓 Investment Courses
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Master investment strategies and financial planning in India.
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03] shadow-md overflow-hidden"
          >
            {/* Course Thumbnail */}
            <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Price: <span className="font-semibold">{course.price}</span>
              </p>

              {/* Buy Now Button */}
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Unlock Free Trial!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
