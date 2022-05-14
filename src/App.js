import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './App.css'
import { faceToEmoji } from './actions';

export default function App() {
  const webcamRef = useRef(null)

  const [imgSrc, setImgSrc] = useState(null)

  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot()
    console.log(imgSrc)
    setImgSrc(imgSrc)
  }, [webcamRef, setImgSrc])

  return (
    <div className='app'>
      <div className='container'>
        <div>
          {/* <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          /> */}
          <button onClick={capture}>
            Start
          </button>

          {
            imgSrc && <img src={imgSrc} alt='img' />
          }
        </div>
      </div>
    </div>
  );
}
