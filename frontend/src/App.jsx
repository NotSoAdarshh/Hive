import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useMemo } from "react";

import Sidebar from "./Components/sidebar";
import SearchBar from "./Components/searchBar";
import LoginPage from "./Components/loginPage";
import NotificationPage from "./Components/NotificationPage";
import ToolsPage from "./Components/ToolsPage";
import ReportPage from "./Components/report";
import DashBoard from "./Components/DashBoard";
import HistoryPage from "./Components/HistoryPage";
import ComponentPage from "./Components/ComponentsPage";
import { authClient } from "./lib/auth-client";

function Layout({ session, onSignOut }) {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-bg">
      <Sidebar session={session} onSignOut={onSignOut} />
      <div className="flex-1 h-full overflow-y-auto p-6 flex flex-col items-start space-y-6">
        <SearchBar />
        <Outlet /> 
      </div>
    </div>
  );
}

function App() {
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <Layout session={session} onSignOut={handleSignOut} />,
        children: [
          { index: true, element: <DashBoard /> },
          { path: "reports", element: <ReportPage /> },
          { path: "history", element: <HistoryPage /> },
          { path: "tools", element: <ToolsPage /> },
          { path: "notifications", element: <NotificationPage /> },
          { path: "components", element: <ComponentPage /> },
        ],
      },
    ]);
  }, [session]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg text-fg font-mono">
        Verifying session...
      </div>
    );
  }

  if (!session) {
    return <LoginPage />;
  }

  return <RouterProvider router={router} />;
}

export default App;