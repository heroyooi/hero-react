import React from 'react';
import Checkbox from '@components/Checkbox';
import { CheckboxWrapper } from './styles';

const CheckboxGroup = ({ data, onChange }) => {
  return (
    <CheckboxWrapper>
      {data.map((checkbox, index) => (
        <Checkbox checked={checkbox.checked} id={checkbox.id} label={checkbox.label} onChange={onChange} />
      ))}
    </CheckboxWrapper>
  );
};

export default CheckboxGroup;
