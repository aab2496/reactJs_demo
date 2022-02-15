import { useEffect } from "react";
import PlanSummary from "./containers/plan-summary";
import { login } from "./services/auth";
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
