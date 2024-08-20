"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import CustomForm from "@/components/CustomForm";

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
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


const  PatientForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // After submitting functions to done here
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <CustomForm
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name = 'name'
                    label ='Full name'
                    placeholder='John Doe'
                    iconSrc="/assets/icons/user.svg"
                    iconAlt='User'
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
export default PatientForm
