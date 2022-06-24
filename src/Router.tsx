import { Routes, Route } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
    </Routes>
  );
}
