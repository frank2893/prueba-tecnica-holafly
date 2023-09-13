import { Props } from "../IconsProps";

export function WebSvg(props: Props) {
  return (
    <svg
      className={`${
        Boolean(props.className) ? props.className : "h-5 w-5"
      } text-black`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />{" "}
      <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
      <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
      <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  );
}