import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface ILangguageProvider {
  children: ReactNode;
}

export enum LanguageEnum {
  PORTUGUESE = "portuguese",
  ENGLISH = "english",
}

interface LanguageContextType {
  selectedLanguage: LanguageEnum;
  setSelectedLanguage: Dispatch<SetStateAction<LanguageEnum>>;
}

const initialValue = {
  selectedLanguage: LanguageEnum.ENGLISH,
  setSelectedLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(initialValue);

export default function LanguageProvider({ children }: ILangguageProvider) {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageEnum>(
    LanguageEnum.ENGLISH
  );

  useEffect(() => {
    const userLangauge = require("detect-browser-language");
    userLangauge() == "pt-BR" && setSelectedLanguage(LanguageEnum.PORTUGUESE);
  }, []);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
