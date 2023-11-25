import * as z from "zod";

export const StorageValidation = z.object({
  clientName: z.string().nonempty(),
  clientNote: z.string().nonempty(),
});


console.log("Zod Schema loaded.");
