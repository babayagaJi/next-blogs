import SinglePost from '../../components/single-post';
function Blogs({ posts }) {
    return <div className="all_blogs">
        {
            posts.map(post => {
                return <SinglePost key={post.id} post={post} url="/static-blogs/"/>
            })
        }
    </div>

}

//Execution on serve 
export async function getStaticProps({ query }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    console.log(`posts=>${posts.length}`)
    return {
        revalidate: 10,
        props: {
            posts
        }
    }
}

export default Blogs;