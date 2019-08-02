import React from 'react';
import { Container, Content } from 'components/header/styles';
import logo from 'assets/images/meetapp_logo.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo MeetApp" />
      </nav>
      </Content>
    </Container>
  )
}

export default Header;
