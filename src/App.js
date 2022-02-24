import { useEffect } from "react";
import Card from "./components/card/card";
import Layout from "./components/layout/layout";
import Idcard from "./containers/idcard";
import PlanSummary from "./containers/plan-summary";

const App = () => {
  useEffect(() => {
  }, [])
  return (
    <Layout>
      <Card>
        <PlanSummary />
      </Card>
      <Card>
        <Idcard/>
      </Card>
    </Layout>
  );
}

export default App;
