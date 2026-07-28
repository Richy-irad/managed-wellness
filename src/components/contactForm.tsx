"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Button from "@/components/button";

import { MessageType } from "@/lib/types";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [inspector, setInspector] = useState("");
  const [status, setStatus] = useState({
    hasError: false,
    isSubmitted: false,
    message: [] as MessageType[],
  });

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const displayNotice = () => {
    if (!status.message.length) {
      return;
    }

    if (status.isSubmitted && !status.hasError) {
      return (
        <p className="text-dark font-display text-xl leading-snug">
          {status.message[0].description}.
        </p>
      );
    }

    if (status.hasError) {
      return (
        <div className="flex flex-col gap-1 mb-2">
          {status.message.map((message, index) => (
            <p key={index} className="text-red-700 text-sm">
              {message.title}: {message.description}.
            </p>
          ))}
        </div>
      );
    }
  };

  // Display error in input field.
  const displayInputError = (
    element: HTMLInputElement | HTMLTextAreaElement
  ) => {
    // Add CSS classes to the element.
    element.classList.add("placeholder:text-red-700", "border-red-400");
    // Remove CSS classes in the element.
    element.classList.remove("border-cool-grey");
  };

  // Clear error in input field.
  const clearInputError = (element: HTMLInputElement) => {
    // Add CSS classes to the element.
    element.classList.add("border-cool-grey");
    // Remove CSS classes in the element.
    element.classList.remove("border-red-400");
  };

  // Detect input focus.
  const handleOnBlur = (element: HTMLInputElement | HTMLTextAreaElement) => {
    if ("" !== element.value) {
      clearInputError(element as HTMLInputElement);
    } else {
      displayInputError(element);
    }
  };

  // Detect message submission.
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Email data.
    let data = {
      name: firstName + " " + lastName,
      email,
      subject,
      message,
      inspector,
    };

    // Pattern for email address.
    const emailRegex = /\S+@\S+\.\S+/;

    // Check if the user entered a name; otherwise show an error.
    if (!firstName) {
      displayInputError(firstNameInputRef.current as HTMLInputElement);
    }

    if (!lastName) {
      displayInputError(lastNameInputRef.current as HTMLInputElement);
    }

    // Check if the user entered an email; otherwise show an error.
    if (!email) {
      displayInputError(emailInputRef.current as HTMLInputElement);
    } else {
      // Make sure the user entered a valid email; otherwise indicate an error.
      if (!emailRegex.test(email)) {
        displayInputError(emailInputRef.current as HTMLInputElement);
        setStatus({
          hasError: true,
          isSubmitted: false,
          message: [
            {
              title: "Email format is not valid",
              description:
                "please enter an email with a valid format and then try to send your message again",
            },
          ],
        });
      }
    }

    // Check if the user entered a subject; otherwise show an error.
    if (!subject) {
      displayInputError(subjectInputRef.current as HTMLInputElement);
    }

    // Check if the user entered a message; otherwise show an error.
    if (!message) {
      displayInputError(messageInputRef.current as HTMLTextAreaElement);
    }

    // Avoid a send action if fields are not filled or email address is not valid.
    if (
      !firstName ||
      !lastName ||
      !email ||
      !emailRegex.test(email) ||
      !subject ||
      !message
    ) {
      return;
    }

    // Make a request to send the email using API.
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      // Display an error message.
      if (200 !== response.status) {
        setStatus({
          hasError: true,
          isSubmitted: false,
          message: [
            {
              title: "Message was not sent",
              description: "something went wrong, please try again later",
            },
          ],
        });

        return;
      }

      // Display a successful message.
      setStatus({
        hasError: false,
        isSubmitted: true,
        message: [
          {
            title: "Message sent",
            description: "thank you for your time writing this message",
          },
        ],
      });
    });
  };

  if (status.isSubmitted && !status.hasError) {
    return <div className="w-full">{displayNotice()}</div>;
  }

  return (
    <form className="flex flex-col gap-y-6 w-full">
      {displayNotice()}

      <div className="flex flex-col gap-y-5 w-full">
        {/* first and last names */}
        <div className="flex gap-x-4">
          <div className="basis-1/2 space-y-2">
            <label htmlFor="firstName" className="block text-sm text-warm-grey">
              First name
            </label>
            <input
              type="text"
              ref={firstNameInputRef}
              className="border border-cool-grey rounded-sm block w-full px-3.5 py-3 text-sm focus:outline-none focus:border-dark"
              name="firstName"
              value={firstName}
              placeholder="First name"
              onChange={(event) => setFirstName(event.target.value)}
              onBlur={() =>
                handleOnBlur(firstNameInputRef.current as HTMLInputElement)
              }
            />
          </div>
          <div className="basis-1/2 space-y-2">
            <label htmlFor="lastName" className="block text-sm text-warm-grey">
              Last name
            </label>
            <input
              type="text"
              ref={lastNameInputRef}
              className="border border-cool-grey rounded-sm block w-full px-3.5 py-3 text-sm focus:outline-none focus:border-dark"
              name="lastName"
              value={lastName}
              placeholder="Last name"
              onChange={(event) => setLastName(event.target.value)}
              onBlur={() =>
                handleOnBlur(lastNameInputRef.current as HTMLInputElement)
              }
            />
          </div>
        </div>

        {/* email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-warm-grey">
            Email
          </label>
          <input
            type="email"
            ref={emailInputRef}
            className="border border-cool-grey rounded-sm block w-full px-3.5 py-3 text-sm focus:outline-none focus:border-dark"
            name="email"
            value={email}
            placeholder="e.g. john.doe@example.com"
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() =>
              handleOnBlur(emailInputRef.current as HTMLInputElement)
            }
          />
        </div>

        {/* subject */}
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm text-warm-grey">
            Subject
          </label>
          <input
            type="text"
            ref={subjectInputRef}
            className="border border-cool-grey rounded-sm block w-full px-3.5 py-3 text-sm focus:outline-none focus:border-dark"
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={(event) => setSubject(event.target.value)}
            onBlur={() =>
              handleOnBlur(subjectInputRef.current as HTMLInputElement)
            }
          />
        </div>

        {/* message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm text-warm-grey">
            What brings you here?
          </label>
          <textarea
            className="border border-cool-grey rounded-sm block w-full px-3.5 py-3 text-sm focus:outline-none focus:border-dark"
            name="message"
            ref={messageInputRef}
            rows={4}
            placeholder="Write your message here"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onBlur={() =>
              handleOnBlur(messageInputRef.current as HTMLTextAreaElement)
            }
          />
        </div>
      </div>

      <Button onClick={handleSubmit} variant="solid">
        book a session
      </Button>
    </form>
  );
};

export default ContactForm;
