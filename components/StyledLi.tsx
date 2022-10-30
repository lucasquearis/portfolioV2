interface IStyledLi {
  item: string;
}

export default function StyledLi({ item }: IStyledLi) {
  return (
    <li className="mb-2.5 font-mono before:pr-2.5 before:text-primary-text-primary before:content-['▹']">
      {item}
    </li>
  );
}
