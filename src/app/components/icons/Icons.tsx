import { Props } from "./IconsProps";
import { BreedSvg } from "./svg/breed";
import { CalendarSvg } from "./svg/calendar";
import { HomeSvg } from "./svg/home";
import { LetterSvg } from "./svg/letter";
import { PinSvg } from "./svg/pin";
import { SearchSvg } from "./svg/search";
import { WebSvg } from "./svg/web";

export function Calendar(props: Props) {
  return (
    <>
      <CalendarSvg className={props.className} />
    </>
  );
}

export function Letter(props: Props) {
  return (
    <>
      <LetterSvg className={props.className} />
    </>
  );
}

export function Pin(props: Props) {
  return (
    <>
      <PinSvg className={props.className} />
    </>
  );
}

export function Breed(props: Props) {
  return (
    <>
      <BreedSvg className={props.className} />
    </>
  );
}

export function Home(props: Props) {
  return (
    <>
      <HomeSvg className={props.className} />
    </>
  );
}

export function Search(props: Props) {
  return (
    <>
      <SearchSvg className={props.className} />
    </>
  );
}

export function Web(props: Props) {
  return (
    <>
      <WebSvg className={props.className} />
    </>
  );
}
