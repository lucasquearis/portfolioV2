import { ReactElement } from "react";

interface ITitleSection {
  children: ReactElement | string;
  number: string;
}

export default function TitleSection({ children, number }: ITitleSection) {
  return (
    <h2
      className={`${number} relative z-0 mb-10 mt-2.5 flex w-full items-center gap-1 whitespace-nowrap font-mono text-xl font-bold text-primary-text-navy-light before:mr-1 before:font-mono before:text-lg before:text-primary-text-primary after:relative after:top-[1px] after:ml-1 after:block after:h-[1px] after:w-full after:bg-primary-text-navy-navy after:opacity-30 md:text-2xl`}
    >
      {children}
    </h2>
  );
}
