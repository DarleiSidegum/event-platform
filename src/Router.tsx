import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import { Login } from "./pages/Login";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />}></Route>
      <Route path="/event" element={<Event />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/event/lesson/:slug" element={<Event />}></Route>
    </Routes>
  );
}
