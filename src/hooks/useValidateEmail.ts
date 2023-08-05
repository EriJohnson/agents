import { ChangeEvent, useState } from "react";

function isEmailValid(email: string): boolean {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

export default function useValidateEmail() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setIsValid(isEmailValid(event.target.value));
  }

  return { email, isValid, handleEmailChange };
}
