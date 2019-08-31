import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { parseISO } from 'date-fns';

import { MdAddCircleOutline } from 'react-icons/md';
import DatePicker from './DatePicker';
import { Container } from './styles';

import BannerInput from './BannerInput';

import {
  createMeetupRequest,
  updateMeetupRequest
} from '../../store/modules/meetup/actions';

export default function Meetup() {
  const dispatch = useDispatch();

  const meetup = useSelector(state => {
    if (state.meetup.meetup) {
      return {
        ...state.meetup.meetup,
        date: parseISO(state.meetup.meetup.date)
      };
    }
  });

  function handleSubmit(data) {
    if (meetup) {
      const newData = {
        id: meetup.id,
        ...data
      };
      dispatch(updateMeetupRequest(newData));
    } else {
      dispatch(createMeetupRequest(data));
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          name="description"
          type="text"
          multiline
          placeholder="Descrição completa"
        />
        <DatePicker name="date" placeholder="Data do Meetup" />
        <Input name="location" type="text" placeholder="Localização" />
        <div>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            <span>{meetup ? 'Editar' : 'Salvar'} meetup</span>
          </button>
        </div>
      </Form>
    </Container>
  );
}
