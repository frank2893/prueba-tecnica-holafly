import Image from "next/image";
import { Breed } from "./components/icons/Icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col w-full items-center">
        <div>
          <Breed className="h-[10rem] w-[10rem]" />
        </div>
        <div>
          <span className="text-xl font-semibold">
            Prueba Tecnica para HolaFly
          </span>
        </div>
        <div>
          <span className="text-xl font-semibold">
            Sitio web en construcción
          </span>
        </div>
      </div>
    </main>
  );
}
