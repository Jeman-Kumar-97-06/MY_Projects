import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
        <ToggleTheme/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
