import * as z from "zod";

export const StorageValidation = z.object({
  clientName: z.string().nonempty(),
  storageName: z.string().nonempty(),
  storageCapacity: z.string().max(2, { message: "Value needs to be between 0-99" }),
  lastDelivery: z.string(),
  details: z.string().max(1000, { message: "Max 1000 characters." }),
});


console.log("Zod Schema loaded.");
