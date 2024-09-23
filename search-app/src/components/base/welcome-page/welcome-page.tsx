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
      <p>Description about app </p>
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
