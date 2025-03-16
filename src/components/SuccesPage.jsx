
/* 
 * Componente de SuccesPage
 * Pagina donde se redirecciona a el usuario despues de haber enviado los datos 
 * del formulario correctamente para informar que el estado del envío de sus datos fue exitoso
*/

import { useNavigate } from "react-router-dom";
import NeobrutalButton from "./Button";
import imageSuccesfully from "../assets/Designer.jpeg"

const SuccesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="containerSuccessfully">
      <img src={imageSuccesfully} alt="logo succesfully" className="imgSuccessfully" />
      <span>Form Submited Succesfully!</span>
      <div>
        <NeobrutalButton onClick={() => navigate("/")}>Go Back!</NeobrutalButton>
      </div>
    </div>
  )
}

export default SuccesPage;
