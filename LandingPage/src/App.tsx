// src/App.tsx
import Chatbot from "./components/Chatbot";
import LandingPage  from "./components/LandingPage";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
      <Chatbot/>
    </div>
  );
};

export default App;