import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/ContactusPage";
import PlacesPage from "./pages/PlacesPage";
import PlaceDetail from "./pages/PlaceDetail";
import "./main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: "/", element: <Home /> },
      { path: "about", element: <AboutPage /> },
      {path: "places", element: <PlacesPage/>},
      { path: "contact-us", element: <ContactusPage /> },
      {path: '/places/:id', element : <PlaceDetail/>},
      { path: "*", element: <div>404 - Page not found</div> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
