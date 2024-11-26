import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';



const Scanner = () => {
  const [barcode, setBarcode] = useState('No barcode detected');
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      { fps: 5, qrbox: { width: 300, height: 300 } },
      /* verbose= */ false
    );

    scanner.render(
      (decodedText, decodedResult) => {
        console.log('Decoded Text:', decodedText, decodedResult);
        setBarcode(decodedText); 
      },
      (error) => {
        console.warn('Scan Error:', error); // Handle errors if needed
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <div id="reader" ref={scannerRef}></div>
      <p>Detected Barcode: {barcode}</p>
      
    </div>
  );
};

  
  export default Scanner;
  