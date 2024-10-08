import { useNavigate } from '@remix-run/react';
import Button from '../../ui/button/button';
import pokeLogo from '../../../assets/pics/poke-search-logo.png';
import useTheme from '../../../hooks/useTheme-hook';
import styles from './welcome-page.module.css';

function WelcomeContent() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className={styles['welcome-page-container']}>
      <img src={pokeLogo} alt="poke-logo" />
      <p>
        The Poke Search App is a web application that allows users to explore
        and retrieve detailed information about Pokémon. The app provides an
        intuitive and user-friendly interface for searching for any Pokémon by
        name or Pokédex number. Upon searching, users can view key data about
        each Pokémon, including stats, types, abilities, evolutions, and more.
      </p>
      <Button
        onClick={() => {
          navigate('/page/1');
        }}
        theme={theme}
        btnType="button"
      >
        Start
      </Button>
    </div>
  );
}

export default WelcomeContent;
