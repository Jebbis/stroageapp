import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Delivery } from "../../types/Delivery";

const columnHelper = createColumnHelper<Delivery>();

export const userColumnDefs: ColumnDef<Delivery, any>[] = [
  columnHelper.accessor((row) => row.delivery_id, {
    id: "delivery_id",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>delivery id</span>,
  }),
  columnHelper.accessor((row) => row.delivery_date, {
    id: "delivery_date",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Delivery date</span>,
  }),
  columnHelper.accessor((row) => row.delivery_note, {
    id: "delivery_note",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>delivery note</span>,
  }),
];
