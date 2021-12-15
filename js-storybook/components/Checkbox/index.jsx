import React from 'react';
import { SCheckbox } from './styles';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <SCheckbox>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </SCheckbox>
  );
};

export default Checkbox;
