import React from 'react';
import PropTypes from 'prop-types';
import { SRadio } from './styles';

const Radio = ({ id, label, checked, disabled, onChange }) => {
  return (
    <SRadio>
      <input type="radio" id={id} checked={checked} disabled={disabled} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </SRadio>
  );
};

Radio.propTypes = {
  /** 라디오 제목 */
  label: PropTypes.string,
  /** 라디오 고유 ID */
  id: PropTypes.string.isRequired,
  /** 라디오 체크 유무 */
  checked: PropTypes.bool.isRequired,
  /** 라디오 비활성화 유무 */
  disabled: PropTypes.bool,
  /** 라디오 변경 시 호출 함수 */
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
