import App from "./App";
import Gallery from "./page/Gallery";
import Splash from "./page/Splash";
import Home from "./page/Home";
import ChatRoom from "./page/ChatRoom";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Splash /> },
      { path: "home", element: <Home /> },
      { path: "gallery", element: <Gallery /> },
      { path: "chat", element: <ChatRoom /> },
    ],
  },
]);
