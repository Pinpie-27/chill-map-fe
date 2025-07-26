import ReactDOM from "react-dom/client";
import React from "react";
import "../src/styles/index.css";
import "@radix-ui/themes/styles.css"; 

import { Theme } from "@radix-ui/themes"; 
import AppRouter from "./app/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="light">
      {" "}
      <AppRouter />
    </Theme>
  </React.StrictMode>
);
