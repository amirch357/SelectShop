import logo from './logo.svg';
import './App.css';
import { Header } from './Layout/Header/Header';
import { Home } from './Pages/Home/Home';
import { MostPopular } from './Pages/MostPopular/MostPopular';
import { FeaturedProduct } from './Pages/FeaturedProduct/FeaturedProduct';
import { Customer } from './Pages/Customer/Customer';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
<>
<Header />
<Home />
<MostPopular />
<FeaturedProduct />
<Customer />
<Footer />
</>
  );
}

export default App;
