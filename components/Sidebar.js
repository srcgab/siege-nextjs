import { SearchIcon} from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    /*Barra lateral esquerda*/
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">

      {/*Barra de pesquisa*/}
        <div className="flex items-center p-3 rounded-full  relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 "
            type="text"
            placeholder='Pesquise por um evento'
          />
        </div>
        {/*Notícias do Cefet - implementação futura*/}
      </div>
    </div>
  )
}
