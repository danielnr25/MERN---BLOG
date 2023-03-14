import { useEffect } from 'react'
import { usePosts } from '../../context/PostProvider'
import PostCard from '../blog/PostCard';

function PostPage() {

  const { posts, loadPosts } = usePosts()
  useEffect(() => {
    loadPosts()
  }, []);

  function renderMain() {

    if (posts.length === 0) {
      return <h1 className='text-gray-800 text-4xl text-center font-bold py-5'>No hay publicaciones disponibles</h1>
    }
    return posts.map((post) => <PostCard post={post} key={post.id} />);
  }

  return (
    <div>
      <h1 className='text-gray-800 text-4xl text-center font-bold py-5  tracking-wide'>Listado de publicaciones</h1>
      <div className='grid lg:grid-cols-3 gap-x-4 gap-y-6 md:grid md:grid-cols-2 sm:grid grid-cols-1'>
        {renderMain()}
      </div>
    </div>
  )
}

export default PostPage