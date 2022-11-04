import Btns from "./Btns";

export default function FormDetails() {
  return (
    <form>
      <label>First name:</label>
      <input
        id="first_name"
        type="text"
        name="First Name"
        placeholder="Enter your first name"
        required
      />
      <label>Last name:</label>
      <input
        id="last_name"
        type="text"
        name="Last Name"
        placeholder="Enter your last name"
        required
      />
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
        placeholder="Send me a message and I'll respond as soon as possibly"
      ></textarea>
      <label>
        <input type="checkbox" />
        You agree to providing your data to Wineshuga who may contact you.
      </label>
      <button id="btn__submit">Send message</button>
    </form>
  );
}
