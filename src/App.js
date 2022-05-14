import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import { faceToEmoji } from './actions';

export default function App() {
  const webcamRef = useRef(null)

  const [imgSrc, setImgSrc] = useState(null)

  const capture = useCallback(() => {
    if (!webcamRef || !webcamRef.current) {
      toast.error('Check your camera.')
      return;
    }
    const imgSrc = webcamRef.current.getScreenshot()
    setImgSrc(imgSrc)
  }, [webcamRef, setImgSrc])

  return (
    <div className='app'>
      <Toaster />
      <div className='container'>

        {/* Camera */}
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className='web-camere'
        />

        {/* Button */}
        <button onClick={capture}>
          Stop
        </button>

        {/* Result */}
        {
          imgSrc && <div className='result'>
            Generating...
          </div>
        }
      </div>
    </div>
  );
}
