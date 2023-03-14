import axios from 'axios'

export const getPostsRequest = async () => {
   return axios.get('http://localhost:3000/posts')
}

export const createPostRequest = async (post) =>
   await axios.post('http://localhost:3000/posts', post);

/* eliminar tarea */
export const deletePostRequest = async (id) =>
   await axios.delete(`http://localhost:3000/posts/${id}`);

/* Mostrar tarea para editar */
export const getPostRequest = async (id) =>
   await axios.get(`http://localhost:3000/posts/${id}`);

/* Actualiza */
export const updatePostRequest = async (id, newFields) =>
   await axios.put(`http://localhost:3000/posts/${id}`, newFields);