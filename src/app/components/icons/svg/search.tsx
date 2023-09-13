import { Props } from "../IconsProps";

export function SearchSvg(props: Props) {
  return (
    <svg
      className={`${
        Boolean(props.className) ? props.className : "h-5 w-5"
      } text-black`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}