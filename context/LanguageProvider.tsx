import { createContext, ReactNode, useState } from "react";

interface ILangguageProvider {
  children: ReactNode;
}

interface LanguageContextType {
  language: string;
  setLanguage: (newState: string) => void;
}

const initialValue = {
  language: "english",
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(initialValue);

export default function LanguageProvider({ children }: ILangguageProvider) {
  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
