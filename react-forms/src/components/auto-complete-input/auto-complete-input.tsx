/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import styles from './auto-complete-input-style.module.css';
import { RootState } from '../../store/store';

interface AutocompleteHandle {
  value: string;
}

const AutoComplete = forwardRef<
  AutocompleteHandle,
  { name: string; id: string; errors: { [key: string]: string } }
>((props, ref) => {
  const data = useSelector((state: RootState) => state.countryList);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [hideSuggestions, setHideSuggestions] = useState<boolean>(true);
  const inputValue = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    value: inputValue.current?.value || '',
  }));

  const suggestionsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSuggestions(
      data.filter((suggestion) =>
        suggestion.startsWith(
          e.currentTarget.value.charAt(0).toUpperCase() +
            e.currentTarget.value.slice(1),
        ),
      ),
    );
  };

  const selectSuggestion = (elem: string) => {
    if (inputValue.current) {
      inputValue.current.value = elem.charAt(0).toUpperCase() + elem.slice(1);
      setHideSuggestions(true);
    }
  };

  return (
    <div className={styles.autoCompleteWrapper}>
      <label className={styles.inputWrapper} htmlFor="user-autocomplete">
        Country:
        <input
          id={props.id}
          name={props.name}
          type="text"
          className={styles.inputTextStyle}
          onChange={suggestionsHandler}
          ref={inputValue}
          onKeyUp={() => {
            if (suggestions.length === 0) {
              setHideSuggestions(true);
            } else {
              setHideSuggestions(false);
            }
          }}
        />
        {props.errors.country && (
          <span className={styles.errorMes}>*{props.errors.country}</span>
        )}
      </label>
      <ul
        className={`${styles.suggestionsSection} ${hideSuggestions ? styles.hide : ''}`}
      >
        {hideSuggestions
          ? null
          : suggestions.map((suggestion) => {
              return (
                <li
                  className={styles.suggestionsChild}
                  onClick={() => selectSuggestion(suggestion)}
                  key={suggestion}
                >
                  {suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}
                </li>
              );
            })}
      </ul>
    </div>
  );
});

export default AutoComplete;
