
import "./adminPage.css";

import { useGetUser, useProducts, } from "../hooks/hook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AdminProducts } from "./AdminProducts";
import { useSelector } from "react-redux";

export default function AdminPage() {

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  );

  const { data } = useProducts();

  const serch = useSelector((state: any) => state.user.serchText)

  const productsDetails = !!serch ? data?.filter((product: any) => product?.title?.toLowerCase().includes(serch.toLowerCase())) : data

  const { data: user = [] } = useGetUser();

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();

    navigate("/login");

    toast.success("Logout Successfully");
  }

  function addProduct() {
    navigate("products")
  }

  return (
    <>
      <title>admin</title>

      <div className="adminPageTitle">
        <h2>Admin Page</h2>
      </div>

      <div className="adminPage">

        <div className="adminProducts">
          {productsDetails?.map((product: any) => (
            <AdminProducts
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="adminRightSide">

          <div className="addProducts">

            <div>
              <p className="formText">
                Click the Button For Add Products
              </p>
              <button className="addProductAdminPageButton"
                onClick={addProduct}>
                Add Product
              </button>
            </div>
          </div>

          <div className="adminInfo">

            <div className="adminDetails">

              <h2 className="adminInfoText">
                Admin Information
              </h2>

              <div>

                <p className="adminName">
                  Admin Name :
                  {" "}
                  {currentUser.name}
                </p>

                <p>
                  Admin Email :
                  {" "}
                  {currentUser.email}
                </p>

              </div>

              <button
                className="logOutButton"
                onClick={logout}
              >
                Logout
              </button>

            </div>

            <div className="websiteInfo">

              <h2 className="websiteInfoText">
                Website Details
              </h2>

              <div>

                <p>
                  Total Products :
                  {" "}
                  {data?.length}
                </p>

                <p>
                  Total Users :
                  {" "}
                  {user?.length}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}