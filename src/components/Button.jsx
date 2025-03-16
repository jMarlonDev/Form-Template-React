/* 
 * Componente de NeobrutalButton
 * Elemento y estilo para los botones que va a incluir el formulario
 * este boton es reutilizado para poner el boton de enviar el formulario y de limpiar 
 * los valores de los inputs.
*/

import '../App.css';

const NeobrutalButton = ({ children, onClick, type }) => {
  return (
    <button className="neobrutal-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default NeobrutalButton;
