import baseUtils from '@utils/baseUtils';

const utils = {};

const _log = (...params) => {
  console.log('createPromiseThunk ::: ', ...params);
};

// Promise에 기반한 Thunk를 만들어주는 함수
utils.createPromiseThunk = function (type, promiseCreator, reqInfo) {
  const [PENDING, SUCCESS, ERROR] = [`${type}_PENDING`, `${type}_SUCCESS`, `${type}_ERROR`];

  return (...params) => {
    return async (dispatch) => {
      _log(PENDING);
      dispatch({ type: PENDING, reqInfo });
      try {
        const response = await promiseCreator(...params);
        let resultResponse;
        if (
          baseUtils.hasProperty(response, 'data') &&
          baseUtils.hasProperty(response, 'headers') &&
          baseUtils.hasProperty(response, 'status')
        ) {
          resultResponse = response.data;
        } else {
          resultResponse = response;
        }
        _log(SUCCESS, resultResponse);
        dispatch({ type: SUCCESS, payload: resultResponse, reqInfo });
        return resultResponse;
      } catch (e) {
        console.error(e);
        dispatch({ type: ERROR, payload: e, error: true });
      }
    };
  };
};

// 비동기 통신 강제 지연을 위한 함수 - 개발 테스트용
utils.delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수
utils.reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

export default utils;
