import { PhotographIcon } from "@heroicons/react/outline";
import Perfil from "./imgs/1.png";
/*Criar novo post*/
export default function Input() {

  return (
    <div className="flex  border-b border-gray-200 p-3 space-x-3">
        <img className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95" src={Perfil} alt="img-profile"/>
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-600 tracking-wide min-h-[50px] text-gray-700"
                rows="2"
                placeholder="Pesquise por um evento"
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex">
                    <PhotographIcon className="h-10 w-10 text-fuchsia-700 hoverEffect p-2 text hover:purple-800" />
                </div>
                <button className="bg-pink-900 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:purple-800 disabled:opacity-50">
                    Postar
                </button>
            </div>
        </div>
    </div>

  )

}
