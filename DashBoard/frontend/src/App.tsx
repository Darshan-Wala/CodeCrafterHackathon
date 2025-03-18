import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Shorts from "./components/Shorts";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Blogs from "./pages/Blogs";
import Courses from "./pages/Cources";
import Stocks from "./pages/Stocks";
import StockDetail from "./pages/StockDetail"
import Insurance from "./pages/InsurancePlan";
import InvestmentPieChart from "./pages/InvestmentPieChart";
import BondTable from "./pages/BondsList"
import BondDetail from "./pages/BondDetail";


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout - Includes Sidebar & Navbar */}
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />

          {/* Other Pages */}
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blank" element={<Blank />} />

          {/* Forms */}
          <Route path="/form-elements" element={<FormElements />} />

          {/* Tables */}
          <Route path="/basic-tables" element={<BasicTables />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/stock/:symbol" element={<StockDetail />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/suggest" element={<InvestmentPieChart />} />
          {/* <Route path="/bonds" element={<BondTable />} /> */}
          <Route path="/bonds" element={<BondTable />} />
          <Route path="/bond/:id" element={<BondDetail />} />

          {/* UI Elements */}
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/badge" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />

          {/* Charts */}
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/bar-chart" element={<BarChart />} />

          {/* Learn Section - Now Inside AppLayout */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/shorts" element={<Shorts />} />
        </Route>

        {/* Auth Layout - No Sidebar */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}