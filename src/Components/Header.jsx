import { Link } from "react-router"

const Header =() => {
    return <div className="bg-primaryColor flex justify-between px-20 py-4 fixed w-full">
        <h1 className="text-3xl text-textColor">E-<span className="text-socondryColor">suuq</span> </h1>

        <ul className="flex gap-20 text-2xl text-textColor pt-2">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>

        <i className="fa-solid fa-cart-shopping text-textColor text-2xl pt-1"></i>
    </div>
}

export default Header