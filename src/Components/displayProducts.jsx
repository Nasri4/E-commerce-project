const DisplayProducts = ({products}) => {
    return <div>
        <div className="w-[300px] border-2 border-primaryColor p-2 ml-10">
            <img className="w-[300px]" src={products.image} alt="" />
            <div className="flex justify-between text-3xl font-semibold px-2">
                <h1>{products.title}</h1>
                <h1>{products.price}</h1>
            </div>
            <button className="bg-primaryColor px-20 ml-2  mt-5 py-2 text-textColor">Add to Cart</button>
        </div>
    </div>
}

export default DisplayProducts