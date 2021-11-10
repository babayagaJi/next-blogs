import { useRouter } from 'next/router';

export default function MyBlog(...arr) {
    const { error } = useRouter().query;
    console.log({error,arr});
    return <div>
        {
            error && error.map(n=><span key={n}>{n}</span>)
        }
    </div>

}