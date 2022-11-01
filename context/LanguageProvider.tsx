import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
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

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
