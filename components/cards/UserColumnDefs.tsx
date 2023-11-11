import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Person } from "../../types/Person";

const columnHelper = createColumnHelper<Person>();

export const userColumnDefs: ColumnDef<Person, any>[] = [
  columnHelper.accessor((row) => row.delivery_id, {
    id: "delivery_id",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>delivery_id</span>,
  }),
  columnHelper.accessor((row) => row.delivery_date, {
    id: "delivery_date",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>delivery_date</span>,
  }),
  columnHelper.accessor((row) => row.delivery_note, {
    id: "delivery_note",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>delivery_note</span>,
  }),
];
