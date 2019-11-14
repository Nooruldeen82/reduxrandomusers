import Actions from "./actionTypes";

export const actionLoading = () => {
  return {
    type: Actions.request_loading
  };
};

export const actionSuccess = users => {
  return {
    type: Actions.request_success,
    payload: users
  };
};

export const actionFail = fail => {
  return {
    type: Actions.request_fail,
    payload: fail
  };
};
