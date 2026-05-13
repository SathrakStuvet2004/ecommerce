import { useProducts, useAddProduct } from "../hooks/hook";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { toast } from "react-toastify";

import "./AddProducts.css"


export default function AddProducts() {

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");

  const { mutate: addPostProduct } = useAddProduct();

  const { data } = useProducts();

  function addProduct(e: any) {
    e.preventDefault();

    const oldProduct = data?.find(
      (item: any) =>
        item.title === title &&
        item.price === Number(price) &&
        item.category === category &&
        item.brand === brand
    );

    if (oldProduct) {
      toast.warning(
        "This product is Already in our Store"
      );
    } else {
      const newProduct = {
        img,
        title,
        price,
        category,
        brand,
        rating,
        stock,
      };

      addPostProduct(newProduct);

      toast.success(
        "Product Added Successfully"
      );

      setImg("");
      setTitle("");
      setPrice("");
      setCategory("");
      setBrand("");
      setRating("");
      setStock("");
    }
  }
  return (
    <>
      <title>products</title>
      <div className="AdminproductInfo">

        <h3 className="FormTitle"> Fill The Form For Add Product</h3>
        <form
          className="productForm"
          onSubmit={addProduct}
        >
          <Box sx={{ width: "100%" }}>

            <TextField
              required
              label="Product Title"
              variant="standard"
              value={title}
              type="text"
              autoComplete="off"
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <TextField
              required
              label="Product Image Link"
              variant="standard"
              value={img}
              autoComplete="off"
              onChange={(e) =>
                setImg(e.target.value)
              }
            />

            <TextField
              required
              label="Product Price"
              variant="standard"
              value={price}
              type="number"
              autoComplete="off"
              onChange={(e) =>
                setPrice(e.target.value)
              }
            />

            <TextField
              required
              label="Product Category"
              variant="standard"
              value={category}
              autoComplete="off"
              onChange={(e) =>
                setCategory(e.target.value)
              }
            />

            <TextField
              required
              label="Product Brand"
              variant="standard"
              value={brand}
              autoComplete="off"
              onChange={(e) =>
                setBrand(e.target.value)
              }
            />

            <TextField
              required
              label="Product Rating"
              variant="standard"
              value={rating}
              type="number"
              autoComplete="off"
              onChange={(e) =>
                setRating(e.target.value)
              }
            />

            <TextField
              required
              label="Stock Count"
              variant="standard"
              value={stock}
              type="number"
              autoComplete="off"
              onChange={(e) =>
                setStock(e.target.value)
              }
              slotProps={{
                htmlInput: {
                  min: 0,
                },
              }}
            />

            <div>
              <button type="submit">
                Add Product
              </button>
            </div>
          </Box>
        </form>
      </div >
    </>
  );
}