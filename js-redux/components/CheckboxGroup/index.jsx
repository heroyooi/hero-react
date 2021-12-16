import React from 'react';
import Checkbox from '@components/Checkbox';
import { CheckboxWrapper } from './styles';

const CheckboxGroup = ({ data, onChange }) => {
  return (
    <CheckboxWrapper>
      {data.map((checkbox, index) => (
        <Checkbox
          key={checkbox.id}
          checked={checkbox.checked}
          id={checkbox.id}
          label={checkbox.label}
          disabled={radio.disabled}
          onChange={onChange}
        />
      ))}
    </CheckboxWrapper>
  );
};

export default CheckboxGroup;
