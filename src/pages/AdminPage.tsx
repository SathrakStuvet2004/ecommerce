import NavBar from "../components/NavBar"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import "./adminPage.css"

export default function AdminPage() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

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
              Fill The Form For Add Products
            </p>
          </div>
          <form className="productForm">
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
              noValidate
              autoComplete="off"
            >
              <div className="productInfo">
                <TextField
                  required
                  id="standard-required"
                  label="ProductTitle"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Image Link"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Price"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Category"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Brand"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Product Rating"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Enter a Stock Count"
                  variant="standard"
                />
                <div>
                  <button>
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


            <button className="logOutButton">
              Logout
            </button>

          </div>
          <div className="websiteInfo">
            <h2 className="websiteInfoText">website details:</h2>
            <div>
              <p>Total Products : </p>
              <p>Total Users </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}