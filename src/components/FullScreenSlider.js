import { CloseRounded } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const FullScreenSlider = ({ images, currentIndex, onClose, onNext, onPrevious }) => {

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.in-slider')) {
                onClose();
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) {
                // Left arrow key
                onPrevious();
            } else if (event.keyCode === 39) {
                // Right arrow key
                onNext();
            }
        };

        document.body.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.removeEventListener('keydown', handleKeyDown);
        };
    }, [onNext, onPrevious]);

    return (
        <div className="fullscreen-slider">
                <CloseRounded className="closed-btn" onClick={onClose} />
            <div className="in-slider">

                <img src={images[currentIndex]} alt="fullscreen-image" className='fullslider-image' />

                <BsArrowLeft className="full-arrow left" onClick={onPrevious} />
                <BsArrowRight className="full-arrow right" onClick={onNext} />

            </div>
        </div>
    );
};

export default FullScreenSlider;
