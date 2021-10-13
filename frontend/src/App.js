import { CarInventory, ErrorTracker, SellForm } from "components";
import RecordTable from "components/RecordTable";

function App() {
  return (
    <div className="App">
      <ErrorTracker />
      <CarInventory />
      <SellForm />
      <RecordTable />
    </div>
  );
}

export default App;
