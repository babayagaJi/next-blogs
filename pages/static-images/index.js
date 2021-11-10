import SingleImage from '../../components/single-image';
function Blogs({ images }) {
    return <div className="all_blogs">
        {
            images.map(image => {
                return <SingleImage key={image.id} image={image} url="/static-images/"/>
            })
        }
    </div>

}

//Execution on serve 
export async function getStaticProps({ query }) {
    const res = await fetch(`https://picsum.photos/v2/list`)
    const images = await res.json()
    console.log(`images=>${images.length}`)
    return {
        revalidate: 10,
        props: {
            images
        }
    }
}

export default Blogs;