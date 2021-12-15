import React from 'react';
import Radio from '@components/Radio';
import { RadioWrapper } from './styles';

const RadioGroup = ({ data, onChange }) => {
  return (
    <RadioWrapper>
      {data.map((radio, index) => (
        <Radio id={radio.id} label={radio.label} checked={radio.checked} onChange={onChange} />
      ))}
    </RadioWrapper>
  );
};

export default RadioGroup;
