import {
    DotsHorizontalIcon,
  } from "@heroicons/react/outline";
  import Moment from "react-moment";
  import {
    collection,
    doc,
  } from "firebase/firestore";
  import { db, storage } from "../firebase";

  
  export default function Post({ post, id }) {
  
    return (
      //estrutura do post
      <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* user img*/}
        <img
          className="h-11 w-11 rounded-full mr-4"
          src={post.userImg}
          alt="user-img"
        />

        {/* lado direito */}
        <div className="flex-1">
          {/* header */}
          <div className="flex items-center justify-between">
            {/*user infos e data*/}
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                {post.name}
              </h4>
  
              <span className="text-sm sm:text-[15px] hover:underline">
                {post.timestamp}
              </span>
            </div>
  
            {/* icone 3 pontinhos */}
            <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg--100 hover:text-fuchsia-500 p-2 " />
          </div>
  
          {/*texto do post */}
  
          <p
            onClick={() => router.push(`/posts/${id}`)}
            className="text-gray-800 text-[15px sm:text-[16px] mb-2"
          >
            {post.text}
          </p>
  
          {/* imagem do post */}
  
          <img
            onClick={() => router.push(`/posts/${id}`)}
            className="rounded-2xl mr-2"
            src={post.image}
            alt="post-img"
          />

          {/*icon e seletor de tag -implementação-*/}
          <div className="">

          </div>

        </div>
      </div>
    );
  }