
import {Header} from "./components";
import {Home} from "./pages";
function App() {
  return (
    <div className="App">
      <header class="fixed w-full top-0 z-50">
        <Header/>
      </header>
      <main>
        <Home/>
      </main>
      
    </div>
  );
}

export default App;
