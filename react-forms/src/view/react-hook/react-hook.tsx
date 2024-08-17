import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../schema/schema';
import styles from '../../index.module.css';
import Button from '../../components/ui/button/button';
import CheckBox from '../../components/ui/checkbox/checkbox';
import AutoComplete from '../../components/auto-complete-input/auto-complete-input';

type FormData = yup.InferType<typeof schema>;

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { tc: false },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.formMainSection}>
      <h1>Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContent}>
        <label className={styles.inputWrapper} htmlFor="name">
          Name:
          <input className={styles.inputTextStyle} {...register('name')} />
          <span className={styles.errorMes}>{errors.name?.message}</span>
        </label>
        <label className={styles.inputWrapper} htmlFor="age">
          Age:
          <input className={styles.inputTextStyle} {...register('age')} />
          <span className={styles.errorMes}>{errors.age?.message}</span>
        </label>
        <label className={styles.inputWrapper} htmlFor="gender">
          Gender:
          <select className={styles.inputTextStyle} {...register('gender')}>
            <option>Male</option>
            <option>Female</option>
          </select>
          <span className={styles.errorMes}>{errors.gender?.message}</span>
        </label>
        <AutoComplete
          {...register('country')}
          id="country"
          name="country"
          errors={
            errors.country?.message === undefined ? '' : errors.country.message
          }
        />
        <label className={styles.inputWrapper} htmlFor="email">
          Email:
          <input
            {...register('email')}
            className={styles.inputTextStyle}
            name="email"
            id="email"
            type="text"
          />
          <span className={styles.errorMes}>{errors.email?.message}</span>
        </label>
        <label className={styles.inputWrapper} htmlFor="password">
          Password:
          <input
            {...register('password')}
            className={styles.inputTextStyle}
            name="password"
            id="password"
            type="password"
          />
          <span className={styles.errorMes}>{errors.password?.message}</span>
        </label>
        <label className={styles.inputWrapper} htmlFor="confirmPassword">
          Confirm Password:
          <input
            {...register('confirmPassword')}
            className={styles.inputTextStyle}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
          />
          {errors.confirmPassword && (
            <span className={styles.errorMes}>
              {errors.confirmPassword?.message}
            </span>
          )}
        </label>
        <label className={styles.inputWrapper} htmlFor="picture">
          Upload picture:
          <input
            {...register('picture')}
            id="picture"
            name="picture"
            type="file"
          />
          <span className={styles.errorMes}>{errors.picture?.message}</span>
        </label>
        <CheckBox
          {...register('tc')}
          id="tc"
          name="tc"
          label="Accept Terms and Conditions agreement"
          error={errors.tc?.message === undefined ? '' : errors.tc.message}
        />

        <Button
          disabled={false}
          type="submit"
          onClick={() => {
            console.log(errors);
          }}
        >
          Submit Form
        </Button>
      </form>
    </div>
  );
}

export default HookForm;
