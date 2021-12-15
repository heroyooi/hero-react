import React from 'react';
import { SRadio } from './styles';

const Radio = ({ id, label, checked, onChange }) => {
  return (
    <SRadio>
      <input type="radio" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </SRadio>
  );
};

export default Radio;
