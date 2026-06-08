import { z } from "zod";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Campos siempre presentes (el form los inicializa en "") para que el tipo
// de entrada y salida de Zod coincidan (evita conflictos con zodResolver).
export const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "min" }).max(100, { message: "max" }),
  phone: z.string().trim().min(7, { message: "min" }).max(25, { message: "max" }),
  email: z
    .string()
    .trim()
    .max(120)
    .refine((v) => v === "" || EMAIL_RE.test(v), { message: "invalid" }),
  service: z.string().trim().max(140),
  // Mensaje opcional: puede ir vacío.
  message: z.string().trim().max(2000, { message: "max" }),
  // Honeypot anti-spam: debe quedar vacío.
  company: z.string().max(0),
});

export type ContactInput = z.infer<typeof contactSchema>;
