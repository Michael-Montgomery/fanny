import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/header';
import './home.css';
import { faEnvelope, faGraduationCap, faPhone, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import OpenIndicator from '../../components/openindicator/openindicator';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import recentBlogPosts from '../../data/recentBlogPosts';
import Footer from '../../components/footer/footer';

function Home() {


    const [practiceIsOpen, setPracticeIsOpen] = useState(new Date().getHours() > 7 && new Date().getHours() < 17 && new Date().getDay() !== 0 && new Date().getDay() !== 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPracticeIsOpen(new Date().getHours() > 7 && new Date().getHours() < 17 && new Date().getDay() !== 0 && new Date().getDay() !== 1);
        }, 6000);

        return () => clearInterval(interval);

    }, [])


    return (
        <>
            <Header></Header>
            <div id='welcome-picture-slide-wrapper'></div>
            <ul id='welcome-widgets-list'>
                <li>
                    <div>
                        <h2><FontAwesomeIcon icon={faStethoscope}></FontAwesomeIcon></h2>
                        <p>Extraordinary care</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></h2>
                        <p>World-Class Compassion</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></h2>
                        <p>Trusted experience</p>
                    </div>
                </li>
            </ul>
            <div id='intro-wrapper'>
                <h2>A word from Fanny Hooks, NP</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br></br>
                <div id='headshot-wrapper'></div>
                <p id='headshot-name'>Fanny Hooks, NP</p>
                <hr></hr>
                <h2>Recent Blog Posts</h2>
                <ul id='recent-blogs-list'>
                    {
                        recentBlogPosts.map((post, idx) => {
                            return (
                                <li key={idx}>
                                    <div className='recent-blog-post-wrapper'>
                                        <h3 className='recent-blog-post-title'>{post.title}</h3>
                                        <p className='recent-blog-post-post'>{post.post}</p>
                                        <p className='recent-blog-post-data'>{post.datePosted}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='center'><button id='view-all-blog-posts-btn' onClick={() => { window.location.href = '/blog'}}>View all blog posts</button></div>
            </div>
            <div id='features-wrapper'>
                <div id='specialties-wrapper'>
                    <address>
                        1600 Pennsylvania Avenue<br></br>
                        Washington, DC 20500 <br></br>
                        Hours: M - F | 8:00AM - 5:00PM <OpenIndicator openNow={practiceIsOpen}></OpenIndicator>
                    </address>
                </div>
                <hr></hr>
                <div id='insurances-wrapper'>
                    <ul>
                        {
                            practiceIsOpen ? <li>
                                <a href='tel:3214084250'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a>
                            </li> : <></>
                        }
                        <li>
                            <a href='mailto:thehealthyprogrammer@outlook.com'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                        </li>
                        <li>
                            <a href='http://www.facebook.com'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                        </li>
                    </ul>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;