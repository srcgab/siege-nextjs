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
      <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* user image */}
        <img
          className="h-11 w-11 rounded-full mr-4"
          src={post?.data()?.userImg}
          alt="user-img"
        />
        {/* right side */}
        <div className="flex-1">
          {/* Header */}
  
          <div className="flex items-center justify-between">
            {/* post user info */}
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                {post?.data()?.name}
              </h4>
              <span className="text-sm sm:text-[15px]">
                @{post?.data()?.username} -{" "}
              </span>
              <span className="text-sm sm:text-[15px] hover:underline">
                <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
              </span>
            </div>
  
            {/* dot icon */}
            <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
          </div>
  
          {/* post text */}
  
          <p
            onClick={() => router.push(`/posts/${id}`)}
            className="text-gray-800 text-[15px sm:text-[16px] mb-2"
          >
            {post?.data()?.text}
          </p>
  
          {/* post image */}
  
          <img
            onClick={() => router.push(`/posts/${id}`)}
            className="rounded-2xl mr-2"
            src={post?.data()?.image}
            alt=""
          />

        </div>
      </div>
    );
  }