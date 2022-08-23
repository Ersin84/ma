import cn from 'classnames';
import React, { InputHTMLAttributes, useState } from 'react';
import { Eye } from '@components/icons/eye-icon';
import { EyeOff } from '@components/icons/eye-off-icon';
import { useTranslation } from 'next-i18next';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label: string;
  name: string;
  shadow?: boolean;
  error: string | undefined;
  errorApi: string | undefined;
}
const classes = {
  root: 'py-5 px-5 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded-md placeholder-[#B3B3B3] transition duration-200 ease-in-out bg-skin-fill border-skin-two focus:border-2  focus:outline-none focus:border-skin-primary h-11 md:h-10',
};
const DateInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className = 'block',
      inputClassName,
      label,
      name,
      error,
      errorApi,
      shadow = false,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    const { t } = useTranslation();
    const rootClassName = cn(classes.root, inputClassName);
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block text-skin-base opacity-70 font-normal text-sm leading-none mb-3 cursor-pointer"
          >
            {t(label)}
          </label>
        )}
        <div className="relative">
          <input
            id={name}
            name={name}
            type="date"
            ref={ref}
            className={rootClassName}
            autoComplete="off"
            spellCheck="false"
            {...rest}
          />
        </div>
        {error && (
          <p className="my-2 text-13px text-skin-red text-opacity-70">
            {t(error)}
          </p>
        )}
         {errorApi && (
          <p className="my-2 text-13px text-skin-red text-opacity-70">
            {t(errorApi)}
          </p>
        )}
      </div>
    );
  }
);

export default DateInput;

DateInput.displayName = 'DateInput';
