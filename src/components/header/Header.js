import React from 'react';
import { Container, Content, Profile } from 'components/header/styles';
import { Link } from 'react-router-dom';
import { signOut } from 'store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import logo from 'assets/images/meetapp_logo.svg';

function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Logo MeetApp" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Raphael Carreiro</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
