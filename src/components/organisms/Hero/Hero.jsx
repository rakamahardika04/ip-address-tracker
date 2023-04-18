import react from 'react';
import './styles.css';

import iconArrow from '../../../assets/icons/icon-arrow.svg';

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-container container">
            
            <div className='hero-text-container'>
                <h1 className='hero-headline'>IP Address Tracker</h1>
            </div>

            <div className='hero-input-container'>
                <form>
                    <div class="hero-input-form form-group">
                        <input type="text" class="hero-input-text form-control" id="" placeholder="Enter IP Address" />
                        <button type="submit" class="hero-input-btn btn btn-primary">
                            <img src={iconArrow} alt="icon-arrow" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  );
}

export default Hero;