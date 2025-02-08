import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar"; // Import the Sidebar component

const Products = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar /> {/* Add the Sidebar */}
                <div className="flex-grow pt-24 pl-32 ml-64"> {/* Adjust padding and margin to accommodate the sidebar */}
                    <ProductList />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;