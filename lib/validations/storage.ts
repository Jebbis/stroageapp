import * as z from "zod";

export const StorageValidation = z.object({
  clientName: z.string().nonempty(),
  clientID: z.string().nonempty(),
  storageName: z.string().nonempty(),
  storageCapacity: z.string(),
  lastDelivery: z.string(),
  details: z.string().max(1000, { message: "Max 1000 characters." }),
});

console.log("Zod Schema:", StorageValidation);
