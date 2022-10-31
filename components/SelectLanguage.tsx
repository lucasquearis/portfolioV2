import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";

export default function SelectLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      className="block w-max rounded-lg bg-transparent p-1.5 text-sm text-primary-text-navy-light outline-none"
      onChange={(event) => setLanguage(event.target.value)}
    >
      <option
        value="portuguese"
        className="bg-primary-background-border text-primary-text-navy-light"
      >
        Portuguese
      </option>
      <option
        value="english"
        className="bg-primary-background-border text-primary-text-navy-light"
      >
        English
      </option>
    </select>
  );
}
