import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { wrapper } from "./styles/reset.module.css";

function App() {
  return (
    <div className={wrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;