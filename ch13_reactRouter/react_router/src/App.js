import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navbar />,
      errorElement: <ErrorPage/>,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "items",
          // element: <Items />,
          children: [
            { index: true, element: <Items /> },
            { path: ":id", element: <ItemDetails /> },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
