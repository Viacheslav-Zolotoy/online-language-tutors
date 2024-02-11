import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <h1>Learn Lingo</h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;