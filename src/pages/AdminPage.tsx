import NavBar from "../components/NavBar"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import "./adminPage.css"
import { useState } from "react";
import { useAddProduct, useGetUser, useProducts } from "../hooks/hook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const { mutate: addPostProduct } = useAddProduct();

  const { data } = useProducts();

  const { data: user = [] } = useGetUser();

  const navigate = useNavigate();

  function addProduct(e:any){
    e.preventDefault();

    const newProduct = {
      img,
      title,
      price,
      category,
      brand,
      rating,
      stock
    }
    addPostProduct(newProduct);
    toast.success("Product Added Successfully")
    setImg("");
    setTitle("");
    setPrice("");
    setCategory("");
    setBrand("");
    setRating("");
    setStock("");
  }

  function logout(){
    localStorage.clear();
    navigate("/login");
    toast.success("Logout Successfully")
  }

  return (
    <>
      <title>admin</title>
      <NavBar />
      <div className="adminPageTitle">
        <h2>Admin Page</h2>
      </div>

      <div className="adminPage">
        <div className="addProducts">
          <div>
            <p className="formText">
              Fill The Information For Add Products     
            </p>
          </div>
          <form className="productForm" onSubmit={addProduct} >
           <Box sx={{ width: "100%" }}>
              <div className="AdminproductInfo">
                <TextField
                  required
                  id="standard-required"
                  label="ProductTitle"
                  variant="standard"
                  value={title}
                  type="string"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Image Link"
                  variant="standard"
                  value={img}
                  onChange={(e)=>setImg(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Price"
                  variant="standard"
                  value={price}
                  type="number"
                  onChange={(e)=>setPrice(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Category"
                  variant="standard"
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Brand"
                  variant="standard"
                  value={brand}
                  onChange={(e)=>setBrand(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Rating"
                  variant="standard"
                  value={rating}
                  onChange={(e)=>setRating(e.target.value)}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Enter a Stock Count"
                  variant="standard"
                  value={stock}
                  onChange={(e)=>setStock(e.target.value)}
                />
                <div>
                  <button type="submit">
                    Add product
                  </button>
                </div>
              </div>
            </Box>
          </form>
        </div>
        <div className="adminInfo">
          <div className="adminDetails">
            <h2 className="adminInfoText">Admin Information</h2>
            <div>
              <p className="adminName">
                Admin Name :  {currentUser.name}
              </p>
              <p>
                Admin Email : {currentUser.email}
              </p>
            </div>

            <button className="logOutButton" onClick={logout}>
              Logout
            </button>

          </div>
          <div className="websiteInfo">
            <h2 className="websiteInfoText">website details:</h2>
            <div>
              <p>Total Products : {data?.length} </p>
              <p>Total Users : {user?.length} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}