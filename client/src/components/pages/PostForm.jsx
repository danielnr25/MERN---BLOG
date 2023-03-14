import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from '../../context/PostProvider';


function PostForm() {

  const { createPost, getPost, updatePost } = usePosts();
  const [post, setPost] = useState({
    title: "",
    description: "",
    author: "",
    image_url: "",
  })

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      if (params.id) {
        const post = await getPost(params.id)
        setPost({
          title: post.title,
          description: post.description,
          author: post.author,
          image_url: post.image_url,
        })
      }
    };
    loadPost();
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="text-4xl text-blue-600 font-bold tracking-wider text-center py-5">{params.id ? "Editar Publicación" : "Crear Publicación"}</h1>
      <Formik
        initialValues={post}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updatePost(params.id, values);
          } else {
            await createPost(values);
          }
          navigate('/')
          // actions.resetForm();
          /* actualizando */
          setPost({
            title: "",
            description: "",
            author: "",
            image_url: ""
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="bg-gray-200 rounded-md p-4 max-w-md mx-auto mt-10">
            <label className="block py-2 font-medium">Titulo</label>
            <input
              type="text"
              name="title"
              placeholder="Ingrese el titulo de la publicación"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.title}
            />
            <label className="block py-2 font-medium">Descripción</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Descripción de su publicación ...!"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.description}
            ></textarea>
            <label className="block py-2 font-medium">Autor</label>
            <input
              type="text"
              name="author"
              placeholder="Autor de la publicación"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.author}
            />
            <label className="block py-2 font-medium">Imagen</label>
            <input
              type="text"
              name="image_url"
              placeholder="Ingrese la url de la imagen para publicación"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.image_url}
            />
            <div className="py-2 mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-600 px-2 py-1 text-white w-full rounded-md hover:bg-indigo-500"
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PostForm