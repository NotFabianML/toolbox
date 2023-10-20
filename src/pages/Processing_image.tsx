import { useState, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import { saveAs } from "file-saver";
import Tesseract from 'tesseract.js';

import { useTranslation } from 'react-i18next'
import Button from "../components/Button"
import ImagesContainer from "../components/ImagesContainer"
import { copyClipboard, addSign, trashCan } from "../assets/icons";

const OcrImage = () => {
  const { t, i18n } = useTranslation("ocrimage");

  const [recognizedText, setRecognizedText] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  // Función para abrir el explorador de archivos
  const handleButtonClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  // Función para copiar el texto al portapapeles
  const copyToClipboard = () => {
    if (recognizedText === '') {
      toast.error(t('toast.copy_error'), {
        position: 'top-left',
        duration: 2000,
      });

    } else {
      navigator.clipboard.writeText(recognizedText);
      toast.success(t('toast.copy_success'), {
        position: 'top-left',
        duration: 2000,
      });
    }
  };

  // Función para descargar el archivo .txt
  const handleDownload = () => {
    // validar si recognizedText está vacío
    if (recognizedText === '') {
      toast.error(t('toast.download_error'), {
        position: 'top-left',
        duration: 2000,
      });
    
    } else {
      const blob = new Blob([recognizedText], { type: "text/plain" });
      saveAs(blob);
    }

  };

  // Función para subir imágenes
  const handleImageUpload = (event: any) => {
    const images = event.target.files;
    setSelectedImages([...selectedImages, ...images]);
  };

  // Función para actualizar el estado de selectedImages
  const updateSelectedImages = (updatedImages: File[]) => {
    setSelectedImages(updatedImages);
  };

  // Función para borrar todas las imágenes
  const handleDeleteAllImages = () => {
    setSelectedImages([]);
  };

  // Función para reconocer el texto de las imágenes
  const recognizeText = async () => {
    if (selectedImages.length > 0) {
      const promises = selectedImages.map(async image => {
        const result = await Tesseract.recognize(image);
        return result.data.text;
      });

      const recognizedTexts = await Promise.all(promises);
      setRecognizedText(recognizedTexts.join('\n'));

      toast.success(t('toast.apply_success'), {
        position: 'top-left',
        duration: 2000,
      });

    } else {
      toast.error(t('toast.apply_error'), {
        position: 'top-left',
        duration: 2000,
      });
    }
  };

  return (
    <div className="bg-primary flex flex-row">
      <div className="flex flex-col items-center justify-center m-auto w-[360px]">
        <div className="flex flex-col items-start w-[518px] h-[478px] p-4 mb-10 border-4 border-solid rounded-[4px] border-secondary">
          <textarea
            className="bg-primary w-full h-full [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color text-[16px] resize-none focus:outline-none"
            value={recognizedText}
            onChange={(e) => setRecognizedText(e.target.value)}
          />

          <button className="flex self-end p-2" onClick={copyToClipboard}>
            <img className="w-[29px] h-[31px]"
              alt="Copy to clipboard"
              src={copyClipboard}
            />
          </button>
          <Toaster visibleToasts={1} />
        </div>

        <Button text={t('buttons.download')} handleClick={handleDownload}/>
      </div>

      <div className="flex flex-col w-[360px] h-screen items-center bg-secondary gap-3 px-16 py-2">
        <h2 className="[font-family:'Inter-Bold',Helvetica] font-bold text-txt-color text-[32px] text-center">
          {t('title')}
        </h2>

        <ImagesContainer imageArray={selectedImages} updateSelectedImages={updateSelectedImages} />

        <div className='flex flex-row gap-4'>
            <button onClick={handleButtonClick}>
              <img className="w-[29px] h-[31px]"
                alt="add images"
                src={addSign}
              />
            </button>
            <input
              type="file"
              accept='.jpg, .png'
              ref={fileInput}
              onChange={handleImageUpload}
              className='hidden'
              multiple
            />

          <button onClick={handleDeleteAllImages}>
            <img className="w-[26px] h-[38px]"
              alt="delete all images"
              src={trashCan}
            />
          </button>
        </div>

        <Button text={t('buttons.apply')} handleClick={recognizeText}/>
      </div>

    </div>

  )
}

export default OcrImage;