import { useEffect } from "react";
import PlanSummary from "./containers/plan-summary";
import { getIdCard } from "./services/restClient";

const App = () => {
  useEffect(() => {
    getIdCard()
  })
  return (
    <>
      <PlanSummary/>
    </>
  );
}

export default App;
