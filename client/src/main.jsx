import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react"
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-lg7bfxkg6ao0h4i2.us.auth0.com"
    clientId="QriJ9ao03J2mhcqIRV9Qm86fS7Vmc32p"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
    audience= "http://localhost:8000"
    scope = "openid profile email"
    >
        <App />
    </Auth0Provider>
  </React.StrictMode>
);
