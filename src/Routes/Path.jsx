import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import Header from "../components/Header";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>}/>
                    </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;