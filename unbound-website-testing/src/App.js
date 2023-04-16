import "./App.css";
import { useState } from "react";
import Toolbar from "./Toolbar";

function App() {
  const [accounts, setAccounts] = useState([]);

  return <Toolbar />;
}

export default App;
