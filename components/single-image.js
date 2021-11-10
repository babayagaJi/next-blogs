import Link from 'next/link';
export default function Singleimage({ image, url }) {
    return <Link href={`${url}${image.id}`} ><div className="single_blog">
        <h4>{image.author}</h4>
        <img className="imagepost" src={image.download_url} />
    </div>
    </Link>
}