
import { useRouter } from 'next/router'
import SinglePost from '../../components/single-post';

//Execution on server // it run on build time
export async function getStaticProps({ params: query }) {
    const { id } = query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    console.log(`${Math.random()} - ${post.id}`);
    return {
        revalidate: 5,
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
    console.log(paths)
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: true }
}

function Blog(props) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading....</div>
    }

    // console.log({ props, router });

    return <div>
        <SinglePost key={props.post.id} post={props.post}/>
    </div>
}

export default Blog;


