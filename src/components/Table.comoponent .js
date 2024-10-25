import React from 'react';
import { useTable } from 'react-table';

const TaskTable = ({ tasks }) => {
  const data = React.useMemo(() => tasks, [tasks]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Título',
        accessor: 'title', // Acceder al título de la tarea
      },
      {
        Header: 'Acciones',
        accessor: 'actions', // Columna para acciones (botones)
        Cell: ({ row }) => (
          <button className="btn btn-danger" onClick={() => row.original.onDelete(row.index)}>
            Eliminar
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaskTable;
