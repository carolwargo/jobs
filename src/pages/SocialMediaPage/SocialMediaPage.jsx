import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './SocialmediaPage.css'; // Assuming W3.CSS styles are moved here
import { useState } from 'react';

import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaBell,
  FaBars,
  FaPen, // Replace FaPencil with FaPen
  FaHome as FaHomeIcon,
  FaBirthdayCake,
  FaCircleNotch,
  FaCalendarCheck,
  FaUsers,
  FaThumbsUp,
  FaComment,
  FaCheck,
  FaTimes,
  FaBug,
} from 'react-icons/fa';


export default function SocialmediaPage() {
  // State for accordion and mobile nav
  const [accordionState, setAccordionState] = useState({
    Demo1: false,
    Demo2: false,
    Demo3: false,
  });
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Accordion toggle function
  const toggleAccordion = (id) => {
    setAccordionState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Mobile nav toggle function
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="w3-theme-l5">
      <div className="body">
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-left-align w3-large shadow border-bottom">
            <a
              className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
              href="#"
              onClick={toggleNav}
            >
              <FaBars />
            </a>
            <a href="#" className="w3-bar-item w3-button w3-padding-large ">
              <FaHome className="w3-margin-right" /> Logo
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News">
              <FaHome /> 
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings">
              <FaUser />
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages">
              <FaEnvelope />
            </a>
            <div className="w3-dropdown-hover w3-hide-small">
              <button className="w3-button w3-padding-large" title="Notifications">
                <FaBell />
                <span className="w3-badge w3-right w3-small w3-green">3</span>
              </button>
              <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
                <a href="#" className="w3-bar-item w3-button">One new friend request</a>
                <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
                <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
              </div>
            </div>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
              <img
               src="https://i.pravatar.cc/150?img=2" 
               alt="Avatar 2"
                className="w3-circle"
                style={{ height: '23px', width: '23px' }}
              />
            </a>
          </div>
        </div>

        {/* Navbar on small screens */}
        <div
          id="navDemo"
          className={`w3-bar-block w3-theme-d2 w3-large ${isNavOpen ? 'w3-show' : 'w3-hide'} w3-hide-large w3-hide-medium`}
        >
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        </div>

        {/* Page Container */}
        <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
          {/* The Grid */}
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center">
                    <img
                    src="https://i.pravatar.cc/150?img=3" alt="Avatar 3"
                      className="w3-circle"
                      style={{ height: '106px', width: '106px' }}
                    />
                  </p>
                  <hr />
           <p>
  <FaPen className="fa-fw w3-margin-right w3-text-theme" /> Designer, UI
</p>
                  <p>
                    <FaHomeIcon className="fa-fw w3-margin-right w3-text-theme" /> London, UK
                  </p>
                  <p>
                    <FaBirthdayCake className="fa-fw w3-margin-right w3-text-theme" /> April 1, 1988
                  </p>
                </div>
              </div>
              <br />

              {/* Accordion */}
              <div className="w3-card w3-round">
                <div className="w3-white">
                  <button
                    onClick={() => toggleAccordion('Demo1')}
                    className={`w3-button w3-block w3-theme-l1 w3-left-align ${accordionState.Demo1 ? 'w3-theme-d1' : ''}`}
                  >
                    <FaCircleNotch className="fa-fw w3-margin-right" /> My Groups
                  </button>
                  <div id="Demo1" className={`w3-container ${accordionState.Demo1 ? 'w3-show' : 'w3-hide'}`}>
                    <p>Some text..</p>
                  </div>
                  <button
                    onClick={() => toggleAccordion('Demo2')}
                    className={`w3-button w3-block w3-theme-l1 w3-left-align ${accordionState.Demo2 ? 'w3-theme-d1' : ''}`}
                  >
                    <FaCalendarCheck className="fa-fw w3-margin-right" /> My Events
                  </button>
                  <div id="Demo2" className={`w3-container ${accordionState.Demo2 ? 'w3-show' : 'w3-hide'}`}>
                    <p>Some other text..</p>
                  </div>
                  <button
                    onClick={() => toggleAccordion('Demo3')}
                    className={`w3-button w3-block w3-theme-l1 w3-left-align ${accordionState.Demo3 ? 'w3-theme-d1' : ''}`}
                  >
                    <FaUsers className="fa-fw w3-margin-right" /> My Photos
                  </button>
                  <div id="Demo3" className={`w3-container ${accordionState.Demo3 ? 'w3-show' : 'w3-hide'}`}>
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                      <img src="https://picsum.photos/id/1015/600/400" alt="Lights" style={{ width: '100%' }} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                      <img src="https://picsum.photos/id/1016/600/400" alt="Nature" style={{ width: '100%' }} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                      <img src="https://picsum.photos/id/1002/600/400" alt="Mountains" style={{ width: '100%' }} className="w3-margin-bottom"/>

                      </div>
                      <div className="w3-half">
                      <img src="https://picsum.photos/id/1003/600/400" alt="Forest" style={{ width: '100%' }} className="w3-margin-bottom"/>
                      </div>
                      <div className="w3-half">
                      <img src="https://picsum.photos/id/1011/600/400" alt="Snow" style={{ width: '100%' }} className="w3-margin-bottom"/>
                      </div>
                      <div className="w3-half">
                      <img src="https://picsum.photos/id/1015/600/400" alt="Lights" style={{ width: '100%' }} className="w3-margin-bottom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {/* Interests */}
              <div className="w3-card w3-round w3-white w3-hide-small">
                <div className="w3-container">
                  <p>Interests</p>
                  <p>
                    <span className="w3-tag w3-small w3-theme-d5">News</span>
                    <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>
                    <span className="w3-tag w3-small w3-theme-d3">Labels</span>
                    <span className="w3-tag w3-small w3-theme-d2">Games</span>
                    <span className="w3-tag w3-small w3-theme-d1">Friends</span>
                    <span className="w3-tag w3-small w3-theme">Games</span>
                    <span className="w3-tag w3-small w3-theme-l1">Friends</span>
                    <span className="w3-tag w3-small w3-theme-l2">Food</span>
                    <span className="w3-tag w3-small w3-theme-l3">Design</span>
                    <span className="w3-tag w3-small w3-theme-l4">Art</span>
                    <span className="w3-tag w3-small w3-theme-l5">Photos</span>
                  </p>
                </div>
              </div>
              <br />

              {/* Alert Box */}
              <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                <span
                  onClick={(e) => (e.target.parentElement.style.display = 'none')}
                  className="w3-button w3-theme-l3 w3-display-topright"
                >
                  < FaTimes />  
                </span>
                <p>
                  <strong>Hey!</strong>
                </p>
                <p>People are looking at your profile. Find out who.</p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <h6 className="w3-opacity">Social Media template by w3.css</h6>
                      <p className="w3-border w3-padding text-muted">Start a post</p>
                      {/**<p contentEditable className="w3-border w3-padding">Status: Feeling Blue</p>*/}
                      <button type="button" className="w3-button w3-theme">
                        <FaPen /> Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="https://i.pravatar.cc/150?img=2" 
                  alt="Avatar 2" 
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: '60px' }}
                />
                <span className="w3-right w3-opacity">1 min</span>
                <h4>John Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                  <div className="w3-half">
                    <img src="https://picsum.photos/id/1015/600/400" alt="Northern Lights" style={{ width: '100%' }} className="w3-margin-bottom" />
                  </div>
                  <div className="w3-half">
                    <img src="https://picsum.photos/id/1016/600/400" style={{ width: '100%' }} alt="Nature" className="w3-margin-bottom" />
                  nhiệm</div>
                </div>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <FaThumbsUp /> Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <FaComment /> Comment
                </button>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                 src="https://i.pravatar.cc/150?img=3" 
                 alt="Avatar 3"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: '60px' }}
                />
                <span className="w3-right w3-opacity">16 min</span>
                <h4>Jane Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <FaThumbsUp /> Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <FaComment /> Comment
                </button>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
              src="https://i.pravatar.cc/150?img=6" 
              alt="Avatar 6"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: '60px' }}
                />
                <span className="w3-right w3-opacity">32 min</span>
                <h4>Angie Jane</h4>
                <br />
                <hr className="w3-clear" />
                <p>Have you seen this?</p>
                <img src="https://picsum.photos/id/1016/600/400" alt="Nature" style={{ width: '100%' }} className="w3-margin-bottom" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <FaThumbsUp /> Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <FaComment /> Comment
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="w3-col m2">
              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Upcoming Events:</p>
                  <img src="https://picsum.photos/id/1003/600/400" alt="Forest" style={{ width: '100%' }} />
                  <p>
                    <strong>Holiday</strong>
                  </p>
                  <p>Friday 15:00</p>
                  <p>
                    <button className="w3-button w3-block w3-theme-l4">Info</button>
                  </p>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Friend Request</p>
                  <img src="https://i.pravatar.cc/150?img=6" alt="Avatar 6" style={{ width: '50%' }} />
                  <br />
                  <span>Jane Doe</span>
                  <div className="w3-row w3-opacity">
                    <div className="w3-half">
                      <button className="w3-button w3-block w3-green w3-section" title="Accept">
                        <FaCheck />
                      </button>
                    </div>
                    <div className="w3-half">
                      <button className="w3-button w3-block w3-red w3-section" title="Decline">
                        <i className='fas fa-remove'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
                <p>ADS</p>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
                <p>
                  <FaBug className="w3-xxlarge" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Footer */}
        <footer className="w3-container w3-theme-d3 w3-padding-16">
          <h5>Footer</h5>
        </footer>

        <footer className="w3-container w3-theme-d5">
          <p>
            Powered by{' '}
            <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">
              w3.css
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

