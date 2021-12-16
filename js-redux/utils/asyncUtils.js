// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [PENDING, SUCCESS, ERROR] = [`${type}_PENDING`, `${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type: PENDING, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      console.error(e);
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

// 비동기 통신 강제 지연을 위한 함수 - 개발 테스트용
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수
export const reducerUtils = {
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
