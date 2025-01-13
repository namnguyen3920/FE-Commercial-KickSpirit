
import {Header, Footer} from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
        <header className="sticky w-full top-0 z-50">
          <Header/>
        </header>
        <main className="flex-grow p-4">
          <Outlet/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
