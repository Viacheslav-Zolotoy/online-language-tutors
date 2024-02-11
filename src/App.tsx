import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home";
import Teachers from "./page/Teachers";
import Favorites from "./page/Favorites";
import NotFoundPage from "./page/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { getAllDocuments } from "./Draft";
// import { getTeachers } from './services/teacherService';
// const teach: any = getTeachers().then((app) => console.log(app));

function App() {
  const getData = async () => {
    const data = await getAllDocuments();
  };
  getData();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
