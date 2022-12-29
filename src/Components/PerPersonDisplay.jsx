import React from "react";

const PerPersonDisplay = ({ perPerson, setPerPerson }) => {
  var tipAmount = (perPerson.bill / perPerson.people) * (perPerson.tip / 100);
  var total = perPerson.bill / perPerson.people + tipAmount;

  const handleResetClick = () => {
    setPerPerson({
      ...perPerson,
      bill: 0,
      tip: 0,
      people: 1,
    });
  };
  return (
    <div className=" bg-veryDarkCyan p-8 rounded-2xl flex flex-col gap-8 justify-between">
      <div className=" flex flex-col gap-4">
        <div className=" flex justify-between">
          <div className=" flex flex-col">
            <p className=" text-white">Tip Amount</p>
            <p className=" text-grayishCyan">/ person</p>
          </div>
          <p className=" text-inputFontSize text-strongCyan">
            ${tipAmount.toFixed(2)}
          </p>
        </div>
        <div className=" flex justify-between">
          <div className=" flex flex-col">
            <p className=" text-white">Total</p>
            <p className=" text-grayishCyan">/ person</p>
          </div>
          <p className=" text-inputFontSize text-strongCyan">
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={handleResetClick}
        disabled={total > 0 ? false : true}
        className="  bg-strongCyan text-veryDarkCyan hover:bg-lightGrayishCyan uppercase w-full rounded-md py-2 disabled:brightness-90 disabled:cursor-not-allowed"
      >
        Reset
      </button>
    </div>
  );
};

export default PerPersonDisplay;
