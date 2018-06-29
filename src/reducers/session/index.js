import consts from '../../actions/consts';

const initialState = {
  loading: false,
  csrfToken: null,
  user: null
};

export default (state = initialState, action)=> {
  if (action.type === consts.SESSION_INIT) {
    return Object.assign({}, state, {
      loading: true,
      user: null
    });
  } else if (action.type === consts.SESSION_FETCH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      csrfToken: action.payload.csrfToken,
      user: action.payload.user
    });
  } else if (action.tyoe === consts.SESSION_FETCH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      user: null
    });
  }

  return state;
};
