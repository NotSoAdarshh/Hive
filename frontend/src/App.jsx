import React from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import NotificationComponent from './Components/notificationComponent';
import LoginPage from './Components/loginPage';

function App() {
  return (
    <>
      <LoginPage />
      {/* <div className="flex w-screen h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col items-start p-6 bg-[#0a0a0a] overflow-y-auto">
          <SearchBar />

        </div>
      </div> */}
    </>
  );
}
export default App