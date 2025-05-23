import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Navbar, Nav, Button } from 'react-bootstrap';
import './landingpage.scss';

import Logo from '../../component/logo/logo';

import { useScrollAnimations } from '../../component/gsap/gsap';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Landingpage = () => {
  const clientLogos = Array(7).fill(
    'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png'
  );

  gsap.registerPlugin(ScrollTrigger);

  useScrollAnimations();

  const logoRef = useRef(null);
  const menuRefs = useRef([]);
  const part01ref = useRef(null);
  const part02ref = useRef(null);
  const part03ref = useRef(null);
  const part04ref = useRef(null);
  const client = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const animation_text_1 = (element) => {
      let newText = '';
      const theText = document.querySelector(element);
      if (!theText) return;

      for (let i = 0; i < theText.innerText.length; i++) {
        newText += '<div>';
        newText +=
          theText.innerText[i] === ' ' ? '&nbsp;' : theText.innerText[i];
        newText += '</div>';
      }

      theText.innerHTML = newText;

      gsap.fromTo(
        `${element} div`,
        { opacity: 0, y: 90 },
        {
          duration: 1,
          opacity: 0.8,
          y: 0,
          stagger: 0.03,
          ease: 'elastic(1.2, 0.5)',
          scrollTrigger: {
            trigger: element,
            start: 'top 70%',
            toggleActions: 'restart none none reverse',
          },
        }
      );
    };

    animation_text_1('#animated-heading');
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.from(logoRef.current, {
      duration: 1,
      y: -50,
      delay: 0.5,
      opacity: 0,
    });

    timeline.from(
      menuRefs.current,
      {
        duration: 1,
        y: -20,
        opacity: 0,
        stagger: 0.3,
        ease: 'bounce',
      },
      '-=0.5'
    );

    // Hover effect for each menu link
    menuRefs.current.forEach((item) => {
      if (!item) return;

      let tl = gsap.timeline({ paused: true });

      tl.to(item, {
        duration: 0.1,
        yPercent: -30,
        color: '#ff6600',
        textShadow: '0.04em 0.04em 0 #81b5ab',
        ease: 'power2.in',
      })
        .set(item, { yPercent: 30 })
        .to(item, { duration: 0.1, yPercent: 0, color: '#1984b9' });

      item.addEventListener('mouseenter', () => tl.play(0));
      item.addEventListener('mouseleave', () => tl.reverse());
    });

    timeline.from(
      part01ref.current,
      {
        x: -1000,
        duration: 0.6,
        ease: 'back',
        opacity: 0,
      },
      '-=0.3'
    );
    timeline.from(part02ref.current, {
      x: -1000,
      duration: 0.6,
      ease: 'back',
      opacity: 0,
    });
    timeline.from(part03ref.current, {
      duration: 0.6,
      ease: 'back',
      opacity: 0,
    });
    timeline.from(
      part04ref.current,
      {
        duration: 0.9,
        opacity: 0,
        scale: 0,
        x: 1000,
        ease: 'power4.in',
      },
      '-=2'
    );

    timeline.from(client.current, {
      duration: 0.6,
      opacity: 0,
      y: 30,
      stagger: 0.15,
    });
  }, []);

  return (
    <main className="main-wrapper">
      <Navbar expand="lg" className="p-3 gsap-nav">
        <Container fluid>
          <Navbar.Brand
            ref={logoRef}
            id="logo"
            href="#"
            className="d-flex align-items-center logo justify-content-center gap-2"
          >
            <Logo />
            GSAP In REACT...!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              {['Home', 'Link', 'Services', 'About'].map((text, index) => (
                <Nav.Link
                  key={index}
                  href={`#action${index + 1}`}
                  ref={(el) => (menuRefs.current[index] = el)}
                >
                  {text}
                </Nav.Link>
              ))}
              <Button className="" variant="outline-primary">
                Contact Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="section">
        <Row className="container-medium">
          <Col md={6} className="banner-sec-01">
            <h1 ref={part01ref} className="heading">
              But Vertical Scroll Is Also Cool!
            </h1>
            <p ref={part02ref}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <Button ref={part03ref} className="" variant="outline-primary">
              Order Now
            </Button>
          </Col>
          <Col md={6} className="banner-sec">
            <Image
              ref={part04ref}
              src="https://www.pngkey.com/png/full/35-350455_vector-images-eye-vector-tribal.png"
            />
          </Col>
        </Row>
      </section>
      <section ref={client} className="row client">
        {clientLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            width={100}
            height={50}
          />
        ))}
      </section>
      <section className="scroll-section vertical-section section">
        <div className="wrapper">
          <div className="list">
            {[
              {
                number: 1,
                title:
                  'Wildlife in Action: A Glimpse into Nature’s Daily Drama',
                text: 'Witness the fascinating lives of animals in their natural habitats, from playful cubs to stealthy predators.',
                image:
                  'https://m.media-amazon.com/images/I/51pkwpQHUfL._AC_UF894,1000_QL80_.jpg',
              },
              {
                number: 2,
                title: 'The Changing Seasons: Nature’s Everlasting Cycle',
                text: "Experience the beauty of nature's transitions, from blooming spring flowers to snowy winter landscapes.",
                image:
                  'https://static.vecteezy.com/system/resources/previews/000/247/824/non_2x/vector-beautiful-landscape-illustration.jpg',
              },
            ].map((item, index) => (
              <div key={index} className="item">
                <div className="item_content">
                  <h2 className="item_number">{item.number}</h2>
                  <h2>{item.title}</h2>
                  <p className="item_p">{item.text}</p>
                </div>
                <div className="w-50 img-section">
                  <Image src={item.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <Container className="container-medium">
          <div className="padding-vertical">
            <div className="max-width-large">
              <h1 className="heading2" id="animated-heading" ref={headingRef}>
                Horizontal Scroll Is Cool!
              </h1>
            </div>
          </div>
        </Container>
      </section>
      <section className="scroll-section horizontal-section section">
        <div className="wrapper">
          <div className="list">
            {[
              {
                number: 3,
                title:
                  'Wildlife in Action: A Glimpse into Nature’s Daily Drama',
                text: "Explore the untouched beauty of forests, mountains, and rivers as we uncover the hidden secrets of nature's most breathtaking landscapes.",
                image:
                  'https://img.freepik.com/free-vector/black-girl-woman-big-colored-concept-beautiful-woman-sitting-front-artwork-with-flowers-colorful-leaves-vector-illustration_1284-79511.jpg?size=626&ext=jpg',
              },
              {
                number: 4,
                title: 'Glimpse into Nature’s Daily Drama',
                text: "Explore the Nature's most breathtaking landscapes.",
                image:
                  'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png',
              },
              {
                number: 5,
                title: 'Nature’s Daily Drama',
                text: 'Breathtaking landscapes.',
                image:
                  'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png',
              },
            ].map((item, index) => (
              <div key={index} className="item">
                <div className="item_content">
                  <h2 className="item_number">{item.number}</h2>
                  <h2>{item.title}</h2>
                  <p className="item_p">{item.text}</p>
                </div>
                <div className="w-50 img-section">
                  <Image src={item.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <Container className="container-medium">
          <div className="padding-vertical">
            <div className="max-width-large">
              <h1 className="heading">Soo Cool!!</h1>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Landingpage;
