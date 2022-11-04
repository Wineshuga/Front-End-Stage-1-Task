import React from "react"
import FormDetails from "../Components/FormDetails"
import Footer from "../Components/Footer"

export default function Contact() {
    return (
        <>
            <div className="contact-page-container">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
                <FormDetails />
            </div>
            <Footer />
        </>
    )
}