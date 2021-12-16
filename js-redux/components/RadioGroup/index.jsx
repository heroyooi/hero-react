import React from 'react';
import Radio from '@components/Radio';
import { RadioWrapper } from './styles';

const RadioGroup = ({ data, onChange }) => {
  return (
    <RadioWrapper>
      {data.map((radio, index) => (
        <Radio
          key={radio.id}
          id={radio.id}
          label={radio.label}
          checked={radio.checked}
          disabled={radio.disabled}
          onChange={onChange}
        />
      ))}
    </RadioWrapper>
  );
};

export default RadioGroup;
