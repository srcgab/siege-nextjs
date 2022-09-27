import { CalendarIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { db } from "../firebase";
import Input from "./NewPost";
import Post from "./Post";

export default function Feed() {
  const posts = [{
    id: "1",
    name: "Admin",
    userImg: "https://media.istockphoto.com/vectors/yellow-newborn-chicken-emoji-vector-illustration-vector-id1389496400?s=612x612",
    img: "https://media.istockphoto.com/photos/young-asian-man-with-eyes-closed-enjoying-music-over-headphones-while-picture-id1347685599?s=612x612",
    text: "DIGA NÃO AS DROGAS",
    timestamp: "2 min atras"
  },
  {
    id: "1",
    name: "Admin",
    userImg: "https://media.istockphoto.com/vectors/yellow-newborn-chicken-emoji-vector-illustration-vector-id1389496400?s=612x612",
    img: "https://media.istockphoto.com/photos/young-asian-man-with-eyes-closed-enjoying-music-over-headphones-while-picture-id1347685599?s=612x612",
    text: "DIGA NÃO AS DROGAS",
    timestamp: "2 min atras"
  },
    

]
  
  return (
<div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-x1 text-pink-900 font-bold cursor-pointer">Eventos</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <CalendarIcon className="h-5 text-pink-900" />
        </div>
      </div>
      <Input />
      {/*<AnimatePresence>*/}
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post} />
        
        ))}
      {/*<AnimatePresence/>*/}
    </div>
  );
}