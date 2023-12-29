import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full">
      <main className="h-full mx-auto mobile:max-w-[500px] border bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
