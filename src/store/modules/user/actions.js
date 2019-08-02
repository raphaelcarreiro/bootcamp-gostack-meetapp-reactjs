export function signUpRequest(name, email, password) {
  return {
    type: '@user/SIGN_UP_REQUEST',
    name,
    email,
    password,
  };
}

export function signUpSuccess() {
  return {
    type: '@user/SIGN_UP_SUCCESS',
  };
}

export function signUpFailure() {
  return {
    type: '@user/SIGN_UP_FAILURE',
  };
}
