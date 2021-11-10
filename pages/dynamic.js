import SinglePost from '../components/single-post';


function Dynamic({ num, posts }) {
    return <div>
        Dynamic Number - {num}
        <div className="all_blogs">
            {
                posts.map(post => <SinglePost key={post.id} post={post} url="/blogs/"/>)
            }
        </div>
    </div>
}


export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json();
    return {
        props: {
            posts,
            num: Math.random()
        }
    }
}


export default Dynamic;