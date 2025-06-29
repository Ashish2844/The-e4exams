import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedOnView from '../components/AnimatedOnView'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image10 from './../assets/images/center-image-10.jpeg'
import image9 from './../assets/images/center-image-9.jpeg'
import image15 from './../assets/images/center-image-15.jpeg'
import image5 from './../assets/images/center-image-5.jpeg'
import image12 from './../assets/images/center-image-12.jpeg'
import image13 from './../assets/images/center-image-13.jpeg'
import { useLayoutEffect } from 'react';


const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    };

    const settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className='headerService'><Header /></section>

            {/* Delivery Section Start */}

            <AnimatedOnView direction='left'>
                <section className='delivery'>
                    <div className="container">
                        <h1 className='text-center fw-bold text-white mb-4'>Services</h1>
                        <div className="row mt-5 mb-5">
                            <div className="col-md-6">
                                <div className="image">
                                    <Slider {...settings}>
                                        <div className='swiperslide'>
                                            <img src={image10} alt="examimg" />
                                        </div>
                                        <div className='swiperslide'>
                                            <img src={image9} alt="examimg" />
                                        </div>
                                        <div className='swiperslide'>
                                            <img src={image15} alt="examimg" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4 mb-4 content">
                                <h3 className='fw-bold'>Examination Delivery Solutions</h3>
                                <p className='fw-bold fs-5'>We specialize in managing the complete delivery of examinations — from registration to result publishing — using state-of-the-art technology and proven processes.</p>
                                <span className='fw-bold'>Our offerings include:</span>

                                <ul>
                                    <li className='mt-2 mb-2'>
                                        <b>Computer-Based Testing (CBT): </b><span>Secure online exams with real-time monitoring and instant result generation.</span>
                                    </li>

                                    <li className='mt-2 mb-2'>
                                        <b>Paper-Based Testing (PBT):</b><span>Traditional exam formats with efficient logistics and invigilation management.</span>
                                    </li>
                                    <li className='mt-2 mb-2'>
                                        <b>Hybrid Examinations:</b><span>Combining online and offline methods to meet diverse assessment needs.</span>
                                    </li>
                                    <li className='mt-2 mb-2'>
                                        <b>Remote Proctoring:</b><span> AI-enabled and live proctoring services ensuring integrity in remote examinations.</span>
                                    </li>
                                    <li className='mt-2 mb-2'>
                                        <b>Candidate Management:</b><span> Smooth scheduling, admit card distribution, and on-site candidate verification.</span>
                                    </li>
                                    <li className='mt-2 mb-2'>
                                        <b>Real-time Analytics:</b><span>Instant reporting dashboards and exam performance insights.</span>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>

                </section>
            </AnimatedOnView>

            {/* Delivery Section End */}

            {/* Process Section Start */}
            <AnimatedOnView direction='left'>
                <section className="process  mb-5">
                    <h2 className='text-center fw-bold text-white mt-5 mb-5'>Process And Assessment Solutions</h2>
                    <div className="container">
                        <div className="row">
                            <Slider {...settings}>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Integrity and Transparency</h5>
                                        <p className='text-center'>We believe in conducting all our operations with honesty, fairness, and openness. Integrity is at the heart of every exam we facilitate, ensuring trust and credibility across all stakeholders.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Innovation and Technology Leadership</h5>
                                        <p className='text-center'> We continuously embrace emerging technologies to enhance the examination process. Our commitment to innovation drives us to create smarter, more efficient, and secure solutions for modern-day assessments.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Customer-Centric Approach</h5>
                                        <p className='text-center'>Our clients’ needs are at the core of our services. We listen, adapt, and tailor our solutions to ensure seamless experiences and long-term partnerships based on trust, support, and success.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Excellence in Service Delivery</h5>
                                        <p className='text-center'> We strive for perfection in every project, big or small. Our team is dedicated to delivering high-quality service with precision, speed, and professionalism, ensuring every examination experience is smooth and hassle-free.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Security and Confidentiality</h5>
                                        <p className='text-center'> We uphold the highest standards of data security and confidentiality. Safeguarding exam content, candidate information, and organizational data is a non-negotiable priority for us.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Accessibility and Inclusiveness</h5>
                                        <p className='text-center'> We are committed to making examinations accessible to all candidates across diverse geographies and backgrounds. Our infrastructure is designed to accommodate different needs, promoting fairness and equal opportunity.</p>
                                    </div>
                                </div>
                            </Slider>

                        </div>
                    </div>

                </section>
            </AnimatedOnView>
            {/* Process Section End*/}

            {/* Infra Section Start */}
            <AnimatedOnView direction='left'>
                <section className="infra">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-5 mb-5 content">
                                <h3 className='fw-bold'>InfraStructure Support Services</h3>
                                <p className='fw-bold fs-5'>We deliver comprehensive infrastructure management, so you can focus on delivering an outstanding assessment experience.</p>

                                <ul>
                                    <li className='mt-4 mb-4'>
                                        <b>Pan-India Exam Centers:</b><span>Deployment and management of hundreds of certified centers.</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>On-Site Support Teams:</b><span>Experienced technical and administrative staff to manage day-to-day operations.</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>Biometric Verification & CCTV Surveillance:</b><span>Ensuring the authenticity and security of every candidate.</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>Logistics and Resource Planning:</b><span>Exam material handling, secure transportation, and on-ground management..</span>
                                    </li>
                                    <li className='mt-4 mb-4'>
                                        <b>Disaster Recovery Systems:</b><span>Zero downtime solutions with backup systems to manage unexpected disruptions.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 mb-5">
                                <div className="image">
                                    <Slider {...settings}>
                                        <div className='swiperslide'>
                                            <img src={image12} alt="examimg" />
                                        </div>
                                        <div className='swiperslide'>
                                            <img src={image13} alt="examimg" />
                                        </div>
                                        <div className='swiperslide'>
                                            <img src={image5} alt="examimg" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedOnView>
            {/* Infra Section End */}

            {/* Resource section start */}
            <AnimatedOnView direction='left'>
                <section className="resource  mb-5">
                    <h2 className='text-center mt-5 mb-5'>Resource Deployment and Managment</h2>
                    <div className="container">
                        <div className="row">
                            <h4 >Biometric and Technical staff</h4>
                            <Slider {...settings1}>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Seamless Candidate
                                            Registration
                                        </h5>
                                        <p className='text-center'>Trained staff efficiently manage
                                            candidate onboarding, reducing
                                            wait times and errors. All data is
                                            captured securely and
                                            systematically.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Identity Verification &
                                            Biometric Validation</h5>
                                        <p className='text-center'> Fingerprint and facial recognition
                                            systems are used to verify
                                            candidate identities, preventing
                                            impersonation and ensuring exam
                                            integrity</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Technical Support &
                                            Troubleshooting</h5>
                                        <p className='text-center'>On-site technical teams are
                                            available to handle hardware and
                                            software issues, ensuring
                                            uninterrupted exam delivery.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Device Management & Setup</h5>
                                        <p className='text-center'> Experts manage the setup and
                                            configuration of biometric devices,
                                            workstations, and networking
                                            equipment as per exam board
                                            protocols.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Compliance with Security
                                            Protocols</h5>
                                        <p className='text-center'>Staff are trained in data privacy,
                                            cybersecurity, and exam board
                                            guidelines to maintain
                                            confidentiality and compliance.</p>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="content">
                                        <h5 className='fw-bold mt-4'>Real-Time Coordination</h5>
                                        <p className='text-center'> Live communication with control
                                            centers enables swift escalation
                                            and resolution of any technical or
                                            biometric issues.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
            </AnimatedOnView>
            {/* Resource section end */}

            {/* Resource2 section start */}
            <AnimatedOnView direction='left'>
                <section className="resource2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 content">
                                <h4>Control Room Setup</h4>
                                <ul>
                                    <li>
                                        <h5>Centralized Command & Control
                                        </h5>
                                        Dedicated supervisors manage live
                                        monitoring of exam operations
                                        across multiple locations from a
                                        centralized hub.
                                    </li>
                                    <li>
                                        <h5>Real-Time Communication</h5>
                                        Seamless coordination with onground teams through phone,
                                        video, and messaging channels for
                                        immediate support and guidance.
                                    </li>
                                    <li>
                                        <h5>Incident Response & Escalation</h5>
                                        Any irregularities, technical issues,
                                        or security concerns are flagged
                                        instantly and addressed through
                                        predefined escalation protocols
                                    </li>
                                    <li>
                                        <h5>Live Data & Dashboard Access</h5>
                                        Supervisors have access to realtime dashboards displaying
                                        candidate attendance, biometric
                                        verification, and technical
                                        performance metrics
                                    </li>
                                    <li>
                                        <h5>Audit Trail & Recording</h5>
                                        All communication and system
                                        activity are logged to maintain a
                                        verifiable audit trail and ensure
                                        accountability.
                                    </li>
                                    <li>
                                        <h5>Support for Multiple Exams &
                                            Clients</h5>
                                        Control rooms are equipped to
                                        manage operations for multiple
                                        exams concurrently, ensuring
                                        scalability and efficiency
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 content">
                                <h4>Security Personnel</h4>
                                <ul>
                                    <li>
                                        <h5>On-Site Safety & Supervision</h5>
                                        Trained security guards are
                                        deployed at exam centers to
                                        manage entry points, prevent
                                        unauthorized access, and maintain
                                        order.
                                    </li>
                                    <li>
                                        <h5>Confidentiality Assurance
                                        </h5>
                                        Strict protocols are enforced to
                                        protect sensitive exam materials
                                        and candidate data throughout
                                        the examination process.
                                    </li>
                                    <li>
                                        <h5>Crowd Control & Candidate
                                            Management</h5>
                                        <li>Guards assist in organized entry
                                            and exit of candidates, ensuring
                                            compliance with schedules and
                                            reducing the risk of misconduct.</li>
                                    </li>
                                    <li>
                                        <h5>Surveillance & Monitoring
                                            Support</h5>
                                        Security personnel assist with
                                        monitoring CCTV feeds and
                                        flagging suspicious activity for
                                        immediate action.
                                    </li>
                                    <li>
                                        <h5>Coordination with Control Room</h5>
                                        Direct communication lines with
                                        central monitoring teams ensure
                                        fast response to any security
                                        concerns or emergencies.
                                    </li>
                                    <li>
                                        <h5>Compliance with Exam Board
                                            Protocols</h5>
                                        All security staff are briefed on
                                        exam-specific guidelines and
                                        standard operating procedures to
                                        ensure consistency and
                                        professionalism.

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </AnimatedOnView>
            {/* Resource2 section end */}


            {/* Sectors Section Start */}
            <AnimatedOnView direction='left'>
                <section className="sector">
                    <h1 className='text-white mt-5 fw-bold text-center'>Sectors We Serve</h1>
                    <ul>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Universities and Higher Education Institutions</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Government Recruitment and Entrance Examinations</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Public Sector Undertakings (PSUs)</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Corporate Skill Assessments and Certifications</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Professional Certification and Licensing Bodies</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/?size=160&id=70836&format=png" alt="star" />
                            <span className='fs-3 text-white fw-bold ms-2'>Non-Governmental Organizations (NGOs) conducting skill tests</span>
                        </li>

                    </ul>
                </section>
            </AnimatedOnView>
            {/* Sectors Section End */}

            <AnimatedOnView direction='left'>
                <section className='footer' id='footer'><Footer /></section>
            </AnimatedOnView>

        </>
    )
}

export default Services

