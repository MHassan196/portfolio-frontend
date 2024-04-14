import React, { useState, useEffect } from 'react';
import { Col } from "react-bootstrap";
import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import FullScreenSlider from './FullScreenSlider';


export const ProjectCard = ({ title, description, imgUrl, tags, thumbnail, githubLink, liveAppLink, githubLink2 }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullScreenSlider, setShowFullScreenSlider] = useState(false);
  const [currentFullScreenImageIndex, setCurrentFullScreenImageIndex] = useState(0);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  // };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? selectedProject.imgUrl.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === selectedProject.imgUrl.length - 1 ? 0 : prevIndex + 1);
  };

  const handleNextFullScreen = () => {
    setCurrentFullScreenImageIndex(prevIndex => (prevIndex + 1) % selectedProject.imgUrl.length);
  };

  const handlePreviousFullScreen = () => {
    setCurrentFullScreenImageIndex(prevIndex => (prevIndex - 1 + selectedProject.imgUrl.length) % selectedProject.imgUrl.length);
  };


  return (
    <>
      <Col size={12} sm={6} md={6} lg={4}>
        <div className="proj-imgbx">
          <img src={thumbnail} alt='card-img' onClick={() => handleOpenModal({ title, description, imgUrl, tags, liveAppLink, githubLink, githubLink2 })} />
          <div className="tags">
            {tags?.map((tag, index) => (
              <span className="tag" key={index}>{tag}</span>
            ))}
          </div>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>

          <div className="btns">
            <button onClick={() => handleOpenModal({ title, description, imgUrl, tags, liveAppLink, githubLink, githubLink2 })}>See Details</button>
          </div>
        </div>
      </Col>

      <Modal open={showModal} onClose={() => setShowModal(false)}>

        <div className={`modal-cont ${showModal ? 'open' : ''}`} >
          <CloseRounded
            className='close-btn-modal'
            onClick={() => setShowModal(false)}
          />
          <div className='modal-wrapper'>
            {/* <Slider {...settings} className='modal-slider'>
              {selectedProject?.imgUrl.map((image, index) => (
                <div key={index}>
                  <img src={image} className='modal-img' />
                </div>
              ))}
            </Slider>             */}

            <div className="modal-slider">
              <img src={selectedProject?.imgUrl[currentImageIndex]}
                className='modal-img'
                alt='modal-img'
                onClick={() => setShowFullScreenSlider(true)}
              />
              <BsArrowLeft className="arrow left" onClick={handlePrevious} />
              <BsArrowRight className="arrow right" onClick={handleNext} />
              {/* <div className="circle-indicators">
                {selectedProject?.imgUrl.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></div>
                ))}
              </div> */}
            </div>
            <div className='modal-title'>{selectedProject?.title}</div>
            <div className='modal-tags'>
              {selectedProject?.tags.map((tag, index) => (
                <div className='modal-tag' key={index}>{tag}</div>
              ))}
            </div>
            <div className='modal-desc'>{selectedProject?.description}</div>

            <div className='btn-group'>
              {liveAppLink && <a href={selectedProject?.liveAppLink} className='modal-btn' target='_blank'>View Live App</a>}
              <a href={selectedProject?.githubLink} className='modal-btn' target='_blank'>View Code</a>
              {githubLink2 && <a href={selectedProject?.githubLink2} className='modal-btn' target='_blank'>View Backend Code</a>}
            </div>
          </div>
        </div>
      </Modal>

      {showFullScreenSlider && (
        <FullScreenSlider
          images={selectedProject?.imgUrl}
          currentIndex={currentFullScreenImageIndex}
          onClose={() => setShowFullScreenSlider(false)}
          onNext={handleNextFullScreen}
          onPrevious={handlePreviousFullScreen}
        />
      )}

    </>
  )
}
