/*
 * Componente About
 * Se utiliza un elemento <textarea>
 * y se pone como un campo opcional dentro del formulario para que se pueda poner
 * una opinión personal
*/

import { useFormContext } from "react-hook-form";
import "../App.css"

const About = () => {
  const { register } = useFormContext();
  return (
    <div className="containerAbout">
      <label>About</label>
      <div>
        <textarea rows="" cols="" placeholder="About your self" {...register("about")}></textarea>
      </div>
    </div>
  )
}

export default About;
