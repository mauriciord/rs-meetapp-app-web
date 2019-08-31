import produce from 'immer';

const INITIAL_STATE = {
  meetup: null
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/NEW_REQUEST': {
        draft.meetup = null;
        break;
      }
      case '@meetup/DETAILS_REQUEST': {
        draft.meetup = action.payload.meetup;
        break;
      }
      case '@meetup/CREATE_SUCCESS': {
        draft.meetup = action.payload.meetup;
        break;
      }
      case '@meetup/UPDATE_SUCCESS': {
        draft.meetup = action.payload.meetup;
        break;
      }
      case '@meetup/REMOVE_SUCCESS': {
        draft.meetup = null;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.meetup = null;
        break;
      }
      default:
    }
  });
}
