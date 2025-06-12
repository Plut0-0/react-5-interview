import "./App.css";
import { useState } from "react";
import React from "react";

function DisplayStock({ Stock }) {
  let lastCategory = null;
  return (
    <>
      {Stock.map((item, i) => {
        const showCategory = item.category !== lastCategory;
        lastCategory = item.category;
        return (
          <React.Fragment key={i}>
            {showCategory && (
              <tr>
                <th colSpan="2">{item.category}</th>
              </tr>
            )}
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function My() {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const Stock = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  function filterStock() {
    return Stock.filter((item) => item.stocked);
  }
  function searchedStock() {
    const searchTerm = inputValue.toLowerCase();
    return Stock.filter((item) => item.name.toLowerCase().includes(searchTerm));
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      ></input>
      <br></br>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        show only available
      </label>
      <table>
        <tr>
          {" "}
          <th>Name</th>
          <th>Price</th>
        </tr>
        {inputValue ? (
          <DisplayStock Stock={searchedStock()} />
        ) : checked ? (
          <DisplayStock Stock={filterStock()} />
        ) : (
          <DisplayStock Stock={Stock} />
        )}
      </table>
    </>
  );
}
