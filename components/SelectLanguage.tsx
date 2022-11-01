import { useContext } from "react";
import { LanguageContext, LanguageEnum } from "../context/LanguageProvider";

export default function SelectLanguage() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  return (
    <select
      value={selectedLanguage}
      className="block w-max rounded-lg bg-transparent p-1.5 text-sm text-primary-text-navy-light outline-none"
      onChange={(event) =>
        setSelectedLanguage(event.target.value as LanguageEnum)
      }
    >
      <option
        value={LanguageEnum.PORTUGUESE}
        className="bg-primary-background-border text-primary-text-navy-light"
      >
        Portuguese
      </option>
      <option
        value={LanguageEnum.ENGLISH}
        className="bg-primary-background-border text-primary-text-navy-light"
      >
        English
      </option>
    </select>
  );
}
