import "./product.css";
import Header from "../../components/header/Header";
import data from "../../../public/data";
import { Link, useParams } from "react-router-dom";


function Product() {
    const {id}=useParams();
   
    
  return (
    <div>
      <Header></Header>
      <div className="container">
        <button><Link to="/">Back</Link></button>
        <div className="ota">
          <img
            src={data[id].image}
            alt=""
          />
          <div className="text">
            <h2>{data[id].title}</h2>
            <h3>rice: {data[id].price}</h3>
            <h3>Rating: {data[id].rating.rate}</h3>
            <h5>{data[id].description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
