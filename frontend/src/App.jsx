import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

function App() {
  const { data: session, isPending } = authClient.useSession();

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

  const handleSignOut = async () => {
    await authClient.signOut();
  };

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

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-bg">
      <Sidebar session={session} onSignOut={handleSignOut} />
      <div className="flex-1 h-full overflow-y-auto p-6 flex flex-col items-start space-y-6">
        <SearchBar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;