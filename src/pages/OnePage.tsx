import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Main from '../components/sections/Main/Main'

const navItems = [
    { id: 'about-me', label: 'About Me' },
    { id: 'my-services', label: 'My Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact-me', label: 'Contact me' },
    { id: 'resume', label: 'Resume' },
]

const OnePage: React.FC = () => {
    return (
        <div>
            <NavBar items={navItems} />
            <Main
                name="Leticia Medeiros Nascimento"
                title1="Full-Stack"
                title2="Developer"
                subtitle="Creative Developer Specializing in Software Development, Process Automation, and AI"
                button1="Get In Touch"
                button2="My Skills"
            />
            <section id="about-me" style={{ height: '100vh', padding: '20px' }}>
                <h2>About Me</h2>
                <p>About Me Content...</p>
            </section>

            <section
                id="my-services"
                style={{ height: '100vh', padding: '20px' }}
            >
                <h2>My Services</h2>
                <p>My Services Content...</p>
            </section>

            <section
                id="portfolio"
                style={{ height: '100vh', padding: '20px' }}
            >
                <h2>Portfolio</h2>
                <p>Portfolio Content...</p>
            </section>
            <section
                id="contact-me"
                style={{ height: '100vh', padding: '20px' }}
            >
                <h2>Contact Me</h2>
                <p>Contact Me Content...</p>
            </section>
            <section id="resume" style={{ height: '100vh', padding: '20px' }}>
                <h2>Resume</h2>
                <p>Resume Content...</p>
            </section>
        </div>
    )
}

export default OnePage
