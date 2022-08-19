import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900 mb-2'> Nuevo Cliente </h1>
        <p>Llena los siguientes campos para registrar un cliente.</p>
        
        <Formulario />
    </>
  )
}

export default NuevoCliente
