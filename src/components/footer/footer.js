import './footer.css';

function Footer() {
    return(
        <div className='footer-wrapper'>
            <p className='footer-text'>
                <a href='https://www.mysunshinepediatrics.com/_files/ugd/252b4a_69f2e9199b1240e488d092363f178445.pdf'>Privacy Notice</a>
                <a href='https://www.mysunshinepediatrics.com/_files/ugd/252b4a_1d40056d2fe04252b1f33c19d6f79970.pdf'>HIPAA Disclosure</a>
                <a href='https://www.mysunshinepediatrics.com/_files/ugd/252b4a_25478f97ea854e7bab9161179832d84c.pdf'>Nondiscrimination Policy</a><br></br>
                <span style={{display: 'inline'}}>Site by <a href='https://michael-montgomery.github.io/origami/'>Montgomery-Merritt</a></span>
            </p>
        </div>
    )
}

export default Footer;