import { ReactElement } from "react";

interface ITitleSection {
  children: ReactElement | string;
}

export default function TitleSection({ children }: ITitleSection) {
  return (
    <h2 className="relative z-0 mb-10 mt-2.5 flex w-full items-center gap-1 whitespace-nowrap font-mono text-2xl font-bold text-primary-secondary-100 before:mr-1 before:font-mono before:text-lg before:text-primary-primary before:content-['01.'] after:relative after:top-[1px] after:ml-1 after:block after:h-[1px] after:w-full after:bg-primary-secondary-200 after:opacity-30">
      {children}
    </h2>
  );
}
