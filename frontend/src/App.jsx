import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "./Components/loginPage";
import DashBoard from "./Components/DashBoard";
import InventoryPage from "./Components/InventoryPage";
import StoragePage from "./Components/StoragePage";
import HistoryPage from "./Components/HistoryPage";
import AdminPage from "./Components/AdminPage";
import Sidebar from "./Components/sidebar";
import { authClient } from "./lib/auth-client";
import { MemberProvider, useMember } from "./lib/MemberContext";

// ── Layout: renders inside RouterProvider so useLocation() works in Sidebar ──
function AppLayout({ session, onSignOut }) {
  const { member } = useMember();
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-bg">
      <Sidebar session={session} member={member} onSignOut={onSignOut} />
      <div className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

function Shell({ session }) {
  const { loading } = useMember();
  const handleSignOut = () => authClient.signOut();

  // Router must be created once — stable reference via useMemo pattern is fine
  // since session won't change while Shell is mounted
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout session={session} onSignOut={handleSignOut} />,
      children: [
        { index: true, element: <DashBoard /> },
        { path: "inventory", element: <InventoryPage /> },
        { path: "storage", element: <StoragePage /> },
        { path: "history", element: <HistoryPage /> },
        { path: "admin", element: <AdminPage /> },
      ],
    },
  ]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg text-fg font-mono">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
          <span className="text-xs tracking-widest uppercase text-fg/50">Loading profile...</span>
        </div>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

function App() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg text-fg font-mono">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
          <span className="text-xs tracking-widest uppercase text-fg/50">Verifying session...</span>
        </div>
      </div>
    );
  }

  if (!session) return <LoginPage />;

  return (
    <MemberProvider session={session}>
      <Shell session={session} />
    </MemberProvider>
  );
}

export default App;