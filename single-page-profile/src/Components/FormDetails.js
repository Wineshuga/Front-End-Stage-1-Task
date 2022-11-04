import React from "react";

export default function FormDetails() {
  return (
    <form className="form">
      <div className="name-labels">
      <label className="first-label">First name:</label>
      <label className="second-label">Last name:</label>
      </div>
      <div className="name-inputs">
      <input
        id="first_name"
        type="text"
        name="First Name"
        placeholder="Enter your first name"
        required
      />
      <input
        id="last_name"
        type="text"
        name="Last Name"
        placeholder="Enter your last name"
        required
      />
      </div>
      <label>Email:</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="yourname@email.com"
        required
      />
      <label>Message:</label>
      <textarea
        id="message"
        type="text"
        rows={6}
        placeholder="Send me a message and I'll respond as soon as possible..."
      ></textarea>
      <label id="check-box-label">
        <input id="check-box" type="checkbox" />
        You agree to providing your data to Wineshuga who may contact you.
      </label>
      <button id="btn__submit">Send message</button>
    </form>
  );
}
