import { Table } from "../../ui/Table/Table";
import { BotonesTable } from "../../ui/Table/BotonesTable";
import { PaginationTable } from "../../ui/Table/PaginationTable";
import { ItemsTableStyle } from "../../helpers/stylesReutilizables";
import { ModalW } from "../../ui/Modal/Modal";

//AQUI DEBO PASAR LA FUNCION CON EL MAP, COMO DIJO JONAS.

const myArray = [
  { id: 1, nombre: "jean", apellido: "urena", edad: 29 },
  { id: 2, nombre: "jean", apellido: "urena", edad: 29 },
  { id: 3, nombre: "jean", apellido: "urena", edad: 29 },
  { id: 4, nombre: "jean", apellido: "urena", edad: 29 },
];

export const ClientesTable = () => {
  return (
    <>
      <Table columns="100px 1fr 1fr 1fr 1fr ">
        <Table.Header>
          <div></div>
          <div>Nombre</div>
          <div>Seguro Medico</div>
          <div>Edad</div>
          <div></div>
        </Table.Header>

        <Table.Rows
          data={myArray}
          callback={(clientes) => (
            <>
              <ItemsTableStyle>{clientes.id}</ItemsTableStyle>{" "}
              <ItemsTableStyle>{clientes.nombre}</ItemsTableStyle>
              <ItemsTableStyle>{clientes.apellido}</ItemsTableStyle>{" "}
              <ItemsTableStyle>{clientes.edad}</ItemsTableStyle>
              <BotonesTable />
            </>
          )}
        />
        <Table.Footer />
      </Table>
    </>
  );
};

/*
<ModalW>
      <ModalW.Open />
      <ModalW.Windows>
        <ReuTable /> //!ESTO ES UN EJEMPLO, LA TABLA NO VA AQUI.
      </ModalW.Windows>
    </ModalW>
*/
