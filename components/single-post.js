import Link from 'next/link';


export default function SinglePost({ post ,url }){
    return <Link href={`${url}${post.id}`} ><div className="single_blog">
        <h4>{post.title}</h4>
        <div>{post.body}</div>
    </div>
    </Link>
}