import { createRoot } from "react-dom/client";
import { MainContent } from './components/react/MainContent';

const App = () => {
  return (
  <MainContent /> 
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);