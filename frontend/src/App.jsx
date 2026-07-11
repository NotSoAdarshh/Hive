import { React, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Sidebar from "./Components/sidebar";
import SearchBar from "./Components/searchBar";
import NotificationComponent from "./Components/notificationComponent";
import LoginPage from "./Components/loginPage";
import NotificationPage from "./Components/NotificationPage";
import ToolsPage from "./Components/ToolsPage";
import ReportPage from "./Components/report";
import DashBoard from "./Components/DashBoard";
import HistoryPage from "./Components/HistoryPage";
import ComponentPage from "./Components/ComponentsPage";

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-bg">
      
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full relative">
        
        <div className="w-full shrink-0 p-6 pb-4 bg-bg z-10 border-b border-gray-800/50">
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <Outlet context={{ searchQuery }} />
        </div>
        
      </div>
    </div>
  );
}

function App() {
  const [isLogin, setisNotLogin] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <DashBoard /> },
        { path: "/reports", element: <ReportPage /> },
        { path: "/history", element: <HistoryPage /> },
        { path: "/tools", element: <ToolsPage /> },
        { path: "/notifications", element: <NotificationPage /> },
        { path: "/components", element: <ComponentPage /> },
      ],
    },
  ]);

  return (
    <>
      {!isLogin ? <LoginPage /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;