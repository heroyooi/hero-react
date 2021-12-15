import { v4 as uuidv4 } from 'uuid';

const datas = {};

datas.checkbox = { id: 'checkbox-1', label: '체크박스 1', checked: false };
datas.checkboxGroup = () => [
  { id: uuidv4(), label: '체크박스 그룹 1', checked: false },
  { id: uuidv4(), label: '체크박스 그룹 2', checked: false },
  { id: uuidv4(), label: '체크박스 그룹 3', checked: false },
  { id: uuidv4(), label: '체크박스 그룹 4', checked: false },
];

datas.radio = { id: 'radio-1', label: '라디오 1', checked: false };
datas.radioGroup = [
  { id: 'radio-group-1', label: '라디오 그룹 1', checked: false },
  { id: 'radio-group-2', label: '라디오 그룹 2', checked: false },
  { id: 'radio-group-3', label: '라디오 그룹 3', checked: false },
  { id: 'radio-group-4', label: '라디오 그룹 4', checked: false },
];

export default datas;
