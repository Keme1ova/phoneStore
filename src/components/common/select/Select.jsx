import { useState } from "react";
import "./Select.scss";

export const Select = ({ selectType, text, data,  img, handleSearchData}) => {
  const [active, setActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(null);


  const handleOptionSelect = (option) => {
    setSelectedOptions(option);
    console.log(option);
    setActive(false);
    handleSearchData(option)
  };

  return (
    <div className="select-popup">
      <div className="select-header" onClick={() => setActive(!active)}>
        <img src={selectType} alt="" />
        <span className="selected-option">{selectedOptions || text}</span>
        <img
          src={img}
          className={`arrow-icon ${active ? "open" : ""}`}
          alt=""
        />
      </div>
      {active && (
        <div className="select-options">
          {data.map((el) => (
            <div
              key={el.id}
              className="option"
              onClick={() => handleOptionSelect(el.option || el.model)}
            >
              {el.option || el.model}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
