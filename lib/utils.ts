import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const parseStringify = (value:any) => JSON.parse(JSON.stringify(value))

export const convertFileToURL = (file: File) => URL.createObjectURL(file)

//  Need to add Utils in this folder

