import { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, UseFormRegister, ValidationRule } from "react-hook-form";

type Props<T extends FieldValues> = {
    label: string;
    type?: HTMLInputTypeAttribute | "textarea";
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    pattern?: {
      value: RegExp;
      message: string;
    };
    error?: string;
    required?: string | ValidationRule<boolean>;
    className?: string;
}

const Input = <T extends FieldValues>({ label, placeholder, type = "text", name, register, pattern, error, required, className }: Props<T>) => {
    const commonProps = {
        ...register(name, { required, pattern }),
        placeholder,
        className: `font-medium w-full py-2 px-3 bg-transparent border-1.5 rounded-md border-gray-300 focus:border-black outline-0 placeholder:text-text-gray placeholder:font-normal transition-all duration-200 ${className}`,
    };

  return (
    <div>
        <p>{label}<span className={`${ required ? "text-red-600": "hidden" }`}>*</span></p>
        {type === "textarea" ? (
            <textarea
            {...commonProps}
            className={`min-h-[7.25rem] resize-none ${commonProps.className}`}
            maxLength={250}
            />
        ): (
            <input {...commonProps} type={type} maxLength={type === "textarea" ? 250: undefined} />
        )}
        {error && (
            <p className="text-red-600 text-sm mt-1">
                {error}
            </p>
        )}
    </div>
  )
}

export default Input