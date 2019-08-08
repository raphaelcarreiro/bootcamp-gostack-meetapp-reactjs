import React, { useEffect, useState} from 'react';
import Banner from 'pages/meetup/banner/Banner';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateRequest } from 'store/modules/meetup/actions';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import DatePicker from 'components/datepicker/DatePicker';
import {Form, Input } from '@rocketseat/unform';
import api from 'services/api';
import { parseISO } from 'date-fns';
import { MdCancel } from 'react-icons/md';
import { Container, ImageContainer } from './styles';


const schema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  date: Yup.date(),
  location: Yup.string(),
  file_id: Yup.number(),
});

function UpdateMeetup({match}) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const loading = useSelector(state => state.meetup.loading);
  const [meetup, setMeetup] = useState({
    id,
    title: '',
    description: '',
    date: null,
    location: '',
    file_id: '',
  });

  useEffect(() => {
    api
      .get(`meetups/${id}`)
      .then(response => {
        if (response.status === 200) {
          setMeetup({
            ...response.data,
            date: parseISO(response.data.date),
          });
        }
      })
      .catch(() => {
        toast.error('Não foi possível carregar o meetup');
      });
  }, [id]);

  function handleSubmit(data) {
    dispatch(updateRequest(id, data));
  }

  function handleClickRemoveImage(){
    setMeetup({
      ...meetup,
      file: null,
    })
  }


  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        {meetup.file ? (
          <ImageContainer>
            <div>
              <button type="button" onClick={handleClickRemoveImage}><MdCancel size={44} color='#fff' /></button>
            </div>
            <img src={meetup.file.url} alt={meetup.title} />
          </ImageContainer>
         ) : <Banner name="file_id" /> }
        <Input name="title" autoComplete="off" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição" multiline />
        <DatePicker name="date" />
        <Input autoComplete="off" name="location" type="text" placeholder="Localização" />
          <button disabled={loading} type="submit">{loading ? 'Aguarde...' : 'Salvar'}</button>
      </Form>
    </Container>
  );
}

UpdateMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};

export default UpdateMeetup;
