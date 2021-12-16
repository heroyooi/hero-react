import React from 'react';
import PropTypes from 'prop-types';
import { SCheckbox } from './styles';

const Checkbox = ({ id, label, checked, disabled, onChange }) => {
  return (
    <SCheckbox>
      <input type="checkbox" id={id} checked={checked} disabled={disabled} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </SCheckbox>
  );
};

Checkbox.propTypes = {
  /** 체크박스 제목 */
  label: PropTypes.string,
  /** 체크박스 고유 ID */
  id: PropTypes.string.isRequired,
  /** 체크박스 체크 유무 */
  checked: PropTypes.bool.isRequired,
  /** 체크박스 비활성화 유무 */
  disabled: PropTypes.bool,
  /** 체크박스 변경 시 호출 함수 */
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  disabled: false,
};

export default Checkbox;
