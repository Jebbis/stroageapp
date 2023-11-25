import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Delivery } from "../../types/Delivery";

const columnHelper = createColumnHelper<Delivery>();

export const userColumnDefs: ColumnDef<Delivery, any>[] = [
  columnHelper.accessor((row) => row.deliveryId, {
    id: "deliveryId",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>delivery id</span>,
  }),
  columnHelper.accessor((row) => row.deliveryDate, {
    id: "deliveryDate",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Delivery date</span>,
  }),
  columnHelper.accessor((row) => row.deliveryNote, {
    id: "deliveryNote",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>delivery note</span>,
  }),
  // columnHelper.accessor((row) => row._id, {
  //   id: "_id",
  //   cell: (info) => <span>{info.getValue()}</span>,
  //   header: () => <span>delivery _id</span>,
  // }),
];
