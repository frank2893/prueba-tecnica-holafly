import { Props } from "../IconsProps";

export function PinSvg(props: Props) {
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
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="11" r="3" />{" "}
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  );
}