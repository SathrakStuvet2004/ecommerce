import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useUpdateHomeData } from "../hooks/hook";
import "./adminProducts.css";
import { toast } from "react-toastify";

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

  const [isEdit, setIsEdit] = useState(false);

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("")
  // const [products, setProducts] = useState({
  //   img: ""
  // })
  //now we use products.img and setProducts.img

  const { mutate: updateHomeData } = useUpdateHomeData();

  function edit() {
    setIsEdit(true);

    setImg(product.img);
    setTitle(product.title);
    setBrand(product.brand);
    setCategory(product.category);
    setPrice(product.price.toString());
    setRating(product.rating.toString());
    setStock(product.stock.toString());
  }

  function modifyHomeProduct(e: any) {
    e.preventDefault();

    setIsEdit(true);

    const updatedProduct = {
      img,
      title,
      brand,
      category,
      price: Number(price),
      rating: Number(rating),
      stock: Number(stock),
    };

    updateHomeData({
      id: product.id,
      updatedData: updatedProduct,
    });
    toast.success("Product modified successfully");

    setImg("");
    setTitle("");
    setBrand("");
    setCategory("");
    setPrice("");
    setRating("");
    setStock("");

    setIsEdit(false);
  }

  return (
    <>
      <div className="adminProduct">
        <Box sx={{ width: "100%" }}>
          <div className="productImage">
            {isEdit ? (
              <form>
                <TextField
                  label="image Link"
                  variant="standard"
                  value={img}
                  type="text"
                  autoComplete="off"
                  onChange={(e) => setImg(e.target.value)}
                />
              </form>
            ) : (<img
              src={product.img}
              alt={product.title}
              className="img"
            />)}

          </div>

          <div className="adminProductInfo">

            <div className="adminProductName">
              {isEdit ? (
                <form>
                  <TextField
                    label="Product Title"
                    variant="standard"
                    value={title}
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </form>
              ) : (<p>Name: {product.title}</p>)}
            </div>

            <div className="adminProductBrand">
              {isEdit ? (<form>
                <TextField
                  label="Product Brand"
                  variant="standard"
                  value={brand}
                  type="text"
                  autoComplete="off"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </form>) : (<p>Brand: {product.brand}</p>)}
            </div>

            <div className="adminProductCategory">
              {isEdit ? (<form>
                <TextField
                  label="Product Category"
                  variant="standard"
                  value={category}
                  type="text"
                  autoComplete="off"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </form>) : (<p> Category: {product.category}</p>)}
            </div>

          </div>

          <div className="price">

            <div className="adminProductPrice">
              {isEdit ? (<form>
                <TextField
                  label="Price"
                  variant="standard"
                  value={price}
                  type="number"
                  autoComplete="off"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </form>) : (<p>Price: ₹{product.price}</p>)}
            </div>

            <div className="adminProductRating">
              {isEdit ? (<form>
                <TextField
                  label=" Rating"
                  variant="standard"
                  value={rating}
                  type="number"
                  autoComplete="off"
                  onChange={(e) => setRating(e.target.value)}
                />
              </form>) : (<p>Rating: {product.rating}</p>)}
            </div>

            <div className="adminProductStock">
              {isEdit ? (<form>
                <TextField
                  label="Stock Count"
                  variant="standard"
                  value={stock}
                  type="number"
                  autoComplete="off"
                  onChange={(e) => setStock(e.target.value)}
                />
              </form>) : (<p> Stock: {product.stock}</p>)}
            </div>

          </div>
        </Box>

        {!isEdit ?
          <button className="adminProductEditButton"
            onClick={edit}>
            Edit
          </button> : (
            <button className="adminProductSaveButton"
              onClick={modifyHomeProduct}>
              save
            </button>
          )}
        {isEdit &&
          <button className="adminProductCancelButton"
            onClick={() => { setIsEdit(false) }}>
            cancel
          </button>
        }
      </div >
    </>
  );
};