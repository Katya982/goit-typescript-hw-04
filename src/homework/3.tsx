import React, { ChangeEvent, useState } from "react";

type InputProps = {
  value: string;
}

export function FormComponent({value}: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleChange} />;
}
