import React from "react";
import { usePosts } from "../../context/PostProvider";
import { useNavigate } from 'react-router-dom'

function PostCard({ post }) {

   const { deletePost } = usePosts();
   const navigate = useNavigate();

   return (
      <div className="max-w-md bg-white rounded overflow-hidden shadow-lg relative">
         <img className="w-full object-cover h-52" src={post.image_url} alt="cargando ..." />
         <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <div className="px-4 lg:px-0 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
               <span className="text-gray-700 text-base">
                  {post.description}
               </span>
            </div>
         </div>
         <div className="flex items-center pl-6 mb-3">
            <img className="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of author" />
            <div className="text-sm">
               <p className="text-gray-900 leading-none">{post.author}</p>
               <p className="text-gray-600">Publicado: {post.createdAt.substring(0, 10)}</p>
            </div>
         </div>
         <div className="px-6 pt-3 pb-3 flex gap-3 float-right bg-gray-50 w-full">
            <button className='bg-green-500 inline-block rounded px-2 py-1 text-white hover:bg-green-400' onClick={() => navigate(`/edit/${post.id}`)}>Editar</button>
            <button className='bg-red-500 rounded inline-block px-2 py-1 text-white hover:bg-red-400 ' onClick={() => deletePost(post.id)}>Eliminar</button>
         </div>
      </div>
   )
}

export default PostCard