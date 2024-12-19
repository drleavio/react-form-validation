import {z} from "zod"

const usernameRegex = /^[a-z0-9]+$/;
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex=/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export const formSchema=z.object({
    username:z.string().min(3,{message:"name must be of three characters"}).regex(usernameRegex,{message:"username must not contain any capital case or special character or any wide space"}),
    first_name:z.string().min(3,{message:"name must be of atleast 3 characters"}),
    last_name:z.string().min(3,{message:"last name must be of atleast 3 characters"}),
    email:z.string().regex(emailRegex,{message:"email format is not correct"}),
    password:z.string().min(8,{message:"password must be of atleast 8 characters"}).regex(passwordRegex,{message:"password is very week"}),
    // phone_no:z.number().min(10,{message:"phone number must be of 10 numers"}).max(10,{message:"phone number must be of 10 numers"}),

})