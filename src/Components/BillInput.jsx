import React from "react";
import DollarIcon from "../assets/images/icon-dollar.svg";

const BillInput = ({ perPerson, setPerPerson }) => {
  const handleChange = (event) => {
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      setPerPerson({
        ...perPerson,
        bill: input,
      });
    }
  };
  return (
    <div className=" flex flex-col">
      <label
        className={` text-darkGrayishCyan bg-[${DollarIcon}]`}
        htmlFor="bill"
      >
        Bill
      </label>
      <input
        className=" w-full bg-veryLightGrayishCyan focus:outline-strongCyan hover:outline-strongCyan px-6 p-2 text-veryDarkCyan text-inputFontSize text-right"
        id="bill"
        type="text"
        inputMode="numeric"
        value={perPerson.bill}
        placeholder="0"
        style={{
          backgroundImage: `url(${DollarIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "5% ",
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default BillInput;
