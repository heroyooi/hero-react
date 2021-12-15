import React, { useState, useCallback, useEffect } from 'react';
import produce from 'immer';
import MainLayout from '@layouts/MainLayout';
import Checkbox from '@components/Checkbox';
import CheckboxGroup from '@components/CheckboxGroup';
import Radio from '@components/Radio';
import RadioGroup from '@components/RadioGroup';
import { PageTitle } from '@styles';
import { CSection, CTitle } from './styles';
import mockDatas from '@mockData/component';

const ComponentEx = () => {
  const { checkbox, radio, checkboxGroup, radioGroup } = mockDatas;

  // 단일 체크박스
  const [checkboxItem, setCheckboxItem] = useState(checkbox);
  const onChangeCheckbox = useCallback((e) => {
    // setCheckboxItem((prev) => ({ ...prev, checked: e.target.checked }));
    setCheckboxItem(
      produce((draft) => {
        draft.checked = e.target.checked;
      }),
    );
  }, []);

  // 체크박스 그룹
  const [checkboxGroupItem, setCheckboxGroupItem] = useState(checkboxGroup());
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

  // 체크박스 그룹 - 모두 동의
  const [checkboxAll, setCheckboxAll] = useState(false);
  const [checkboxGroupWithAllItem, setCheckboxGroupWithAllItem] = useState(checkboxGroup());
  const onChangeCheckboxAll = useCallback((e) => {
    setCheckboxAll((prev) => !prev);
    setCheckboxGroupWithAllItem(
      produce((draft) => {
        draft.map((item) => {
          item.checked = e.target.checked;
        });
      }),
    );
  }, []);
  const onChangeCheckboxGroupWithAll = useCallback(
    (e) => {
      const _index = checkboxGroupWithAllItem.findIndex((checkbox) => checkbox.id === e.target.id);
      setCheckboxGroupWithAllItem(
        produce((draft) => {
          draft[_index].checked = !draft[_index].checked;
        }),
      );
    },
    [checkboxGroupItem],
  );
  useEffect(() => {
    const filteredChecked = checkboxGroupWithAllItem.filter((item) => item.checked === true);
    setCheckboxAll(filteredChecked.length === checkboxGroupWithAllItem.length);
  }, [checkboxGroupWithAllItem]);

  // 라디오 버튼
  const [radioItem, setRadioItem] = useState(radio);
  const onChangeRadio = useCallback((e) => {
    setRadioItem(
      produce((draft) => {
        draft.checked = e.target.checked;
      }),
    );
  }, []);

  // 라디오 버튼 그룹
  const [radioGroupItem, setRadioGroupItem] = useState(radioGroup);
  const onChangeRadioGroup = useCallback((e) => {
    setRadioGroupItem(
      produce((draft) => {
        draft.map((item) => {
          item.checked = item.id === e.target.id;
        });
      }),
    );
  }, []);

  return (
    <MainLayout>
      <PageTitle>컴포넌트 예제</PageTitle>

      <CSection>
        <CTitle>단일 체크박스</CTitle>
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
        <CTitle>체크박스 그룹 - 모두 동의</CTitle>
        <Checkbox checked={checkboxAll} id="checkbox-all" label="모두 동의합니다." onChange={onChangeCheckboxAll} />
        <CheckboxGroup data={checkboxGroupWithAllItem} onChange={onChangeCheckboxGroupWithAll} />
      </CSection>

      <CSection>
        <CTitle>라디오 버튼</CTitle>
        <Radio checked={radioItem.checked} id={radioItem.id} label={radioItem.label} onChange={onChangeRadio} />
      </CSection>

      <CSection>
        <CTitle>라디오 버튼 그룹</CTitle>
        <RadioGroup data={radioGroupItem} onChange={onChangeRadioGroup} />
      </CSection>
    </MainLayout>
  );
};

export default ComponentEx;
