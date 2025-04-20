import { HTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProps<TFieldValues extends FieldValues = FieldValues>
  extends Readonly<HTMLAttributes<HTMLInputElement>> {
  readonly register: ReturnType<UseFormRegister<TFieldValues>>;
}

export default function Input<TFieldValues extends FieldValues = FieldValues>({
  register,
  ...props
}: InputProps<TFieldValues>) {
  return <input {...register} {...props} />;
}
