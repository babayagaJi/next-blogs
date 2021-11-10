import SingleImage from '../../components/single-image';


function Image(props) {
    console.log(props);
    return  <SingleImage image={props.image} url="/images/" />
}

Image.getInitialProps = async ({ query }) => {
    const { id } = query;
    const res = await fetch(`https://picsum.photos/id/${id}/info`)
    const image = await res.json()
    return { image }
}


export default Image;


