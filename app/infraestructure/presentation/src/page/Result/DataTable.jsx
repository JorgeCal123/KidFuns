import React from "react";

function Datatable() {
    const Database = [
        { Nombre: 'camila', Repetidas: '0', Correctas: '8', Fallidas: '3', Calificacion: '5'},
        { Nombre: 'arturo', Repetidas: '3', Correctas: '12', Fallidas: '5', Calificacion: '4'},
        { Nombre: 'daniel', Repetidas: '5', Correctas: '15', Fallidas: '2', Calificacion: '5'},
        { Nombre: 'jorge', Repetidas: '7', Correctas: '18', Fallidas: '1', Calificacion: '4'},
        { Nombre: 'daniela', Repetidas: '3', Correctas: '10', Fallidas: '3', Calificacion: '4'},
        { Nombre: 'rodrigo', Repetidas: '0', Correctas: '20', Fallidas: '4', Calificacion: '4'},
        { Nombre: 'sofia', Repetidas: '1', Correctas: '10', Fallidas: '2', Calificacion: '5'},
        { Nombre: 'ana', Repetidas: '3', Correctas: '15', Fallidas: '1', Calificacion: '4'}
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