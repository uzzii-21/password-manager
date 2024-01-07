'use client'
import { passwordSchema } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type TPassword = z.infer<typeof passwordSchema>; // extracting the type
const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPassword>({
    resolver: zodResolver(passwordSchema),
  })
  const onSubmit = (data: TPassword) => console.log(data)
  return (
    
            // {errors.username && <span className="error">{errors.username.message}</span>}
          
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
            <input type='text' id="username" {...register('username')} className='block px-4 py-2 border border-black w-full' />
        </label>
        <label htmlFor="email">
            <input type='text' id="email" {...register('email')} className='block px-4 py-2 border border-black w-full' />
        </label>
        <label htmlFor="password">
            <input type='text' id="password" {...register('password')} className='block px-4 py-2 border border-black w-full' />
        </label>
        <label htmlFor="note">
            <textarea rows={5} type='text' id="note" {...register('note')} className='block px-4 py-2 border border-black w-full' />
        </label>  
        <button type="submit">create</button>
    </form>
  )
}

export default PasswordForm