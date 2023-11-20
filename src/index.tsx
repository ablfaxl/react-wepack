import ReactDOM from "react-dom/client";
import { App } from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
