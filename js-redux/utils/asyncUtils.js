const utils = {};

utils.createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];

  return (param) => async (dispatch) => {
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      console.error(e);
      dispatch({ type: FAILURE, payload: e, error: true });
    }
  };
};

utils.delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default utils;
