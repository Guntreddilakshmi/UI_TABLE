import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
import { getColumns } from "./columns.jsx";
import EditModal from "./EditModal.jsx";

export default function DataTable({ data, setData, countries }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const openEdit = (row) => setSelectedRow(row);
  const closeModal = () => setSelectedRow(null);

  const columns = getColumns(openEdit);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className="styled-table">
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((h) => (
                <th key={h.id}>
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRow && (
        <EditModal
          row={selectedRow}
          countries={countries}
          onClose={closeModal}
          onSave={(updated) => {
            const updatedRows = data.map((item) =>
              item.id === updated.id ? updated : item
            );
            setData(updatedRows);
          }}
        />
      )}
    </>
  );
}
