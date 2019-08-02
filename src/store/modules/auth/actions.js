export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    email,
    password,
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    token,
    user,
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    name,
    email,
    password,
  };
}

export function setToken(token) {
  return {
    type: '@auth/SET_TOKEN',
    token,
  };
}
