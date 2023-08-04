import React from 'react';

import Logo from '../assets/logo.svg';



const Header = () => {

  const handleDownload = () => {
    const fileUrl = './cvedgar.pdf'; // Ruta del documento que deseas descargar
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'cvedgar.pdf'; // Puedes cambiar el nombre del archivo descargado si lo deseas
    a.click();
  };
  
  const DownloadButton = () => {
    return (
      <div>
        <button 
        className='btn btn-sm'
        onClick={handleDownload}>Descargar CV</button>
      </div>
    );
  };

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*logo*/}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/*button*/}
          <DownloadButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
