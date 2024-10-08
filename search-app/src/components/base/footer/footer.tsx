import useTheme from '../../../hooks/useTheme-hook';
import styles from './footer-style.module.css';

function Footer() {
  const { theme } = useTheme();
  return (
    <div className={`${styles['footer-container']} ${styles[`${theme}`]}`}>
      <p>
        Powered By:{' '}
        <a
          className={`${styles['footer-links']} ${styles[`${theme}`]}`}
          target="_blank"
          href="https://pokeapi.co/"
          rel="noreferrer"
        >
          PokeApi
        </a>
      </p>
      <p>
        Author:{' '}
        <a
          className={`${styles['footer-links']} ${styles[`${theme}`]}`}
          target="_blank"
          href="https://github.com/LonelyBush"
          rel="noreferrer"
        >
          LonelyBush
        </a>
      </p>
    </div>
  );
}

export default Footer;
