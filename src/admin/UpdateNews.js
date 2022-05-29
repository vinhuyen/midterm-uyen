import {useParams} from "react-router-dom";
const UpdateNews = () => {
    const params = useParams();
    return <div>{params.id}</div>
}
export default UpdateNews