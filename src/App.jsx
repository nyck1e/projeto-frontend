import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";

const App = () => {
  return ( 
    <>
      <HomePage/>
      <ProductListingPage/>
      <Header/>
      <Footer/>
    </>
   );
}
 
export default App;