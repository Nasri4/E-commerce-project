import Data from "./Data"
import DisplayProducts from "./displayProducts"

function ProductList(){
    return <div className="flex flex-wrap gap-16">
        {
            Data.map((item) => {
                return <DisplayProducts products={item} />
            })
        }
    </div>
}

export default ProductList