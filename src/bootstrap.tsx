import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles";

const rootNode = document.getElementById("root");
if (!rootNode) throw new Error("Root Node Not Found");
const root = ReactDOM.createRoot(rootNode);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
