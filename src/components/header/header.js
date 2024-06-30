import {
    Link,
    // Link,

    NavLink
} from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useState } from 'react';
import LoginForm from '../loginform/loginform';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Header() {


    const [responsiveMenuExpanded, setResponsiveMenuExpanded] = useState(false);

    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        console.log('triggered')
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //   subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleResponsiveClick() {
        setResponsiveMenuExpanded(!responsiveMenuExpanded)
    }

    return (
        <header style={{height: responsiveMenuExpanded ? '350px' : '70px'}}>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/faqs'>FAQ's</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <button onClick={openModal}> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Patient Portal</button>
                {
                    responsiveMenuExpanded ? <button className='responsive-menu-btn' onClick={handleResponsiveClick}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button> : <button className='responsive-menu-btn' onClick={handleResponsiveClick}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                }
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <p id='portal-modal-close-btn' onClick={closeModal}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></p>
                    <LoginForm></LoginForm>
                </Modal>
            </nav>
            {/* <div id='mobile-header'>
            <button onClick={openModal}> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Patient Portal</button>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/faqs'>FAQ's</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            </div> */}
           {
            responsiveMenuExpanded ?  <div id='responsive-menu-wrapper'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/faqs'>FAQ's</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                <button onClick={() => {
                    openModal();
                    setResponsiveMenuExpanded(!responsiveMenuExpanded)
                }} id='responsive-portal-btn'> <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon> Patient Portal</button>
                </li>
            </ul>
        </div> : <></>
           }
        </header>

    )
}

export default Header;