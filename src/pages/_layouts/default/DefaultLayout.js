import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/header/Header';
import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
