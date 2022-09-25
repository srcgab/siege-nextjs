import MenuItems from "./MenuItems";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function MenuBar() {
  
    return (
    <div className="hidden sm:flex flex-col pt-2 xl:items-start fixed h-full xl:ml-24">
      {/*Logo*/}
      <div className="">
        <h1 className="text-3xl text-pink-900 font-['Iceberg']" >
          SIEGE
        </h1>
      </div>

        {/*Menu*/}
        <div className="mt-4 mb-2.5 xl:items-start flex-shrink-0">
        <MenuItems texto="Inicial" Icon={HomeIcon} active/>
        <MenuItems texto="Perfil" Icon={UserCircleIcon}/>
        </div>

        {/*Botão*/}

        <button className="bg-pink-700 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
          Evento
        </button>


        {/*Usuário/Sair*/}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
          <img
              src = './imgs/1.png'
              alt="user-img"
              className="h-10 w-10 rounded-full xl:mr-2"
          />
          <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">Administrador</h4>
            <p className="text-gray-500">@abluble</p>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
    </div>
  )
}
