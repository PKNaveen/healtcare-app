import React from "react";
import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Control} from "react-hook-form";
import {FormFieldType} from "@/components/PatientForm";
import {Input} from "@/components/ui/input";
import Image from "next/image";


// Add custom css for shad -input
interface CustomProps{
    control: Control<any>
    fieldType: FormFieldType
    name:string
    label?:string
    placeholder?:string
    iconSrc?:string
    iconAlt?:string
    disabled?:boolean
    dateFormat?:string
    showTimeSelect?:boolean
    children?: React.ReactNode
    renderSkeleton?:(field:any) => React.ReactNode
}

const RenderInput=({field, props} : {field: any; props : CustomProps })=>{
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            height={24}
                            width={24}
                            alt={props.iconAlt || "icon"}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            );

        case  FormFieldType.PHONE_INPUT:
    //         create custom form here

    }

}
const CustomForm=(props:CustomProps) =>{
    const {control,fieldType,name,label} = props
    return(
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1 ">
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                            <FormLabel>{label}</FormLabel>
                    )}
                    <RenderInput
                        field={field}
                        props={props}
                    />
                    <FormMessage className="shad-error"/>
                </FormItem>
            )}
        />
    )
}


export default CustomForm
