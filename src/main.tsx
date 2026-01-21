import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Moviedetail from "./movieDetail.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./header.tsx";

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/movies/:movieId", Component: Moviedetail },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header>
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </Header>
  </StrictMode>,
);
