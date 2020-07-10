import React from "react";
import "./style.css";

function Contact() {

  return (
    <div className="card">
      <h2 className="contact">Contact Info</h2>
      <ul>
        <li>
          {/* https://www.000webhost.com/blog/make-a-phone-number-clickable */}
          <strong>Phone:</strong> <a href="tel:847-668-5177">847-668-5177</a>
        </li>
        <li>
          {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_mailto */}
          <strong>Email:</strong> <a href="mailto: marcalexanderstrong@gmail.com">marcalexanderstrong@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;