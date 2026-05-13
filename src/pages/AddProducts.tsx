import { useProducts, useAddProduct } from "../hooks/hook";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

import "./AddProducts.css"

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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

  function handleImageUpload(e: any) {
    const file = e.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = () => {
    const base64Image = reader.result as string;

    setImg(base64Image);
  };
  }

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

        <h2 className="formTitle">
          Fill The Form For Add Product
        </h2>
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
              label="Stock Count"
              variant="standard"
              value={stock}
              type="number"
              autoComplete="off"
              onChange={(e) =>
                setStock(e.target.value)
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

            <div className="imageUploadContainer">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload Your Image
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleImageUpload}
                  required
                />
              </Button>
              {img && (
                <img
                  src={img}
                  alt="preview"
                  className="previewImage"
                />
              )}
            </div>

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