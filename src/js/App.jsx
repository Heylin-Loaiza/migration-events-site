import { createRoot } from "react-dom/client";
import { MainContent } from './components/react/MainContent';
import { Header } from "./components/react/Header";

const App = () => {
  return (
    <>
      <Header/>
      <MainContent />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
