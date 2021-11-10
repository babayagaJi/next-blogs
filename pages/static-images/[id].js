import SingleImage from '../../components/single-image';
import { useRouter } from 'next/router'


//Execution on server // it run on build time
export async function getStaticProps({ params: query }) {
    const { id } = query;
    const res = await fetch(`https://picsum.photos/id/${id}/info`)
    const image = await res.json()
    console.log(`${Math.random()} - ${image.id}`);
    return {
        revalidate: 5,
        props: {
            image
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://picsum.photos/v2/list')
    const images = await res.json()

    // Get the paths we want to pre-render based on images
    const paths = images.map((image) => ({
        params: { id: image.id.toString() },
    }))
    console.log(paths)

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: true }
}

function Image(props) {
    console.log(props);

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading....</div>
    }

    return <div className="single_image_wrapper"> <SingleImage image={props.image} url="/static-images/" /></div>
}



export default Image;


