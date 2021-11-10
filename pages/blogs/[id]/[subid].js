import { useRouter } from 'next/router';
function Subid() {
    const router = useRouter();
    console.log(router.query)
    const takeMeHome = () =>{
        router.replace("/")
    }
    return <div>
        SubId {router.query.id} {router.query.subid}
        <button onClick={takeMeHome}>Home</button>
    </div>

}



export default Subid;