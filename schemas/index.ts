import { time } from "console";
import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Minimum Length is 6 characters"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    }),
    usertype: z.enum(["admin", "user"], {
        errorMap: () => ({
            message: "Usertype Should be either admin or user"
        })
    })
});