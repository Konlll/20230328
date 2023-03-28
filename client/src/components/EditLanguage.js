import { useNavigate, useParams } from "react-router-dom";

const EditLanguage = () => {
    const { id } = useParams()
    return (
        <>
            Edit Language {id}
        </>
    );
}
 
export default EditLanguage;