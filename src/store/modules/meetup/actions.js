export function getMeetupRequest(meetup) {
  return {
    type: '@meetup/DETAILS_REQUEST',
    payload: { meetup }
  };
}

export function newMeetupRequest() {
  return {
    type: '@meetup/NEW_REQUEST'
  };
}

export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { data }
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_SUCCESS',
    payload: { meetup }
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_REQUEST',
    payload: { data }
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_SUCCESS',
    payload: { meetup }
  };
}

export function removeMeetupRequest(id) {
  return {
    type: '@meetup/REMOVE_REQUEST',
    payload: { id }
  };
}

export function removeMeetupSuccess() {
  return {
    type: '@meetup/REMOVE_SUCCESS'
  };
}

export function meetupFailure() {
  return {
    type: '@meetup/FAILURE'
  };
}
