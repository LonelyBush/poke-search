import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button/button';
import styles from './main-page-style.module.css';

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.mainPageSection}>
      <h1>React Forms</h1>
      <div className={styles.btnSection}>
        <Button
          onClick={() => {
            navigate('/uncontrolled');
          }}
          type="button"
        >
          Uncontrolled Form
        </Button>
        <Button
          onClick={() => {
            navigate('/hook-form');
          }}
          type="button"
        >
          React hook Form
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
