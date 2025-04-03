import Image from "next/image";


import Calendar from "./pages/calendar";
import { Generator } from "./pages";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-gray-700 py-5 text-white "> Nawigacja </div>


      <div className="w-1/2 mx-auto mt-10"><Generator /></div>

      {/* <div className="w-full"><Calendar /></div> */}


    </div>


  );
}
