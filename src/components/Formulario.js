import React from 'react';

const Formulario = () => {
    return (  
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                />
            </div>

            <input
                type="submit"
                className="burron-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}
 
export default Formulario;