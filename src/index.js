import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { BookProvider } from "./contexts/BookContext";
import { ProfileProvider } from "./contexts/ProfileContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <BookProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </BookProvider>
    </BrowserRouter>
  </StrictMode>
);
