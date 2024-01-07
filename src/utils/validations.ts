import { z } from 'zod';

const username = z.string().min(3, { message: 'Username must be at least 3 characters long' });
const email = z.string().email({ message: 'Invalid email format' });
const password = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/\d/, { message: 'Password must contain at least one digit' });
const note = z.string().optional();
const tags = z.string().array().optional();

export const passwordSchema = z.object({
  username,
  email,
  password,
  note,
  tags,
});