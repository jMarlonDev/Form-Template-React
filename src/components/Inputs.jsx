

/* 
 * Componente de los Inputs individual
 * - Se define la estructura y validaciones que cada input va a tener dentro del formulario 
 *
 * - Validación con el hook useForm y expresiones regulares para cada input individual
 *
 * - Creación del handle encargado de enviar los datos del formulario al hacer un click en el boton de ( Submit )
 *
 * - Creación de la funcion encargada de transformar el contenido que se ingrese en los dos primeros campos del formulario 
 *   campo Name , lastName
 *   se toma el contenido que se ingrese en estos campos y se trasnforma el texto con la primero letra de cada palabra 
 *   a mayúscula solo para los dos primeros inputs.
*/

import { useFormContext } from "react-hook-form";
import "../App.css";


const Inputs = () => {
  const { register, watch, setValue, formState: { errors } } = useFormContext();

  const firstName = watch("firstName");
  const lastName = watch("lastName");

  const capitalizeText = (value) => {
    return value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleFirstName = (event) => {
    const value = event.target.value;
    const transformedText = capitalizeText(value);
    setValue("firstName", transformedText);
  };

  const handleLastName = (event) => {
    const value = event.target.value;
    const transformedText = capitalizeText(value);
    setValue("lastName", transformedText);
  };

  return (
    <div className="containerInputs">
      <div className="divInput">
        <label className="titleinput">First Name*</label>
        <input
          className="contentinput"
          {...register("firstName", {
            required: 'Name is required',
            pattern: {
              value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
              message: "Enter a valid name",
            },
          })}
          placeholder="Enter First Name"
          onChange={handleFirstName}
        />
        {errors.firstName && (
          <span style={{ color: 'red' }}>{errors.firstName.message}</span>
        )}
      </div>

      <div className="divInput">
        <label>Last Name*</label>
        <input
          {...register("lastName", {
            required: 'Last Name is required',
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
              message: "Enter a valid last name",
            },
          })}
          placeholder="Enter Last Name"
          onChange={handleLastName}
        />
        {errors.lastName && (
          <span style={{ color: 'red' }}>{errors.lastName.message}</span>
        )}
      </div>

      <div className="divInput">
        <label>Enter Email*</label>
        <input
          {...register("email", {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Enter a valid email address",
            },
          })}
          placeholder="Enter Email"
        />
        {errors.email && (
          <span style={{ color: 'red' }}>{errors.email.message}</span>
        )}
      </div>

      <div className="divInput">
        <label>Contact*</label>
        <input
          {...register('phone', {
            required: 'Phone is required',
            pattern: {
              value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
              message: "Enter a valid phone number",
            },
          })}
          placeholder="Enter Phone"
        />
        {errors.phone && (
          <span style={{ color: 'red' }}>{errors.phone.message}</span>
        )}
      </div>
    </div>
  );
};

export default Inputs;
