import Logo from '../Images/Fortmatic 2x.svg'
import Profile from '../Images/download.png'
import Zoom from '../Images/zoom.png'
import Netflix from '../Images/netflix.jpg'
import Adobe from '../Images/adobe.png'
import Atlassian from '../Images/atlassian.jpeg'



function Home() {
    return (
        <>
            <div className="main-container">
                <div className="top-header">
                    <div className="left-col">
                    <img src={Logo} alt='logo' />
                    </div>
                    <div className="center-col">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </div>
                    <div className="right-col">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="second-row">
                    <div className="navigation">
                        <i class="fa fa-user ,icons" aria-hidden="true"></i>
                        <p>Prospect</p>
                    </div>
                    <div className="navigation">
                        <i class="fa fa-bookmark" aria-hidden="true"></i>
                        <p>Company</p>
                    </div>
                    <div className="navigation">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <p>Find Similar</p>
                    </div>
                </div>

                <div className="personal-links">

                    <div className="image">
                        <img src={Profile} alt='homebanner' />
                    </div>

                    <div className='links'>
                        <div className='links-row'>
                            <i class="fa fa-facebook-official ,round" aria-hidden="true"></i>
                            <i class="fa fa-google" aria-hidden="true"></i>
                            <i class="fa fa-skype" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            <i class="fa fa-github" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className='contact-details'>
                            <button>
                                <i class="fa fa-download" aria-hidden="true"></i>
                                <p>Save Contact</p>
                            </button>
                        </div>


                    </div>
                </div>


                <div className='personal-info'>
                    <h6>Jese Leos</h6>
                    <p className='lighter-font'>CEO</p>
                    <p className='sample-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. </p>
                </div>



                <div className='resume-details'>

                    <div className='email-details'>
                        <div className='col1'>
                            <i class="fa fa-envelope" aria-hidden="true"></i>

                        </div>
                        <div className='col2-color'>
                            <p>View email address</p>
                        </div>
                        <div className='col3'>
                            <p>Bussiness</p>
                        </div>
                    </div>

                    <div className='hq-details'>
                        <div className='col1'>
                        <i class="fa fa-bookmark" aria-hidden="true"></i>

                        </div>
                        <div className='col2-color'>
                            <p>View HQ number</p>
                        </div>
                        <div className='col3'>
                            <p>HQ</p>
                        </div>
                    </div>

                    <div className='mobile-details'>
                        <div className='col1'>
                        <i class="fa fa-phone" aria-hidden="true"></i>

                        </div>
                        <div className='col2-color'>
                            <p>View mobile address</p>
                        </div>
                        <div className='col3'>
                            <p>Mobile</p>
                        </div>
                    </div>

                    <div className='seniority-details'>
                        <div className='col1'>
                        <i class="fa fa-building" aria-hidden="true"></i>

                        </div>
                        <div className='col2'>
                            <p>Seniority</p>
                        </div>
                        <div className='col3'>
                            <p>C-Level</p>
                        </div>
                    </div>

                    <div className='location-details'>
                        <div className='col1'>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>

                        </div>
                        <div className='col2-location'>
                            <p>Location</p>
                        </div>
                        <div className='col3-location'>
                            <p>New York, NY, USA</p>
                        </div>
                    </div>

                    <div className='gender-details'>
                        <div className='col1'>
                        <i class="fa fa-user" aria-hidden="true"></i>

                        </div>
                        <div className='col2'>
                            <p>Gender</p>
                        </div>
                        <div className='col3'>
                            <p>Male</p>
                        </div>
                    </div>

                    <div className='funding-details'>
                        <div className='col1'>
                        <i class="fa fa-usd" aria-hidden="true"></i>

                        </div>
                        <div className='col2'>
                            <p>Funding</p>
                        </div>
                        <div className='col3'>
                            <p>$8M</p>
                        </div>
                    </div>

                    <div className='skillls-details'>
                        <div className='col1'>
                        <i class="fa fa-info-circle" aria-hidden="true"></i>

                        </div>
                        <div className='col2-skills'>
                            <p>Skills</p>
                        </div>
                        <div className='col3-skills'>
                            <p>Microsoft Office, Microsoft Excel, Leadership, Microsoft Word, Reasearch, Powerpoint, Public Speaking, Social Media, Markating</p>
                        </div>
                    </div>

                </div>












                <div className='mid-container'>
                        <div className='contact-info'>
                            <i class="fa fa-info-circle" aria-hidden="true"><span>Contact Information</span></i>
                        </div>
                        <div className='email-phone-address'>
                            <div className='email-details1'>
                                <div className='email-col'>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <p>Mail</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Bussiness</p>
                                <p className='business-color-code'>View Email Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Personal Mail</p>
                                <p className='business-color-code'>View Email Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Other Mail</p>
                                <p className='business-color-code'>View Email Address</p>
                            </div>

                            <div className='email-details1'>
                                <div className='email-col'>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <p>Phone</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Work Phone</p>
                                <p className='business-color-code'>View Mobile Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Personal Phone</p>
                                <p className='business-color-code'>View Mobile Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Other Phone</p>
                                <p className='business-color-code'>View Mobile Address</p>
                            </div>
                        </div>
                        <div className='worked-location'>
                            <div className='contact-info'>
                                <i class="fa fa-globe" aria-hidden="true"><span>Location Worked at</span></i>
                            </div>
                            <div className='worked-location-details'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p>New York, NY, USA</p>
                            </div>
                            <div className='worked-location-details'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p>Huston Texas, USA</p>
                            </div>
                            <div className='worked-location-details'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p>Los Angeles California, USA</p>
                            </div>
                        </div>


                        <div className='skills-contact-info'>
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            <p>Skills</p>
                            <p className='skills-color-code'>Microsoft Office, Microsoft Excel, Leadership, Microsoft Word, Research, Powerpoint, Public Speaking, Social Media, Marketing</p>
                        </div>
                    </div>






                    <div className='right-container'>
                        <div className='contact-info'>
                            <i class="fa fa-suitcase" aria-hidden="true"><span>Companies Worked at</span></i>
                        </div>
                        <div className='companies'>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Zoom} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Zoom</h5>
                                    <p>2020 - Present</p>
                                </div>
                            </div>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Netflix} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Netflix</h5>
                                    <p>2019 - 2020</p>
                                </div>
                            </div>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Adobe} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Adobe</h5>
                                    <p>2015 - 2019</p>
                                </div>
                            </div>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Atlassian} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Atlassian</h5>
                                    <p>2012 - 2015</p>
                                </div>
                            </div>
                        </div>
                        <div className='qualification'>
                            <div className='contact-info'>
                            <i class="fa fa-graduation-cap" aria-hidden="true"><span>Qualifications</span></i>
                            </div>
                            <div className='worked-location-details'>
                            <i class="fa fa-book" aria-hidden="true"></i>
                                <p>Master of Science, Economics</p>
                            </div>
                            <div className='worked-location-details'>
                            <i class="fa fa-book" aria-hidden="true"></i>
                                <p>Bachlor of Science, Economics</p>
                            </div>
                        </div>
                        
                    </div>
                

            </div>
        </>
    )
}


export default Home