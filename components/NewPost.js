import { PhotographIcon} from '@heroicons/react/outline'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { db } from "../firebase"
import { async } from '@firebase/util'

/*Criar novo post*/
export default function Input() {
    const [input, setInput] = useState("");

    const sendPost = async() => {
        const docRef = await addDoc(collection(db, "posts"), {
            text: input,
    });

  return (
    <div  className="flex border-b border-gray-200 p-3 space-x-3">
        <img
        src='././imgs/1.png'
        alt='user-img'
        className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95'
        />
        <div className="w-full divide-y divide-gray-200"> 
           <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                 rows="2"
                 placeholder="Publique um novo evento">

                 {/*escreve no console*/}
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 </textarea>
           </div>
           <div className="flex items-center justify-between pt-2.5">
                <div className="flex" >
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-white hover:bg-pink-100"/>
                </div>
           </div>

            {/*evento de clique e 'função' para não deixar postar se não houver nada escrito*/}
           <button onClick={sendPost} disabled={!input.trim()} className="bg-pink-400 px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
                Postar
            </button>
        </div>

    </div>
  )
}
}
