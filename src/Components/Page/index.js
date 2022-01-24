import React from "react";
import AboutMe from "../About"
import ContactMe from "../Contact";
import Projects from "../Projects";
import Resume from "../Resume";
import PageContent from "../PageContent";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case "About Me":
                return <AboutMe />
            case "Contact Me":
                return <ContactMe />
            case "Projects":
                return <Projects />
            case "Resume":
                return <Resume />
            default:
                return <AboutMe />
        }
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="h3 m-4">{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </div>
    )
}

export default Page;