import React, { useState } from "react";
import { DivContainer, DivInput } from "./style";

interface RangeInputProps {
  min: number;
  max: number;
  onValuesChange: (startValue: number, endValue: number) => void;
}

const RangeInputKm: React.FC<RangeInputProps> = ({
  min,
  max,
  onValuesChange,
}) => {
  const [startValue, setStartValue] = useState(min);
  const [endValue, setEndValue] = useState(max);

  const handleValuesChange = () => {
    onValuesChange(startValue, endValue);
  };

  return (
    <>
      <DivContainer>
        <p>{startValue} km</p>
        <p>{endValue}km</p>
      </DivContainer>
      <DivInput>
        <input
          type="range"
          min={min}
          max={max}
          value={startValue}
          onChange={(e) => setStartValue(Number(e.target.value))}
          onBlur={handleValuesChange}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={endValue}
          onChange={(e) => setEndValue(Number(e.target.value))}
          onBlur={handleValuesChange}
        />
      </DivInput>
    </>
  );
};

const RangeInputValue: React.FC<RangeInputProps> = ({
  min,
  max,
  onValuesChange,
}) => {
  const [startValue, setStartValue] = useState(min);
  const [endValue, setEndValue] = useState(max);

  const handleValuesChange = () => {
    onValuesChange(startValue, endValue);
  };

  return (
    <>
      <DivContainer>
        <p>R${startValue}mil</p>
        <p>R${endValue}mil</p>
      </DivContainer>
      <DivInput>
        <input
          type="range"
          min={min}
          max={max}
          value={startValue}
          onChange={(e) => setStartValue(Number(e.target.value))}
          onBlur={handleValuesChange}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={endValue}
          onChange={(e) => setEndValue(Number(e.target.value))}
          onBlur={handleValuesChange}
        />
      </DivInput>
    </>
  );
};

export { RangeInputKm, RangeInputValue };
