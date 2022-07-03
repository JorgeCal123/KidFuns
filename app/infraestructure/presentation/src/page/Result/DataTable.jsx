import React from "react";

function Datatable() {
    const Database = [
        { Nombre: 'camila', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'camila', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'camila', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'camila', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'camila', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'camila', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'},
        { Nombre: 'arturo', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'arturo', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'arturo', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'arturo', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'arturo', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'arturo', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'},
        { Nombre: 'daniel', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'daniel', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'daniel', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'daniel', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'daniel', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'daniel', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'},
        { Nombre: 'jorge', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'jorge', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'jorge', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'jorge', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'jorge', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'jorge', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'},
        { Nombre: 'daniela', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'daniela', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'daniela', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'daniela', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'daniela', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'daniela', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'},
        { Nombre: 'rodrigo', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'rodrigo', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'rodrigo', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'rodrigo', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'rodrigo', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'rodrigo', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'},
        { Nombre: 'sofia', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'sofia', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'sofia', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'sofia', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'sofia', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'sofia', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'},
        { Nombre: 'ana', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '0', Nivel: '1'},
        { Nombre: 'ana', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '0', Nivel: '2'},
        { Nombre: 'ana', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '0', Nivel: '3'},
        { Nombre: 'ana', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5', Materia: '1', Nivel: '1'},
        { Nombre: 'ana', Repetidas: '3', Correctas: '3', Fallidas: '10', Calificacion: '3', Materia: '1', Nivel: '2'},
        { Nombre: 'ana', Repetidas: '2', Correctas: '5', Fallidas: '1', Calificacion: '4', Materia: '1', Nivel: '3'}
    ]
    const data = Database.map((d) =>
    <React.Fragment>
        <tr>
            <th scope="row">{ d.Nombre }</th>
            <td>{d.Repetidas}</td>
            <td>{d.Correctas}</td>
            <td>{d.Fallidas}</td>
            <td>{d.Calificacion}</td>
        </tr>
    </React.Fragment>
    
    );
    return (
 <div class="table-wrapper-scroll-y my-custom-scrollbar">
  <table class="table table-bordered table-striped mb-0">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Repetidas</th>
        <th scope="col">Correctas</th>
        <th scope="col">Fallidas</th>
        <th scope="col">Calificacion</th>
      </tr>
    </thead>
    <tbody>
        { data }
    </tbody>
  </table>

</div>
    );
}

export { Datatable };