/*
 * Componente De Attributes 
 * este componente tiene elementos que son adcionales para el formulario 
 * como lo son:
 * 
 * Inputs de type ( radio ) para tener forma circular 
 * donde se puede eligir el genero de la persona que esta llenando el formulario con sus datos
 *
 * Inputs de type ( checkbox )
 * esto para poder: marcar / desmarcar un input 
 * con el fin de poder seleccionar que tipo de contenido es de interés para el usuario.
*/

import { useFormContext } from "react-hook-form";
import "../App.css"

const Attributes = () => {
  const { register } = useFormContext()
  return (
    <div className="containerAttributes">
      <label>Gender*</label>
      <div className="radioInputs">

        <p>
          <label>
            <input type="radio" {...register("gender")} value="Male" />

            <span className="custom-radio"></span>
            Male
          </label>
        </p>

        <p>
          <label>
            <input type="radio" {...register("gender")} value="Female" />
            <span className="custom-radio"></span>
            Female
          </label>
        </p>

        <p>
          <label>
            <input type="radio" {...register("gender")} value="Other" />
            <span className="custom-radio"></span>
            Other
          </label>
        </p>

      </div>

      <div className="containerCheckBoxInputs">
        <label>Choose your topics of interest</label>
        <div className="checkboxes">

          <p>
            <input type="checkbox" {...register("english")} />
            Front-end Programming
          </p>

          <p>
            <input type="checkbox" {...register("reactiveProgramming")} />
            Reactive Programming
          </p>

          <p>
            <input type="checkbox" {...register("interfaceDesign")} />
            Interface Design
          </p>

        </div>
      </div>
    </div>
  )
}

export default Attributes;
