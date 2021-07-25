import { GET_POSTS, POST_ERROR } from "../actions/constants";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function postreducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    default:
      return state;
  }
}
