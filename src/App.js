import { useEffect } from "react";
import PageHeader from "./components/page-header";
import PlanSummary from "./containers/plan-summary";
import { getIdCard } from "./services/restClient";

const App = () => {
  useEffect(() => {
    getIdCard()
  })
  return (
    <div className="m-5">
    <PageHeader/>
      <PlanSummary/>
    </div>
  );
}

export default App;
