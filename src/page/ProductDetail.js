import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/0529th/react-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} alt="product-img" />
          </Col>
          <Col className="product-desc">
            <div className="product-title">{product?.title}</div>
            <div>{product?.price}원</div>
            <div className="product-choice">
              {product?.choice == true ? "Conscious Choice" : ""}
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product &&
                  product.size.map((item, index) => (
                    <Dropdown.Item href="#" key={index}>
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <button className="product-btn">추가</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
