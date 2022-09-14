import Pages from "./pages/Pages";
import Category from "./components/Category";
import Logo from "./components/Logo";
import Search from "./components/Search";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <div className="flex-container">
      <Logo />
      <Category />
      <Search />
      </div>
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
