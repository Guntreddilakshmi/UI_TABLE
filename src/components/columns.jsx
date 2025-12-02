import React from "react";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const getColumns = (openEdit) => [
  // Name
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue() ?? "",
  }),

  

  // Gender (capitalize)
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (info) => {
      const g = info.getValue();
      if (!g) return "";
      return g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();
    },
  }),

  // Request Date (format DD/MM/YYYY)
  columnHelper.accessor("requestDate", {
    header: "Request Date",
    cell: (info) => {
      const raw = info.getValue();
      if (!raw) return "";
      const date = new Date(raw);

      if (isNaN(date)) return "-";

      return date.toLocaleDateString("en-GB"); // 16/06/2025
    },
  }),

  // Country
  columnHelper.accessor("country", {
    header: "Country",
    cell: (info) => info.getValue() ?? "",
  }),

  // EDIT BUTTON
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <button
        onClick={() => openEdit(row.original)}
        className="edit-btn"
      >
        ✏ Edit
      </button>
    ),
  }),
];
