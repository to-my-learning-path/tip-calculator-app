import React, { useEffect, useState } from "react";
import BillInput from "./BillInput";
import SelectTip from "./SelectTip";
import NumberOfPeopleInput from "./NumberOfPeopleInput";
import PerPersonDisplay from "./PerPersonDisplay";

import Logo from "../assets/images/logo.svg";

const TipCalculator = () => {
  const [perPerson, setPerPerson] = useState({
    bill: 0,
    tip: 0,
    people: 1,
  });

  return (
    <div className=" max-w-4xl mx-auto">
      <div className=" text-center py-8">
        <img className=" mx-auto" src={Logo} alt="SPLITTER Logo" />
      </div>
      <div className=" bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" flex flex-col gap-8">
          <BillInput perPerson={perPerson} setPerPerson={setPerPerson} />
          <SelectTip perPerson={perPerson} setPerPerson={setPerPerson} />
          <NumberOfPeopleInput
            perPerson={perPerson}
            setPerPerson={setPerPerson}
          />
        </div>
        <PerPersonDisplay perPerson={perPerson} setPerPerson={setPerPerson} />
      </div>
    </div>
  );
};
export default TipCalculator;
