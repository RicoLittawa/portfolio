import "./App.css";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
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
  return (
    <Routes>
      <Route path="" element={{}}></Route>
      <Route path="/contact" element={{ ContactPage }}></Route>
    </Routes>
  );
}
