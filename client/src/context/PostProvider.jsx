import { useContext, useState } from "react";
import { getPostsRequest, deletePostRequest, createPostRequest, getPostRequest, updatePostRequest } from "../api/post.api";
import { PostContext } from "./PostContext";


export const usePosts = () => {
   const context = useContext(PostContext);
   if (!context) {
      throw new Error("El usePost no se encuentra dentro PostContextProvider")
   }
   return context
}


const PostContextProvider = ({ children }) => {

   const [posts, setPosts] = useState([]);

   async function loadPosts() {
      const response = await getPostsRequest()
      setPosts(response.data)
   }

   /* ELIMINAR PUBLICACIONES */
   const deletePost = async (id) => {
      try {
         const response = await deletePostRequest(id);
         setPosts(posts.filter(post => post.id !== id))
      }
      catch (error) {
         console.error(error)
      }
   }

   /* CREAR PUBLICACIONES */
   const createPost = async (post) => {
      try {
         await createPostRequest(post)
         // setTasks([...task, response.data])
      } catch (error) {
         console.error(error)
      }
   }

   /* ACTUALIZAR TAREA */
   const getPost = async (id) => {
      try {
         const response = await getPostRequest(id);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   }

   const updatePost = async (id, newFields) => {
      try {
         const response = await updatePostRequest(id, newFields);
         console.log(response);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <PostContext.Provider value={{ posts, loadPosts, deletePost, createPost, getPost, updatePost }}>
         {children}
      </PostContext.Provider>
   )

}

export default PostContextProvider