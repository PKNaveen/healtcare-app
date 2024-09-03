"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import CustomForm from "@/components/CustomForm";
import {userValidationForm} from "@/lib/validation";
import {useRouter} from "next/navigation";
import {useState} from "react";


export enum FormFieldType {
    INPUT ='input',
    TEXTAREA = 'textArea',
    PHONE_INPUT = 'phoneInPut',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',



}
// FormSchema
// set of conditions for the form aka react-hook

const  PatientForm = () => {
    const router  = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof userValidationForm>>({
        resolver: zodResolver(userValidationForm),
        defaultValues: {
            username: "",
            email:"",
            phone:"",
        },
    })

    // After submitting functions to done here
    async function onSubmit({username, email, phone}: z.infer<typeof userValidationForm>) {
        setIsLoading(true)

            try {
                // const userData = {username, email, phone}
                // const user = await createUser(userData)
                //
                // if(user) router.push(`/patients/${user.$id}/register`)
        }
        catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[480px]">
                <CustomForm
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name = 'name'
                    label ='Full name'
                    placeholder='John Doe'
                    iconSrc="/assets/icons/user.svg"
                    iconAlt='User'
                />
                <CustomForm
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name = 'email'
                    label ='Email Address'
                    placeholder='johndoe@example.com'
                    iconSrc="/assets/icons/email.svg"
                    iconAlt='mail'
                />
                <CustomForm
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name = 'phone'
                    label ='Phone Number'
                    placeholder='1234567890'
                />
                <Button className="bg-white text-black" type="submit">Submit</Button>
            </form>
        </Form>
    );
}
export default PatientForm
