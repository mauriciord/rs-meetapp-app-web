import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { parseISO } from 'date-fns';

import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import {
  Container,
  BtnEdit,
  BtnCancel,
  Banner,
  Description,
  Date,
  Location
} from './styles';

import { removeMeetupRequest } from '../../store/modules/meetup/actions';

export default function Details() {
  const dispatch = useDispatch();

  const meetup = useSelector(state => {
    if (state.meetup.meetup) {
      return {
        ...state.meetup.meetup,
        date: parseISO(state.meetup.meetup.date)
      };
    }
  });

  async function handleDelete(id) {
    dispatch(removeMeetupRequest(id));
  }

  return (
    <Container>
      <header>
        <h4>{meetup.title}</h4>
        <div className="buttons">
          <BtnEdit to={`/meetups/${meetup.id}/edit`}>
            <MdEdit size={20} color="#fff" />
            <span>Editar</span>
          </BtnEdit>

          <BtnCancel onClick={() => handleDelete(meetup.id)}>
            <MdDeleteForever size={20} color="#fff" />
            <span>Cancelar</span>
          </BtnCancel>
        </div>
      </header>
      <Banner src={meetup.banner && meetup.banner.url} alt={meetup.title} />
      <Description>{meetup.description}</Description>
      <div>
        <Date>
          <MdEvent size={20} />
          <span>{meetup.dateFormatted}</span>
        </Date>
        <Location>
          <MdPlace size={20} />
          <span>{meetup.location}</span>
        </Location>
      </div>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    }).isRequired
  }).isRequired
};
