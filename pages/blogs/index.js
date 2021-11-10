import SinglePost from '../../components/single-post';
function Blogs({ posts }) {
    return <div className="all_blogs">
        {
            posts.map(post => {
                return <SinglePost key={post.id} post={post} url="/blogs/"/>
            })
        }
    </div>

}

Blogs.getInitialProps = async ({ query }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json();
    return { posts }
}


export default Blogs;