import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./SearchInput.css";
import { Button } from "shared-components/Button";

type SearchInputProps = {
  setSearchTerm: (v: string) => void;
};

export function SearchInput({ setSearchTerm }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const timer = useRef<number | null> (null);

  useEffect(() => {
     timer.current = window.setTimeout(() => {
      setSearchTerm(searchValue);
    }, 700);

    return () => {timer.current !== null && window.clearTimeout(timer.current)};
  }, [searchValue, setSearchTerm]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      {timer.current !== null && window.clearTimeout(timer.current)}
      setSearchTerm(searchValue)
    }
  };

  const handleClick = () => {
    setSearchTerm(searchValue)
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search by title"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        className="search__button"
        text="Search"
        type="primary"
        onClick={handleClick}
      />
    </div>
  );
}
