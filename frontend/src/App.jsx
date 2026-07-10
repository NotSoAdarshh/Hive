import { React, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
function App() {
  const [isLogin, setisNotLogin] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/reports",
      element: <ReportPage />,
    },
    {
      path: "/history",
      element: <HistoryPage />,
    },
    {
      path: "/tools",
      element: <ToolsPage />,
    },
    {
      path: "/notifications",
      element: <NotificationPage />,
    },
    {
      path: "/components",
      element: <ComponentPage />,
    },
  ]);
  return (
    <>
      {!isLogin ? (
        <LoginPage />
      ) : (
        <div className="flex w-screen h-screen overflow-hidden bg-bg ">
          <Sidebar />
          <div className="flex-1 h-full overflow-y-auto p-6 flex flex-col items-start space-y-6">
            <SearchBar />
            <RouterProvider router={router} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
