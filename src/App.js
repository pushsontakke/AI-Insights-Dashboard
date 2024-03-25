import CategoryDistribution from "./components/CategoryDistribution";
import ResponseTime from "./components/ResponseTime";
import UserSatisfaction from "./components/UserSatisfaction";
import "./App.css";
import UserStatistics from "./components/UserStatistics";

function App() {
  return (
    <div className="App">
      <h1>AI Insights</h1>
      <div className="margin">
        <CategoryDistribution />
      </div>
      <div className="margin">
        <ResponseTime />
      </div>
      <div className="margin">
        <UserSatisfaction />
      </div>
      <div className="margin">
        <UserStatistics />
      </div>
    </div>
  );
}

export default App;
