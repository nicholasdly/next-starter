import { z } from "zod";

export const loginFormSchema = z
  .object({
    username: z.string().min(1, "Please enter a valid username."),
    password: z.string().min(1, "Please enter a valid password."),
  })
  .strict();

export const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "Your username must be at least 3 characters.")
      .max(255, "Your username must not exceed 255 characters."),
    password: z
      .string()
      .min(6, "Your password must be at least 6 characters.")
      .max(255, "Your password must not exceed 255 characters."),
  })
  .strict();
