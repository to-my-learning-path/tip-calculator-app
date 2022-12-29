import React, { useState } from "react";
import PersonIcon from "../assets/images/icon-person.svg";

const NumberOfPeopleInput = ({ perPerson, setPerPerson }) => {
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      if (input === 0) {
        setError(true);
      } else {
        setError(false);
        setPerPerson({
          ...perPerson,
          people: input,
        });
      }
    }
  };
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex justify-between items-center">
        <label className="text-darkGrayishCyan" htmlFor="">
          Number of People
        </label>
        {error && <p className=" text-[#dc2626]">Can't be zero</p>}
      </div>
      <input
        className="w-full bg-veryLightGrayishCyan focus:outline-strongCyan hover:outline-strongCyan p-2 px-6 text-inputFontSize text-right"
        type="text"
        inputMode="numeric"
        value={perPerson.people}
        style={{
          backgroundImage: `url(${PersonIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "5% ",
        }}
        onChange={handleChange}
        placeholder="1"
      />
    </div>
  );
};

export default NumberOfPeopleInput;
