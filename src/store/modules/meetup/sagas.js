import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import {
  createMeetupSuccess,
  updateMeetupSuccess,
  removeMeetupSuccess,
  meetupFailure
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, 'meetups', data);

    toast.success('Meetup criada com sucesso');

    history.push('/dashboard');
    yield put(createMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao salvar o Meetup, verifique seus dados');
    yield put(meetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.put, `meetups/${data.id}`, data);

    toast.success('Meetup atualizada com sucesso');
    yield put(updateMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao atualizar o Meetup, verifique seus dados');
    yield put(meetupFailure());
  }
}

export function* removeMeetup({ payload }) {
  try {
    const { id } = payload;
    yield api.delete(`/meetups/${id}`);
    toast.success('Meetup cancelado com sucesso');
    history.push('/dashboard');
    yield put(removeMeetupSuccess());
  } catch (err) {
    toast.error('Erro ao cancelar meetup');
    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_REQUEST', updateMeetup),
  takeLatest('@meetup/REMOVE_REQUEST', removeMeetup)
]);
