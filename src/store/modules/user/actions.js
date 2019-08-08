export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(data) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    data,
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_FAILURE',
  };
}
