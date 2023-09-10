import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import "./App.scss";
import OurStore from "./pages/Store.tsx/OurStore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="store" element={<OurStore />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// 4:06:49
