import React from 'react'
import { useForm } from 'react-hook-form'

const HookFormValidation = () => {
    const { register, handleSubmit, formState } = useForm()
    // To register out input tag use register
    // HandleSUbmit check the validation before submmiting the data
    // formState manages the errors

    const submitData = (data) => {
        console.log(data);
    }

    return (
        <div className="flex px-14 w-full items-center justify-center">
            <div className='w-full flex items-center justify-center'>
                <div className='pt-5'>
                    <h1 className='text-2xl italic font-semibold w-full flex justify-center'>Contact Us</h1>
                    <form onSubmit={handleSubmit(submitData)}>

                        <div className='p-2'>
                            <label className='pr-4 text-lg'>First name</label>
                            <input type="text" {...register("firstname",{required:true,minLength:3})} className='border-2 border-green-400 p-2 rounded-md w-60' />
                            { formState.errors && formState.errors.firstname && formState.errors.firstname.type === "required" && <p className='italic font-light text-red-600 ml-24'>First name is required.</p>}
                        </div>
                        <div className='p-2'>
                            <label className='pr-4 text-lg'>Last name</label>
                            <input type="text" {...register("lastname",{required:true})} className='border-2 border-green-400 p-2 rounded-md w-60' />
                            { formState.errors && formState.errors.lastname && formState.errors.lastname.type === "required" && <p className='italic font-light text-red-600 ml-24'>Last name is required.</p>}
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" className='w-32 cursor-pointer flex justify-center items-center bg-green-500 m-4 p-3 border-[1px] border-zinc-900 text-white rounded-md text-1xl uppercase font-semibold hover:bg-green-400' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default HookFormValidation