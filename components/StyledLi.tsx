interface IStyledLi {
  key: string;
  item: string;
}

export default function StyledLi({ key, item }: IStyledLi) {
  return (
    <li
      key={key}
      className="mb-2.5 before:pr-2.5 before:text-primary-primary before:content-['▹']"
    >
      {item}
    </li>
  );
}
