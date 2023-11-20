import "./styles.css";
import LOGO from "./logo.svg";
import IMAGE from "./react.png";
import { ClickCounter } from "./ClcikCounter";

export const App = () => {
  return (
    <div>
      <h1>
        Hello React - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <div className="image-contaier">
        {/* png image */}
        <img src={IMAGE} alt="React Logo" width={500} height={300} />
        {/* svg image */}
        <img src={LOGO} alt="React Logo" width={500} height={300} />
      </div>
      <ClickCounter />
    </div>
  );
};
