import "./App.css";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import Pallette from "./assets/palette.png";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "*",
    Component: Root,
  },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

function Root() {
  return;
  <Routes>
    <Route path="" element={{}}></Route>
  </Routes>;
}
