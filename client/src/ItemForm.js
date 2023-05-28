import React, { useState } from "react";
import { Link } from "react-router-dom";
import { saveItem } from "./api";

export default function ItemForm() {
  const [id, setId] = useState("");
  const [itemSellStatus, setItemSellStatus] = useState("SELL");
  const [itemData, setItemData] = useState({
    itemNm: "",
    price: "",
    stockNumber: "",
    itemDetail: ""
  });

const handleFormChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
 const handleFormSubmit = async (e) => {
   e.preventDefault();
   try {
     const response = await saveItem(itemData);
     console.log("Response:", response);
   } catch (error) {
     console.log("Error:", error);
   }
 };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p className="h2">상품 등록</p>
        <input
          type="hidden"
          name="id"
          value={id}
          onChange={handleFormChange}
        />
        <div className="form-group">
          <select
            name="itemSellStatus"
            className="custom-select"
            value={itemSellStatus}
            onChange={handleFormChange}
          >
            <option value="SELL">판매중</option>
            <option value="SOLD_OUT">품절</option>
          </select>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">상품명</span>
          </div>
          <input
            type="text"
            name="itemNm"
            className="form-control"
            placeholder="상품명을 입력해주세요"
            value={itemData.itemNm}
            onChange={handleFormChange}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">가격</span>
          </div>
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="상품의 가격을 입력해주세요"
            value={itemData.price}
            onChange={handleFormChange}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">재고</span>
          </div>
          <input
            type="text"
            name="stockNumber"
            className="form-control"
            placeholder="상품의 재고을 입력해주세요"
            value={itemData.stockNumber}
            onChange={handleFormChange}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">상세내용</span>
          </div>
          <input
            type="text"
            name="itemDetail"
            className="form-control"
            placeholder="상품의 상세내용을 입력해주세요"
            value={itemData.itemDetail}
            onChange={handleFormChange}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            저장
          </button>
        </div>

      </form>
    </div>
  );
}
