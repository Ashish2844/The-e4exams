import { React } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic1 from '../assets/images/pic3.jpg'
import pic2 from './../assets/images/exampic2.jpg'
import image5 from './../assets/images/center-image-5.jpeg'
import image2 from './../assets/images/center-image-2.jpeg'
import image3 from './../assets/images/center-image-3.jpeg'
import image4 from './../assets/images/center-image-4.jpeg'
import image7 from './../assets/images/center-image-7.jpeg'
import image8 from './../assets/images/center-image-8.jpeg'
import image6 from './../assets/images/center-image-6.jpeg'
import image15 from './../assets/images/center-image-15.jpeg'
import image11 from './../assets/images/center-image-11.jpeg'
import { MdOutlinePersonPin } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { FaFlagCheckered } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaChair } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import AnimatedOnView from '../components/AnimatedOnView';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { useLayoutEffect } from 'react';




const Home = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show button only after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5500,
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

  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
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
      },
      {
        breakpoint: 324,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const settings3 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className='header'><Header /></section>

      {/* Slider Section Start */}
      <section>
        <section className="slider">
          <div className="slider-container mb-4">
            <Slider {...settings}>
              <div className='swiperslide'>
                <img src={pic1} alt="examimg" className='pic1' />
                <div className="cont">
                  <p>Expert, Secure and Reliable Solution for Examination Delievery.</p>
                </div>
              </div>
              <div className='swiperslide'>
                <img src={pic2} alt="examimg" className='pic2' />
                <div className="cont">
                  <p>Global Network of Colleges and Universities with state-of-the-Art Facilities.</p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </section>

      {/* Slide Section End */}


      {/* About Section Start */}
      <AnimatedOnView direction='left'>
        <section className="mb-5 about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 content">
                <h1 className="mb-5 mt-5">About e<sup>4</sup>exams </h1>
                <p>
                  Founded in early 2025 , The
                  e<sup>4</sup>exams has been a pioneer in providing examination delivery,
                  process and assessment solutions, and infrastructural support to
                  Educational Institutions, Government/Public Sector and Corporates.
                </p>
                <p>
                  The e<sup>4</sup>exams is a trusted examination delivery and infrastructure
                  provider in the public and private sectors. On their behalf, we
                  securely deliver a reliable, convenient and hassle-free examination
                  experience to those seeking to improve their lives by starting a new
                  career or developing skills/qualifications for professional development.
                </p>
                <button className="text-center">
                  <Link to="/registration-form">
                    Test Center Registration <FaArrowCircleRight />
                  </Link>
                </button></div>
              <div className="col-md-6 image start-first order-first">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={image2} alt="image" className='img1 img-fluid' />
                    </div>
                    <div className="col-md-4">
                      <img src={image4} alt="image" className='img2 img-fluid' />
                    </div>
                    <div className="col-md-4">
                      <img src={image5} alt="image" className='img3 img-fluid' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </AnimatedOnView >


      {/* About Section End */}


      {/* about2 section start */}

      <section className='about2'>
        <div className="container main">
          <div className="row">
            <div className="col-md-5 image">
              <div className="image1">
                <Slider {...settings2}>
                  <div className='swiperslide'>
                    <img src={image5} alt="examimg" />
                  </div>
                  <div className='swiperslide'>
                    <img src={image3} alt="examimg" />
                  </div>
                  <div className='swiperslide'>
                    <img src={image4} alt="examimg" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 content  mt-4">
                    <h3 className='mt-4 mb-4 ms-2'>Trusted Partner</h3>
                    <ul>
                      <li>Supporting educational
                        institutions, government
                        bodies, and ed-tech firms
                        across India.</li>
                      <li>
                        Reliable collaboration to
                        ensure seamless, secure,
                        and scalable exam delivery
                        nationwide.
                      </li>
                      <li>
                        Commitment to quality,
                        transparency, and timely
                        communication at every
                        stage.
                      </li>

                      <li>
                        Proven expertise in
                        managing diverse exam
                        formats and large
                        candidate volumes
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5 content mt-4">
                    <h3 className='mt-2 mb-2 ms-2'>Vendor-Side Provider</h3>
                    <ul>
                      <li>End-to-end management
                        of backend operations
                        including center scouting
                        and infrastructure setup.
                      </li>
                      <li>
                        Efficient deployment and
                        training of skilled staff
                        tailored to exam
                        requirements.
                      </li>
                      <li>
                        Coordination of logistics
                        and technology to ensure
                        smooth and timely exam
                        delivery
                      </li>
                      <li>Continuous monitoring
                        and real-time problem-solving to uphold quality
                        standards</li>
                      <li>
                        Transparent reporting and
                        compliance adherence to
                        meet client and
                        regulatory expectations.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-11 content mt-4 mb-4">
                    <h3 className='mt-2 mb-2 ms-2'>Experience</h3>
                    <ul>
                      <li>Extensive expertise across a wide range of exam formats
                        including online, offline, proctored, and biometric-based
                        assessments.</li>
                      <li>
                        Proven track record of delivering reliable and efficient exam
                        operations under varied conditions
                      </li>
                      <li>Deep understanding of regulatory requirements and best
                        practices to ensure compliance and quality.
                      </li>
                      <li>Skilled in handling large-scale projects with complex logistics
                        and tight timelines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about2 section end */}

      {/* center-manage section start */}

      <AnimatedOnView direction='left'>
        <section className='center-manage'>
          <h2>Online Center Management</h2>
          <div className="container mt-5">
            <div className="row mt-5 mb-5">
              <div className="col-md-6 order-md-2 order-1">
                <div className="image">
                  <Slider {...settings}>
                    <div className='swiperslide'>
                      <img src={image7} alt="examimg" />
                    </div>
                    <div className='swiperslide'>
                      <img src={image8} alt="examimg" />
                    </div>
                    <div className='swiperslide'>
                      <img src={image6} alt="examimg" />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-md-6  content order-md-1 order-2">
                <h3 className='mt-4 mb-4'>Booking</h3>
                <ul>
                  <li><h5>Efficient Booking & Scheduling</h5>
                    Secure reservation of verified tech-enabled centers, aligned
                    with exam dates and candidate numbers.</li>
                  <li>
                    <h5>Advanced & Secure Infrastructure</h5>
                    High-performance devices with lockdown software and
                    isolated testing environments to ensure exam security
                  </li>

                  <li>
                    <h5>Reliable Connectivity & Power Backup
                    </h5>
                    High-speed internet with redundancy and uninterrupted
                    power supply for smooth exam delivery.
                  </li>
                  <li>
                    <h5>On-Site Technical Support</h5>
                    Skilled IT staff available for setup, troubleshooting, and real-time assistance linked to a central control room
                  </li>
                  <li>
                    <h5>Robust Monitoring & Proctoring</h5>
                    Comprehensive surveillance including CCTV, screen recording,
                    and proctoring to maintain integrity.
                  </li>
                  <li>
                    <h5>Strict Data Security</h5>
                    Full compliance with data privacy and secure handling of
                    exam-related information.
                  </li>
                  <li>
                    <h5>Candidate-Friendly Setup</h5>
                    Easy check-in, ergonomic seating, and a comfortable
                    environment to support candidate focus.
                  </li>
                </ul>
              </div>
              <div className="col-md-10 mt-5 content order-md-3 order-3">
                <h2 className='mt-2 mb-4'>Large Scale Exams</h2>
                <ul><li className=' mt-2 mb-2'>
                  Nationwide network of centers prepared to handle high
                  candidate volumes seamlessly.
                </li>
                  <li className=' mt-2 mb-2'>Scalable infrastructure ensuring consistent performance
                    across multiple locations simultaneously.</li>
                  <li className=' mt-2 mb-2'>
                    Robust scheduling and resource management to
                    accommodate last-minute changes or spikes in demand.
                  </li>
                  <li className=' mt-2 mb-2'>End-to-end support including setup, monitoring, and rapid
                    troubleshooting for uninterrupted exam delivery.
                  </li>
                  <li className=' mt-2 mb-2'>
                    Proven capability to maintain security, integrity, and
                    compliance on a large scale.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      </AnimatedOnView>

      {/* center-manage section end */}

      {/*offline center-manage section start */}


      <AnimatedOnView direction='left'>
        <section className='offline-center-manage'>
          <h2>Offline Center Management</h2>
          <div className="container mt-5">
            <div className="row mt-5 mb-5">
              <div className="col-md-6">
                <div className="image">
                  <Slider {...settings}>
                    <div className='swiperslide'>
                      <img src={image6} alt="examimg" />
                    </div>
                    <div className='swiperslide'>
                      <img src={image15} alt="examimg" />
                    </div>
                    <div className='swiperslide'>
                      <img src={image11} alt="examimg" />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-md-6  content">
                <h2 className='mt-4 mb-4'>Verified Venues</h2>
                <ul>
                  <li>All exam centers are pre-screened and approved based
                    on strict criteria for infrastructure, accessibility, and
                    safety.</li>
                  <li>
                    Facilities include secure rooms, proper lighting,
                    ventilation, and essential amenities to ensure a
                    conducive exam environment
                  </li>
                  <h5 className='mt-4 mb-2'>Secure Storage & Logistics
                  </h5>
                  <li>
                    Dedicated storage areas for confidential exam materials,
                    secured with lock-and-seal protocols and monitored
                    access.
                  </li>
                  <li>Timely delivery and retrieval of question papers and
                    answer booklets with strict chain-of-custody procedures.</li>
                  <h5 className='mt-4 mb-2'>Candidate Seating & Infrastructure</h5>
                  <li>Clearly marked seating plans with appropriate spacing to
                    prevent malpractice and ensure comfort.</li>
                  <li>Availability of backup supplies such as stationery, ID tags,
                    and attendance sheets</li>

                  <h5 className='mt-4 mb-2'>Trained Local Staff & Supervisors
                  </h5>
                  <li>
                    Experienced invigilators, center coordinators, and
                    support staff manage operations with professionalism
                    and efficiency.
                  </li>
                  <li>Emergency protocols and escalation procedures in place
                    to handle contingencies.</li>
                  <h5 className='mt-4 mb-2'>Compliance & Monitoring</h5>
                  <li>
                    Adherence to exam board guidelines and state
                    regulations.
                  </li>
                  <li>Surprise audits and control room coordination ensure
                    consistent quality across centers.</li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      </AnimatedOnView>

      {/* offline-center-manage section end */}


      {/* Infrastructure section starts */}
      <AnimatedOnView direction='left'>
        <section className='infrastructure'>
          <div className="container">
            <div className="row">
              <div className="col-md-10 mt-5 content">
                <h2 className='mt-2 mb-4'>Infrastructure</h2>
                <ul>

                  <li>
                    <h5 className='mt-4 mb-2'>Furnished Exam-Ready Venues</h5>
                    All centers are equipped with essential furniture
                    including desks, chairs, and seating arrangements that
                    comply with exam board norms.
                  </li>

                  <li>
                    <h5 className='mt-4 mb-2'>Whiteboards & Display Tools</h5>
                    Each exam room includes whiteboards or notice boards
                    for displaying important instructions, seating plans, and
                    announcements.</li>
                  <li><h5 className='mt-4 mb-2'>Surveillance Systems</h5>
                    High-definition CCTV cameras are installed to ensure
                    360° monitoring of exam activities, enhancing security
                    and accountability</li>
                  <li><h5 className='mt-4 mb-2'>Power Backup & Connectivity</h5>
                    Uninterrupted power supply through inverters or
                    generators, and internet connectivity where required for
                    hybrid or tech-enabled exams.
                  </li>
                  <li><h5 className='mt-4 mb-2'>Administrative Supplies</h5>
                    Provision of registers, stationery, ID badges, attendance
                    sheets, seals, and other materials needed for smooth
                    exam administration.</li>
                  <li><h5 className='mt-4 mb-2'>Compliance with Safety & Accessibility Norms
                  </h5>Venues are selected and equipped to ensure fire safety,
                    emergency exits, and accessibility for differently-abled
                    candidates.</li>
                  <li><h5 className='mt-4 mb-2'>Sanitation & Hygiene Facilities
                  </h5>Clean and well-maintained washrooms, hand sanitizers,
                    and housekeeping staff are provided to ensure a hygienic
                    environment for candidates and staff.</li>
                  <li><h5 className='mt-4 mb-2'>Waiting & Holding Areas</h5>Designated areas for candidates, guardians, and staff to
                    wait before or after exams, helping manage crowd flow
                    and reduce congestion at entry points.</li>
                  <li><h5 className='mt-4 mb-2'>Signage & Navigation Aids
                  </h5>Clear signage within and around the center helps
                    candidates navigate to their rooms, registration desks,
                    and facilities without confusion.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>
      {/* Infrastructure section ends */}


      {/* Purpose Section Start */}
      <AnimatedOnView direction="left">
        <section className="purpose">
          <h3 className='text-center mt-3'>Our Purpose</h3>
          <h1 className='text-center mt-3 mb-4'>The e<sup>4</sup>exams Philosophy</h1>

          <div className="container mb-4">
            <div className="row">
              <div className="col-md-4 ms-4 mb-4 box">
                <h3 className='text-left ms-4 mt-5 '>Vision</h3>
                <p className='text-left mt-4 ms-4 w-75'>Become the preferred and reliable partner in the global examination delivery ecosystem, providing the best-in-class service, infrastructure and manpower through state-of-the-art technology, standardized examination delivery, and a customer-centric approach facilitating stellar performance of examination takers. </p>
              </div>
              <div className="col-md-4 ms-4 mb-4 box">
                <h3 className='text-left ms-4 mt-5 '>Mission</h3>
                <p className='text-sm-left mt-4 ms-4 w-75'>Providing high quality, trusted and standardized examination experience through reliable centres globally, with connectivity, security and futuristic hi-tech solutions, infrastructure and manpower that guarantee a level playing field for all examination takers.</p>
              </div>
              <div className="col-md-4 ms-4 mb-4 box">
                <h3 className='text-left ms-4 mt-5 '>Values</h3>
                <p className='text-sm-left mt-4 ms-4 w-75'>Our Values are fundamental to our organization's culture and behaviors and serve as a reinforcing bedrock to our commitment towards quality, standardization and reliability.</p>
                <div className='text-left ms-4'>
                  <p>
                    <MdOutlinePersonPin />
                    <b>Customer Centeric </b><br />
                    <i>Putting customer first</i>
                  </p>
                  <p>
                    <FaRegHandshake />
                    <b>Trustworthy </b><br />
                    <span>Your trusted partner</span>
                  </p>
                  <p>
                    <IoEarthOutline />
                    <b>Futuristic </b><br />
                    <span>Leading with vision</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>

      {/* Purpose Section End */}

      {/* Experience Section Start */}

      <section className="experience">
        <h1 className="text-center mt-5">The e<sup>4</sup>exams Experience</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo mb-2"><FaFlagCheckered /></div>
              <CountUp start={0} end={1} duration={10} />
              <p>Countries</p>
            </div>
            <div className="col-md-2">
              <div className="logo"><FaMap /></div>
              <CountUp start={0} end={200} duration={10} />
              <p>Cities</p>
            </div>
            <div className="col-md-2">
              <div className="logo"><FaChair /></div>
              <CountUp start={0} end={105324} duration={10} />
              <p>Seats</p>
            </div>
            <div className="col-md-2">
              <div className="logo"><IoLocation /></div>
              <CountUp start={0} end={2576} duration={10} className='mt-4' />
              <p>Examination Centers</p>
            </div>
            <div className="col-md-2">
              <div className="logo"><IoIosPeople /></div>
              <CountUp start={0} end={14} duration={10} />
              <p>Active Clients</p>
            </div>


          </div>
        </div>
      </section>

      {/* Experience Section End */}


      {/* Clients Section Start */}
      <AnimatedOnView direction='left'>
        <section className='clients w-auto h-auto'>
          <h1 className='text-center mt-5 fw-bold'>The e<sup>4</sup>exams Clients</h1>
          <div className="container">
            <div className="row">
              <Slider {...settings3}>
                <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-49.png" alt="image" /></div>
                <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-10.png" alt="image" /></div>
                <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-02.png" alt="image" /></div>
                <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-18.png" alt="image" /></div>
                <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-47.png" alt="image" /></div>
                <div className="col-md-2 images"><img src="https://testpanindia.com/wp-content/uploads/2023/09/Logos-05.png" alt="image" /></div>
              </Slider>
            </div>
          </div>

        </section>
      </AnimatedOnView>

      {/* Clients Section End */}


      {/* Services Section Start */}
      <AnimatedOnView>
        <section className="services border w-100 h-100">
          <h1 className="text-center mb-5 text-white fw-bold">Values Delievered</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-3 ms-2 mt-2 mb-5 content">
                <div className="logo"><i className="fa-solid fa-file-pen"></i></div>
                <h4 className='fw-bold '>Swift Execution</h4>
                <div className="list">
                  <ul>
                    <li>Rapid deployment of
                      manpower and
                      operational resources.</li>
                    <li>
                      Streamlined
                      onboarding and
                      training processes to
                      minimize lead time.
                    </li>
                    <li>Agile response to
                      changing project
                      requirements or
                      timelines.</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 ms-3 mt-2 mb-5 content">
                <div className="logo"><i className="fa-solid fa-people-group"></i></div>
                <h4 className='fw-bold'>Audits & Reporting</h4>
                <div className="list">
                  <ul>
                    <li>Routine quality checks
                      and internal audits to
                      maintain service
                      integrity.
                    </li>
                    <li>Transparent, datadriven reporting
                      dashboards for realtime insights.</li>
                    <li>Compliance with
                      industry standards and
                      regulatory frameworks.</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 ms-3 mt-2 mb-5 content">
                <div className="logo">
                  <i className="fa-solid fa-hand-holding-hand"></i>
                </div>
                <h4 className='fw-bold'>Client Collaboration</h4>
                <div className="list">
                  <ul>
                    <li>Routine quality checks
                      and internal audits to
                      maintain service
                      integrity.</li>
                    <li>
                      Transparent, datadriven reporting
                      dashboards for realtime insights.
                    </li>
                    <li>Compliance with
                      industry standards and
                      regulatory frameworks.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 ms-3 mt-2 mb-5 content">
                <div className="logo"><i className="fa-solid fa-house-laptop"></i></div>
                <h4 className='fw-bold'>Fast Alignment of
                  Manpower and Resources</h4>
                <div className="list">
                  <ul>
                    <li>Pre-vetted resource
                      pools for quick
                      mobilization.</li>
                    <li>
                      Integrated logistics
                      support for seamless
                      operations.
                    </li>
                    <li>Adaptive workforce
                      planning to meet scale
                      and complexity.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>

      {/* Services Section End */}


      {/* examination Section Start */}
      <AnimatedOnView direction='left'>
        <section className="examination">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mt-4 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2024/08/Artboard-10-768x299.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger mt-2 mb-2">Mastering Examination Administration: Key Steps for Online and Offline Assessments</h6>
                <p className='fw-normal fs-6 '>Effective examination administration is central to maintaining academic integrity, ensuring fairness, and providing a smooth experience for both examinees and administrators. Whether assessments are conducted online or offline, mastering the process involves strategic planning, clear communication, robust security measures, and timely execution. As education systems shift between physical classrooms and digital platforms, institutions must adopt a flexible yet structured approach to examination administration.</p>
              </div>

              <div className="col-12  col-md-6 mt-4 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2022/03/Optimizing-ExamCentres-768x512.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger mt-2 mb-2">Optimizing Examination Centres: Creating the Perfect Testing Environment</h6>
                <p className='fw-normal fs-6 '>In any examination—whether academic, competitive, or professional—the environment in which a candidate takes the test plays a critical role in their performance, concentration, and fairness of assessment. An optimized examination centre goes beyond just infrastructure; it considers student comfort, operational efficiency, accessibility, and strict adherence to security and ethical standards. Creating the perfect testing environment is a blend of good design, smart technology, and meticulous planning.</p>
              </div>

            </div>
          </div>
        </section>
      </AnimatedOnView>

      <AnimatedOnView direction='left'>
        <section className="examination2">
          <div className="container mb-4 mt-4">
            <div className="row">
              <div className="col-12 col-md-6 mt-4 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2022/03/Streamlining-Examination-Management-768x512.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger mt-2 mb-2">Streamlining Examination Management and Delivery</h6>
                <p className='fw-normal fs-6'>The management and delivery of examinations have traditionally been resource-intensive, involving manual scheduling, logistical planning, invigilation, grading, and result dissemination. However, modern educational demands and technological advancements are driving the need to streamline these processes. Streamlining examination management and delivery ensures improved efficiency, reduced errors, better security, and an enhanced experience for both administrators and students.</p>
              </div>

              <div className="col-12 col-md-6 mt-4 data">
                <div className="image">
                  <img src="https://testpanindia.com/wp-content/uploads/2022/03/Future-of-Exams-Trends-768x513.jpg" alt="image" />
                </div>
                <h6 className="fw-bold text-danger mt-2 mb-2">The Future of Conducting Examinations: Trends and Innovations</h6>
                <p className='fw-normal fs-6'>In a rapidly evolving digital landscape, the traditional model of pen-and-paper examinations is undergoing a dramatic transformation. The future of conducting examinations is being shaped by technological advancements, a shift in educational philosophies, and the growing demand for more flexible, fair, and accessible assessment systems. Let’s delve into the major trends and innovations that are redefining how examinations will be conducted in the years to come.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnView>

      {/* examination Section End */}

      <section className='footer' id='footer'>
        <Footer />
      </section>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '30px',
            zIndex: '1000',
            backgroundColor: '#6a1b9a',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.3)'
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

    </ >
  )
}

export default Home
