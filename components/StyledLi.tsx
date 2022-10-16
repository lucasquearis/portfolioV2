interface IStyledLi {
  item: string;
}

export default function StyledLi({ item }: IStyledLi) {
  return (
    <li className="mb-2.5 before:pr-2.5 before:text-primary-primary before:content-['▹']">
      {item}
    </li>
  );
}
