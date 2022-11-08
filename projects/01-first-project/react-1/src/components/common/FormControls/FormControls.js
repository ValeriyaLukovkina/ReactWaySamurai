import React from "react"
import s from './FormControls.module.css';

const Element = (Element) => ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
            <div>
                <Element {...input} {...props} />
            </div>
                {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = Element('Textarea')

export const Input = Element('Input')