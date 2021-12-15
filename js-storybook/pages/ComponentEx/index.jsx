import React, { useState, useCallback } from 'react';
import produce from 'immer';
import MainLayout from '@layouts/MainLayout';
import Checkbox from '@components/Checkbox';
import CheckboxGroup from '@components/CheckboxGroup';
import Radio from '@components/Radio';
import { PageTitle } from '@styles';
import { CSection, CTitle } from './styles';
import mockDatas from '@mockData/component';

const ComponentEx = () => {
  const { checkbox, radio, checkboxGroup, radioGroup } = mockDatas;
  const [checkboxItem, setCheckboxItem] = useState(checkbox);
  const onChangeCheckbox = useCallback((e) => {
    // setCheckboxItem((prev) => ({ ...prev, checked: e.target.checked }));
    setCheckboxItem(
      produce((draft) => {
        draft.checked = e.target.checked;
      }),
    );
  }, []);
  const [checkboxGroupItem, setCheckboxGroupItem] = useState(checkboxGroup);
  const onChangeCheckboxGroup = useCallback(
    (e) => {
      const _index = checkboxGroupItem.findIndex((checkbox) => checkbox.id === e.target.id);
      setCheckboxGroupItem(
        produce((draft) => {
          draft[_index].checked = !draft[_index].checked;
        }),
      );
    },
    [checkboxGroupItem],
  );

  const [radioItem, setRadioItem] = useState(radio);
  const onChangeRadio = useCallback((e) => {
    setRadioItem(
      produce((draft) => {
        draft.checked = e.target.checked;
      }),
    );
  }, []);

  return (
    <MainLayout>
      <PageTitle>컴포넌트 예제</PageTitle>

      <CSection>
        <CTitle>체크박스</CTitle>
        <Checkbox
          checked={checkboxItem.checked}
          id={checkboxItem.id}
          label={checkboxItem.label}
          onChange={onChangeCheckbox}
        />
      </CSection>

      <CSection>
        <CTitle>체크박스 그룹</CTitle>
        <CheckboxGroup data={checkboxGroupItem} onChange={onChangeCheckboxGroup} />
      </CSection>

      <CSection>
        <CTitle>라디오</CTitle>
        <Radio checked={radioItem.checked} id={radioItem.id} label={radioItem.label} onChange={onChangeRadio} />
      </CSection>
    </MainLayout>
  );
};

export default ComponentEx;
