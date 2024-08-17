import { FormEvent, useRef, useState } from 'react';
import * as yup from 'yup';
import Button from '../../components/ui/button/button';
import styles from '../../index.module.css';
import AutoComplete from '../../components/auto-complete-input/auto-complete-input';
import CheckBox from '../../components/ui/checkbox/checkbox';
import schema from '../../schema/schema';
import PasswordStrength from '../../components/password-strength-indicator/password-indicator';
import FormData from '../../Interface/interfaces';

function UncontrolledForm() {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLSelectElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const TC = useRef<HTMLInputElement>(null);
  const picture = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passStrength, setPassStrength] = useState<number>(0);

  const handleValidationSchema = async (formData: FormData) => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (valiErrors) {
      if (valiErrors instanceof yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        let strengthCounter = 0;
        valiErrors.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
            if (error.path === 'password') {
              strengthCounter += 1;
            }
          }
        });
        setErrors(newErrors);
        setPassStrength(strengthCounter);
      }
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!picture.current?.files) return;
    const formData = {
      name: name.current?.value,
      gender: gender.current?.value,
      age: age.current?.value,
      email: email.current?.value,
      country: country.current?.value,
      password: password.current?.value,
      confirmPassword: confirmPassword.current?.value,
      picture: picture.current.files,
      tc: TC.current?.checked,
    };
    const isValid = await handleValidationSchema(formData);

    if (isValid) {
      console.log(formData);
    }
  };
  return (
    <div className={styles.formMainSection}>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit} className={styles.formContent}>
        <label className={styles.inputWrapper} htmlFor="name">
          Name:
          <input
            className={styles.inputTextStyle}
            ref={name}
            id="name"
            name="name"
            type="text"
          />
          {errors.name && (
            <span className={styles.errorMes}>{errors.name}</span>
          )}
        </label>
        <label className={styles.inputWrapper} htmlFor="age">
          Age:
          <input
            ref={age}
            className={styles.inputTextStyle}
            name="age"
            id="age"
            type="text"
          />
          {errors.age && <span className={styles.errorMes}>{errors.age}</span>}
        </label>
        <label className={styles.inputWrapper} htmlFor="gender">
          Gender:
          <select
            ref={gender}
            className={styles.inputTextStyle}
            name="gender"
            id="gender"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
          {errors.gender && (
            <span className={styles.errorMes}>{errors.gender}</span>
          )}
        </label>
        <AutoComplete
          name="country"
          id="country"
          ref={country}
          errors={errors.country}
        />
        <label className={styles.inputWrapper} htmlFor="email">
          Email:
          <input
            ref={email}
            className={styles.inputTextStyle}
            name="email"
            id="email"
            type="text"
          />
          {errors.email && (
            <span className={styles.errorMes}>{errors.email}</span>
          )}
        </label>
        <label className={styles.inputWrapper} htmlFor="password">
          Password:
          <input
            ref={password}
            className={styles.inputTextStyle}
            name="password"
            id="password"
            type="password"
          />
          {errors.password && (
            <span className={styles.errorMes}>{errors.password}</span>
          )}
          {password.current?.value && errors.password && (
            <PasswordStrength strengthValue={passStrength} />
          )}
        </label>
        <label className={styles.inputWrapper} htmlFor="confirmPassword">
          Confirm Password:
          <input
            ref={confirmPassword}
            className={styles.inputTextStyle}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
          />
          {errors.confirmPassword && (
            <span className={styles.errorMes}>{errors.confirmPassword}</span>
          )}
        </label>
        <label className={styles.inputWrapper} htmlFor="picture">
          Upload picture:
          <input ref={picture} id="picture" name="picture" type="file" />
          {errors.picture && (
            <span className={styles.errorMes}>{errors.picture}</span>
          )}
        </label>

        <CheckBox
          ref={TC}
          id="tc"
          name="tc"
          label="Accept Terms and Conditions agreement"
          error={errors.tc === undefined ? '' : errors.tc}
        />

        <Button disabled={false} type="submit" onClick={() => {}}>
          Submit Form
        </Button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
