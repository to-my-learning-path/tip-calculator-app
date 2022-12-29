import React, { useEffect, useState } from "react";

import DollarIcon from "../assets/images/icon-dollar.svg";
import PersonIcon from "../assets/images/icon-person.svg";
import Logo from "../assets/images/logo.svg";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);

  const [perPerson, setPerPerson] = useState({
    total: 0,
    tipAmount: 0,
  });

  var tipAmount = (bill / people) * (tip / 100);
  var total = bill / people + perPerson.tipAmount;

  useEffect(() => {
    setPerPerson({
      ...perPerson,
      total: total,
      tipAmount: tipAmount,
    });
  }, [total, tipAmount]);

  const handleResetClick = () => {
    tipAmount = 0;
    total = 0;
    setTip(0);
    setPeople(1);
    setBill(0);
    setPerPerson({
      ...perPerson,
      total: 0,
      tipAmount: 0,
    });
  };

  return (
    <div className=" max-w-4xl mx-auto">
      <div className=" text-center py-8">
        <img className=" mx-auto" src={Logo} alt="SPLITTER Logo" />
      </div>
      <div className=" bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" flex flex-col gap-8">
          <BillInput setBill={setBill} />
          <SelectTip setTip={setTip} />
          <NumberOfPeopleInput setPeople={setPeople} />
        </div>
        <PerPersonDisplay
          total={perPerson.total}
          tipAmount={perPerson.tipAmount}
          handleResetClick={handleResetClick}
        />
      </div>
    </div>
  );
};

const BillInput = ({ setBill }) => {
  const handleChange = (event) => {
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      setBill(input);
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

const SelectTip = ({ setTip }) => {
  const [isCustom, setIsCustom] = useState(false);

  const handleChange = (event) => {
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      setTip(input);
    }
  };

  const handleClick = (event) => {
    setIsCustom(false);
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      setTip(input);
    }
  };
  const tipsArray = [5, 10, 15, 25, 50];
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

const NumberOfPeopleInput = ({ setPeople }) => {
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const input = Number(event.target.value);
    if (!isNaN(input)) {
      if (input === 0) {
        setError(true);
      } else {
        setError(false);
        setPeople(input);
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

const PerPersonDisplay = ({ total, tipAmount, handleResetClick }) => {
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

export default TipCalculator;
