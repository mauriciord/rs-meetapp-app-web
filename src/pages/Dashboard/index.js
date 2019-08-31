import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import { Container, Meetup, BtnNew } from './styles';

import {
  getMeetupRequest,
  newMeetupRequest
} from '../../store/modules/meetup/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às' h:mm'h",
          {
            locale: pt
          }
        )
      }));

      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function getMeetupDetails(id) {
    dispatch(getMeetupRequest(id));
  }

  function newMeetup() {
    dispatch(newMeetupRequest());
  }

  return (
    <Container>
      <header>
        <h4>Meus meetups</h4>
        <BtnNew to="/meetups/new" onClick={newMeetup}>
          <MdAddCircleOutline size={20} color="#fff" />
          <span>Novo Meetup</span>
        </BtnNew>
      </header>

      {meetups.length ? (
        <ul>
          {meetups.map(meetup => (
            <Meetup key={meetup.id}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.dateFormatted}</span>
                <Link
                  to={`/meetups/${meetup.id}/details`}
                  onClick={() => getMeetupDetails(meetup)}
                >
                  <MdChevronRight size={25} />
                </Link>
              </div>
            </Meetup>
          ))}
        </ul>
      ) : (
        <p>Você não cadastrou nenhuma Meetup.</p>
      )}
    </Container>
  );
}
