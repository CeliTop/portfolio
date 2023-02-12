"use client";

import styles from "../styles/Home.module.css";
import Card from "../components/card";
import { useState } from "react";

export default function Email() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function onChange(e) {
    setSubmitted(false);
    setError(false);
    const id = e.target.id;
    const text = e.target.value;
    console.log(text);
    if (id == "name") {
      setName(text);
    } else if (id == "email") {
      setEmail(text);
    } else if (id == "message") {
      setMessage(text);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(false);
    setLoading(true);

    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setSubmitted(true);
      } else if (res.status === 400) {
        setLoading(false);
        setSubmitted(false);
        setError(true);
      }
    });
  }

  return (
    <Card className={styles.emailSection}>
      <h2 className={styles.sendTitle}>Send me a message !</h2>
      <form className={styles.emailForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={onChange} value={name} />
          {name == "" ? (
            <p className={styles.error}>Please provide your name</p>
          ) : null}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={onChange} value={email} />
          {email == "" ? (
            <p className={styles.error}>
              Please provide your email, so that I can answer you
            </p>
          ) : null}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            onChange={onChange}
            value={message}
          />
          {message == "" ? (
            <p className={styles.error}>
              {"Please send me at least one word :)"}
            </p>
          ) : null}
        </div>
        <input
          className={
            submitted ? styles.submitted : error ? styles.errorButton : ""
          }
          type="submit"
          value={
            submitted
              ? "Sent ! An automatic email has been sent to you."
              : loading
              ? "Loading..."
              : error
              ? "Error !"
              : "Submit"
          }
          onClick={onSubmit}
          disabled={
            name == "" ||
            email == "" ||
            message == "" ||
            name == null ||
            email == null ||
            message == null
          }
        />
      </form>
    </Card>
  );
}
