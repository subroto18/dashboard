export enum ActionKind {
  USER_API_LOADING = "USER_DATA_LOADING",
  USER_API_SUCCESS = "USER_API_SUCCESS",
  USER_API_FAILED = "USER_API_FAILED",

  POST_API_LOADING = "POST_API_LOADING",
  POST_API_SUCCESS = "POST_API_SUCCESS",
  POST_API_FAILED = "POST_API_FAILED",

  COMMETS_API_LOADING = "COMMETS_API_LOADING",
  COMMENTS_API_SUCCESS = "COMMENTS_API_SUCCESS",
  COMMETS_API_FAILED = "COMMETS_API_FAILED",

  ALBUMS_API_LOADING = "ALBUMS_API_LOADING",
  ALBUMS_API_SUCCESS = "ALBUMS_API_SUCCESS",
  ALBUMS_API_FAILED = "ALBUMS_API_FAILED",

  USER_WITH_POST_LOADING = "USER_WITH_POST_LOADING",
  USER_API_WITH_POST_SUCCESS = "USER_API_WITH_POST_SUCCESS",
  USER_API_WITH_POST_FAILED = "USER_API_WITH_POST_FAILED",
}

// An interface for our actions
interface dashboardAction {
  type: ActionKind;
  payload: any;
}

// An interface for our state
interface dashboardState {
  userDataLoading?: boolean;
  numOfUsers?: number;
  allUsers?: [];
  userApirror?: boolean;

  postDataLoading?: boolean;
  numOfPosts?: number;
  postApirror?: boolean;

  commentsDataLoading?: boolean;
  numOfComments?: number;
  commentsApirror?: boolean;

  albumsDataLoading?: boolean;
  numOfAlbums?: number;
  albumsApirror?: boolean;

  userPostAPiLoading?: boolean;
  userWithPostData?: [];
  userPostAPiFailed?: boolean;
}

// Our reducer function that uses a switch statement to handle our actions

export const dashboardReducer = (
  state: dashboardState,
  action: dashboardAction
) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.USER_API_LOADING:
      return {
        ...state,
        userDataLoading: true,
        userApirror: false,
      };

    case ActionKind.USER_API_SUCCESS:
      return {
        ...state,
        userDataLoading: false,
        numOfUsers: payload.num_of_users,
        allUsers: payload.allUsers,
        userApirror: false,
      };

    case ActionKind.USER_API_FAILED:
      return {
        ...state,
        userDataLoading: false,
        numOfUsers: payload,
        userApirror: true,
      };

    case ActionKind.POST_API_LOADING:
      return {
        ...state,
        postDataLoading: true,
        postApirror: false,
      };

    case ActionKind.POST_API_SUCCESS:
      return {
        ...state,
        postDataLoading: false,
        numOfPosts: payload,
        postApirror: false,
      };

    case ActionKind.POST_API_FAILED:
      return {
        ...state,
        postDataLoading: false,
        postApirror: true,
      };

    case ActionKind.COMMETS_API_LOADING:
      return {
        ...state,
        commentsDataLoading: true,
      };

    case ActionKind.COMMENTS_API_SUCCESS:
      return {
        ...state,
        commentsDataLoading: false,
        numOfComments: payload,
        commentsApirror: false,
      };

    case ActionKind.COMMETS_API_FAILED:
      return {
        ...state,
        commentsDataLoading: false,
        numOfComments: payload,
        commentsApirror: true,
      };
    case ActionKind.ALBUMS_API_LOADING:
      return {
        ...state,
        albumsDataLoading: true,
      };

    case ActionKind.USER_WITH_POST_LOADING:
      return {
        ...state,
        userPostAPiLoading: true,
      };

    case ActionKind.USER_API_WITH_POST_SUCCESS:
      return {
        ...state,
        userPostAPiLoading: false,
        userWithPostData: payload,
        userPostAPiFailed: false,
      };

    case ActionKind.USER_API_WITH_POST_FAILED:
      return {
        ...state,
        userPostAPiLoading: false,
        userPostAPiFailed: true,
      };

    default:
      return state;
  }
};

export const initialState: dashboardState = {
  userDataLoading: false,
  numOfUsers: 0,
  userApirror: false,
  postDataLoading: false,
  numOfPosts: 0,
  postApirror: false,
  commentsDataLoading: false,
  numOfComments: 0,
  commentsApirror: false,
  albumsDataLoading: false,
  numOfAlbums: 0,
  albumsApirror: false,
};
