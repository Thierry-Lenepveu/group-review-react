interface ContactFormProps {

    isHidden: boolean;
    setHidden: (hidden: boolean) => void;
}

function ContactForm({isHidden, setHidden}:ContactFormProps)  {
    return(
        <>
            <form className={isHidden ? "hidden":""}>
                <ul>
                    <li>
                        <label>Nom :&nbsp;
                            <input type="text" id="name" name="user_name" />
                        </label>
                    </li>
                    <li>
                        <label>E-mail :&nbsp;
                            <input type="email" id="mail" name="user_mail" />
                        </label>
                    </li>
                    <li>
                        <label>Message :&nbsp;
                            <textarea id="msg" name="user_message" />
                        </label>
                    </li>
                </ul>
                <button onClick={() => setHidden(true)}>
                    Submit
                </button>
            </form>
        </>
    )
}

export default ContactForm;