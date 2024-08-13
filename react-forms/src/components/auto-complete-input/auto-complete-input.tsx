/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ChangeEvent, useRef, useState } from 'react';
import styles from './auto-complete-input-style.module.css';

const data = ['america', 'belarus', 'russia'];

function AutoComplete() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [hideSuggestions, setHideSuggestions] = useState<boolean>(true);
  const inputValue = useRef<HTMLInputElement>(null);

  const suggestionsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setHideSuggestions(false);
    setSuggestions(
      data.filter((suggestion) => suggestion.startsWith(e.currentTarget.value)),
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
          name="user-autocomplete"
          type="text"
          className={styles.inputTextStyle}
          onChange={suggestionsHandler}
          ref={inputValue}
        />
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
}

export default AutoComplete;
