import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import "./scanner.css"


const Scanner = () => {
  const [barcode, setBarcode] = useState('No barcode detected');
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader', 
      {
        fps: 5, 
        qrbox: { width: 300, height: 300 }, 
        formatsToSupport: ['QR_CODE', 'CODE_128'],
      },
      false 
    );

    const handleResult = (decodedText) => {
      console.log('Decoded Text:', decodedText);
      setBarcode(decodedText);
    };

    const handleError = (error) => {
      console.warn('Scan Error:', error);
    };

    scanner.render(handleResult, handleError);

    return () => {
      scanner.clear();
    };
  }, []); 


  return (
    <div id='scannerContainer'>
      <h1>Barcode Scanner</h1>
      <div id="reader" ref={scannerRef}></div>
      <p>Detected Barcode: {barcode}</p>
      
    </div>
  );
};

  
  export default Scanner;
  