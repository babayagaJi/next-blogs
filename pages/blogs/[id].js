import SinglePost from '../../components/single-post';


function Blog(props) {
    return  <SinglePost post={props.post} />
}

Blog.getInitialProps = async ({ query }) => {
    const { id } = query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return { post }
}


export default Blog;


