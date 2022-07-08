import React from 'react'

function Info() {
    return (
        <section className="info">
            <img className="info--image" src="../images/perfil.jpg" alt='Error loading profile' />
            <h1>Diego Baratta</h1>
            <h4>Front End Developer</h4>
            <h5>www.diegobaratta.com</h5>
            <div className="buttons">
                <div className="email">
                    <img src="../images/Mail.png" alt='Error loading mail' /> 
                    Email
                </div>
                <div className="linkedin">
                    <img src="../images/linkedin.png" alt='Error loading linkedin' /> 
                    LinkedIn
                </div>
            </div>
        </section>
    )
}

export default Info