import React from "react";
import {
  BreakFast,
  ConfimOrder,
  Dinner,
  Finished,
  Hero,
  ItemsDescription,
  Login,
  Lunch,
  Menu,
  OrderItem,
  PrivateRoute,
  Review,
  Signup,
} from "./container";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BreakFast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/items/:itemsId" element={<ItemsDescription />} />
        <Route element={<PrivateRoute />}>
          <Route path="/orderPlace" element={<OrderItem />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cofirmOrder" element={<ConfimOrder />} />
        <Route path="/finish" element={<Finished />} />
      </Routes>
    </>
  );
};

export default App;
