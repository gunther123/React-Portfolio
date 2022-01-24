import React from 'react';
import { Stack } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="fixed-bottom">
            <Stack direction="horizontal" gap={3}>
                <div>
                    <a className='font-weight-bold text-decoration-none text-dark' href='https://github.com/gunther123/'>Github</a>
                </div>
                <div>
                    <a className='font-weight-bold text-decoration-none text-dark' href='https://www.linkedin.com/in/steven-slocum-2a546511b/'>Linkedin</a>
                </div>
            </Stack>
        </footer>
        
    );
}

export default Footer;