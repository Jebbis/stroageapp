import * as z from "zod";

export const userValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Name has to be minimum 3 characters" })
    .max(30, { message: "Name has to be maximum 30 characters" }),
  username: z
    .string()
    .min(3, { message: "Username has to be minimum 3 characters" })
    .max(30, { message: "Name has to be maximum 30 characters" }),
  bio: z
    .string()
    .min(3, { message: "Bio has to be minimum 3 characters" })
    .max(1000, { message: "Bio has to be maximum 1000 characters" }),
});
