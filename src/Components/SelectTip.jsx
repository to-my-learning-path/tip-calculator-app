import React, { useState } from "react";

const SelectTip = ({ perPerson, setPerPerson }) => {
  const [isCustom, setIsCustom] = useState(false);
  const tipsArray = [5, 10, 15, 25, 50];

  const handleChange = (event) => {
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      setPerPerson({
        ...perPerson,
        tip: input,
      });
    }
  };

  const handleClick = (event) => {
    setIsCustom(false);
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      setPerPerson({
        ...perPerson,
        tip: input,
      });
    }
  };
  return (
    <div className=" flex flex-col gap-4">
      <p className=" text-darkGrayishCyan">Select Tip %</p>
      <div className=" grid grid-cols-2 gap-4">
        {tipsArray.map((tip) => (
          <button
            key={tip}
            value={tip}
            onClick={handleClick}
            className=" text-white bg-veryDarkCyan hover:bg-strongCyan hover:text-veryDarkCyan py-1 rounded-md text-center text-inputFontSize"
          >
            {tip}%
          </button>
        ))}

        {isCustom ? (
          <input
            className=" w-full bg-veryLightGrayishCyan focus:outline-strongCyan hover:outline-strongCyan text-veryDarkCyan text-inputFontSize text-center p-2"
            id="custom"
            type="text"
            inputMode="numeric"
            value={perPerson.tip}
            placeholder="0"
            autoFocus
            onChange={handleChange}
          />
        ) : (
          <button
            onClick={() => setIsCustom(!isCustom)}
            className=" text-darkGrayishCyan bg-veryLightGrayishCyan rounded-md text-center py-2 text-inputFontSize"
          >
            Custom
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectTip;
