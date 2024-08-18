import { useSelector } from 'react-redux';
import styles from './forms-list-style.module.css';
import { RootState } from '../../store/store';

function FormsList() {
  const store = useSelector((state: RootState) => state.formsList);
  let pageRender;
  if (store.length === 0) {
    pageRender = <div className={styles.emptyStore}>Your store is empty</div>;
  } else {
    pageRender = (
      <>
        {store.map((elem, index) => {
          return (
            <div
              key={elem.name}
              className={`${styles.formListWrapper} ${index === store.length - 1 ? styles.latest : ''}`}
            >
              <img
                className={styles.formImageContainer}
                alt="form-icon"
                src={elem.picture}
              />
              <div className={styles.mainTextContent}>
                <div>
                  Form Type: <b>{elem.formType}</b>
                </div>
                <div>
                  Name: <b>{elem.name}</b>
                </div>
                <div>
                  Age: <b>{elem.age}</b>
                </div>
                <div>
                  Email: <b>{elem.email}</b>
                </div>
                <div>
                  Country: <b>{elem.country}</b>
                </div>
                <div>
                  Password: <b>{elem.password}</b>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div className={styles.formsListSection}>
      <h2>Forms List</h2>
      {pageRender}
    </div>
  );
}

export default FormsList;
