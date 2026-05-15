import { useParams } from "react-router";
import { useProducts } from "../hooks/hook";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './ProductInfoPage.css'

export default function ProductInfoPage() {

  const location = useParams()

  console.log(location)
  const { data } = useProducts(location.productId)

  return (
    <>
      <div className="singleProductPage">

        <div className="singleProductInfo">

          <div className="singleProductImage">
            <img src={data?.img} alt={data?.title} className='img' />
          </div>

          <div className="singleProductInfo">
            <div className="singleProductName ">
              Name:  {data?.title}
            </div>
            <div className="singleProductBrand ">
              Brand:  {data?.brand}
            </div>
            <div className="singleProductCategory ">
              Category:  {data?.category}
            </div>

            <div className="singleProductPrice">

              <div className="singleProductPrice">
                Price: {data?.price}
              </div>

              <div className="singleProductRating">

                <span>Rating:</span>
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2} precision={0.5}
                    sx={{
                      color: "#0077ff",

                      "& .MuiRating-iconFilled": {
                        filter: "drop-shadow(0 0 1px #00f0ff) drop-shadow(0 0 02px #3700ff)"
                      },

                      "& .MuiRating-iconHover": {
                        color: "#00f0ff"
                      },

                      "& .MuiRating-iconEmpty": {
                        color: "#1e3a5f"
                      }
                    }} />
                </Stack>
              </div>

              <div className="singleProductStock ">
                Stock: {data?.stock}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="commentSection">
        <h3>zcz</h3>
      </div>
    </>
  );
}