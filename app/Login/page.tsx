import Image from "next/image";
import PatientForm from "@/components/PatientForm";




export default function Login() {
    return (
        // basic login page with login form
        <div className="flex h-screen max-h-screen">
       {/*     center the section vertically*/}
       <section className="my-auto container m-20">
           {/*custom tailwind to remove scrollbar and add a max width of the logo*/}
           <div className=" remove-scrollbar max-w=[500px]">
               <Image
                   src="/assets/icons/logo-full.svg"
                   alt="logo"
                   width={1000}
                   height={1000}
                    className="h-12 w-fit mb-12"
               />
           </div>
           {/*Form component here*/}
           <PatientForm/>

           {/*Footer here*/}
           <div className="text-14-regular mt-20 flex justify-between">
               <p className="justify-items-end text-dark-600 xl:text-left">
                &copy; HealthApp
               </p>
           </div>
       </section>
            <Image src="/assets/images/onboarding-img.png"
                   alt="patient"
                   height={1000}
                   width={1000}
                   className="side-img max-w-[50%]"
            />
        </div>
    );
}


