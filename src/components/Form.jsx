
/*
 * Componente Padre: Form
 * - Es el encargado de importar todos los componentes necesarios para tener la estructura correcta 
 * - Todos aquellos campos que necesitan una validación se realizó con el hook de useForm
 *   para validar el contenido del formulario
 * - Adicional al uso del hook useForm se utilizaron expresiones regulares para validar los campos 
 *   - Nombre , Apellido , Correo Electronico , Telefono
*/

import Inputs from "./Inputs";
import Attributes from "./Attributes";
import About from "./About";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css"
import NeobrutalButton from "./Button";

const Form = () => {

  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
    methods.reset();
    navigate("/success");
  }

  const handleReset = () => {
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="containerForm">
        <h2 className="titleForm">form in react</h2>
        <Inputs />
        <Attributes />
        <About />
        <div className="containerButtons">
          <NeobrutalButton type="submit">Submit</NeobrutalButton>
          <NeobrutalButton type="button" onClick={handleReset}>Reset</NeobrutalButton>
        </div>
      </form >
    </FormProvider>
  )
}

export default Form;
