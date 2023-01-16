// import { useEffect } from "react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import css from './ContactForm.module.css';

const ContactForm =  ({ register, onSubmit, error }) => {

    return <div>
        <form
            action=""
            onSubmit={onSubmit}
            className={css.contactForm}
            id="myform"
        >
            <label className={css.contactLabel}>
                Name
                <input
                    className={css.contactInput}
                    type="text"
                    {...register("name", {
                        required: true,
                        pattern: {
                            value: /[A-Za-z]{3}/,
                            message: "Input valid name"
                        }
                    })}
                />
            </label>
            <div className={css.errorMessage}>
                {error?.name && <p>📛{error?.name?.message || "Error!"}</p>}
            </div>
            <label className={css.contactLabel}>
                Number
                <input
                    className={css.contactInput}
                    type="text"
                    {...register("number", {
                        required: true,
                        pattern: {
                            value: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                            message: "Input valid number"
                        }
                    })}
                />
            </label>
            <div className={css.errorMessage}>
                {error?.number && <p>📛{error?.number?.message || "Error!"}</p>}
            </div>
            <button type="submit" className={css.contactButton}>Add contact</button>
        </form>
    </div>  
}

export default ContactForm;
