import * as z from "zod";

export const StorageValidation = z.object({
  storageName: z.string().nonempty(),
  storageCapacity: z.string().nonempty(),
  streetName: z.string().nonempty(),
  city: z.string().nonempty(),
  postcode: z.string().nonempty(),
  deliveryInstructions: z.string().nonempty(),
  note: z.string().nonempty(),
});

console.log("Zod Schema loaded.");
