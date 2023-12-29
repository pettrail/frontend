import App from "./App";
import Gallery from "./page/Gallery";
import Home from "./page/Home";
import { createBrowserRouter } from "react-router-dom";
import Memorial from "./page/Memorial";
import SignIn from "./page/SignIn";
import ChatRoom from "./page/ChatRoom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "gallery", element: <Gallery /> },
      { path: "chat", element: <ChatRoom /> },
      { path: "memorial", element: <Memorial /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
]);
