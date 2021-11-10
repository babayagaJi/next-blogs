import Link from 'next/link';
import Image from 'next/image';

export default function Singleimage({ image, url }) {
    return <Link href={`${url}${image.id}`} ><div className="single_blog">
        <h4>{image.author}</h4>
        <div className={'image-container'}>
            <Image src={image.download_url} layout="fill" className={'image'} />
        </div>
    </div>
    </Link>
}