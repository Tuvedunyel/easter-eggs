import axios from "axios";
import React, { useState } from "react";

const Newsletter = () => {
  const [sent, setSent] = useState(false);
  const [sentMessage, setSentMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleClick = e => {
    e.preventDefault();

    if (!email) {
      setError(true);
      setErrorMessage("Veuillez entrer une adresse email");
    } else if (!validEmail(email)) {
      setError(true);
      setErrorMessage("Veuillez entrer une adresse email valide");
    } else if (!errorMessage.length) {
      setError(false);
      setErrorMessage("");
      const bodyFormData = new FormData();
      bodyFormData.set("email", email);
      axios({
        method: "post",
        url: "https://www.btg-dev.com/btg-form-easteregg/wp-json/contact-form-7/v1/contact-forms/6/feedback",
        data: bodyFormData,
      })
        .then(response => {
          setSentMessage(response.data.message);
          setSent(true);
          return true;
        })
        .catch(err => console.log(err));
    }
  };

  const validEmail = mail => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
  };

  return (
    <section className='newsletter__container'>
      {sent ? (
        <p className="sentMessage">{`${sentMessage} Joyeuses Pâques et à bientôt !`}</p>
      ) : (
        <>
          <form>
            <label htmlFor='email'>
              <span className='screen-reader-text'>Votre Email</span>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={handleChange}
                required
                placeholder='Votre adresse mail (*)'
              />
            </label>
            <button type='submit' onClick={handleClick}>
              Envoyer
            </button>
          </form>
          {error && <p className='error'>{errorMessage}</p>}
        </>
      )}
    </section>
  );
};

export default Newsletter;
