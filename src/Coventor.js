import React, { useState } from "react";

const LengthConverter = () => {
  const [inputLength, setInputLength] = useState(0);
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("meters");
  const [convertedLength, setConvertedLength] = useState(0);

  const conversionRates = {
    meters: {
      inches: 39.37007874015748,
      feet: 3.280839895013123,
      yards: 1.093611328110936,
      miles: 0.0006213711922373339,
    },
    inches: {
      meters: 0.0254,
      feet: 0.08333333333333333,
      yards: 0.02777777777777778,
      miles: 0.000015782857142857142,
    },
    feet: {
      meters: 0.3048,
      inches: 12,
      yards: 0.3333333333333333,
      miles: 0.00018939393939393939,
    },
    yards: {
      meters: 0.9144,
      inches: 36,
      feet: 3,
      miles: 0.0005681818181818182,
    },
    miles: {
      meters: 1609.344,
      inches: 63360,
      feet: 5280,
      yards: 1760,
    },
  };

  const handleInputLengthChange = (e) => {
    setInputLength(e.target.value);
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  const convertLength = () => {
    const conversionRate = conversionRates[fromUnit][toUnit];
    setConvertedLength(inputLength * conversionRate);
  };

  return (
    <div>
      <h1>Length Converter</h1>
      <input
        type="number"
        value={inputLength}
        onChange={handleInputLengthChange}
        placeholder="Enter length..."
      />
      <select value={fromUnit} onChange={handleFromUnitChange}>
        <option value="meters">Meters</option>
        <option value="inches">Inches</option>
        <option value="feet">Feet</option>
        <option value="yards">Yards</option>
        <option value="miles">Miles</option>
      </select>
      <select value={toUnit} onChange={handleToUnitChange}>
        <option value="meters">Meters</option>
        <option value="inches">Inches</option>
        <option value="feet">Feet</option>
        <option value="yards">Yards</option>
        <option value="miles">Miles</option>
      </select>
      <button onClick={convertLength}>Convert</button>
      <p>Converted length: {convertedLength.toFixed(2)} {toUnit}</p>
    </div>
  );
};

export default LengthConverter;
