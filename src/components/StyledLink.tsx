interface IStyledLink {
  url: string;
  name: string;
  target: string;
}

export default function StyledLink({ url, name, target }: IStyledLink) {
  return (
    <span>
      <a
        href={url}
        target={target && target}
        className="relative text-primary-text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary-text-primary after:transition-all hover:after:origin-bottom-left hover:after:scale-100"
      >
        {name}
      </a>
    </span>
  );
}
