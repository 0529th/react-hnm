import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  // console.log(item);
  return (
    <div className="productCard" onClick={showDetail}>
      <div className="productCard-imgWrap">
        <img src={item?.img} alt="product" />
      </div>
      <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
      <div className="productCard-title">{item?.title}</div>
      <div>{item?.price}원</div>
      <div className="productCard-new">{item?.new === true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductCard;
