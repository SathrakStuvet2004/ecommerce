import "./adminProducts.css";

type Product = {
  id: string;
  img: string;
  title: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  stock: number;
};

type AdminProductsProps = {
  product: Product;
};

export const AdminProducts = ({ product }: AdminProductsProps) => {
  return (
    <div className="adminProduct">

      <div className="productImage">
        <img
          src={product.img}
          alt={product.title}
          className="img"
        />
      </div>

      <div className="adminProductInfo">

        <div className="adminProductName">
          Name: {product.title}
        </div>

        <div className="adminProductBrand">
          Brand: {product.brand}
        </div>

        <div className="adminProductCategory">
          Category: {product.category}
        </div>

      </div>

      <div className="price">

        <div className="adminProductPrice">
          Price: ₹{product.price}
        </div>

        <div className="adminProductRating">
          Rating: {product.rating}
        </div>

        <div className="adminProductStock">
          Stock: {product.stock}
        </div>

      </div>
      <button className="adminProductEditButton">
        Edit
      </button>
    </div>
  );
};