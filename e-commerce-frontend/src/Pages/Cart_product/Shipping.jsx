import React, { useState } from "react";
import '../CSS/Shipping.css'
import { Link } from "react-router-dom";


const Shipping = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [provinces] = useState(["Province A", "Province B", "Province C"]);
  const [districts] = useState({
    "Province A": ["District A1", "District A2", "District A3"],
    "Province B": ["District B1", "District B2", "District B3"],
    "Province C": ["District C1", "District C2", "District C3"],
  });

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    // Reset district when province changes
    setDistrict("");
  };

  return (
    <div className="shipping-container">
      <h2>Shipping Information</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Province:
          <select value={province} onChange={handleProvinceChange}>
            <option value="">Select Province</option>
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label>
          District:
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            disabled={!province} // Disable if no province selected
          >
            <option value="">Select District</option>
            {districts[province] &&
              districts[province].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </label>
        {/* <button type="submit">
             <Link to={`/checkout?name=${name}&address=${address}&province=${province}&district=${district}`}>Submit</Link>
        </button> */}
        <button type="submit">
             <Link to={`/checkout`}>Submit</Link>
        </button>
      </form>
    </div>
  );
};

export default Shipping;
