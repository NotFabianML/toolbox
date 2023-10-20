import { useState, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import { saveAs } from "file-saver";
import Tesseract from 'tesseract.js';

import Button from "../components/Button"
import ImagesContainer from "../components/ImagesContainer"
import { copyClipboard, addSign, trashCan } from "../assets/icons";

const OcrImage = () => {
  const [text, setText] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);
  const [recognizedText, setRecognizedText] = useState('');

  const handleButtonClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    toast.success('Copiado al portapapeles', {
      position: 'top-left',
      duration: 2000,
    });
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    saveAs(blob, "archivo.txt");
  };

  const handleImageUpload = (event: any) => {
    const images = event.target.files;
    setSelectedImages([...selectedImages, ...images]);
  };

  // Función para actualizar el estado de selectedImages
  const updateSelectedImages = (updatedImages: File[]) => {
    setSelectedImages(updatedImages);
  };

  const handleDeleteAllImages = () => {
    setSelectedImages([]); // Limpiar el array de imágenes
  };

  const recognizeText = async () => {
    console.log("Recognizing text...");
    if (selectedImages.length > 0) {
      const promises = selectedImages.map(async image => {
        const result = await Tesseract.recognize(image);
        return result.data.text;
      });

      const recognizedTexts = await Promise.all(promises);
      setRecognizedText(recognizedTexts.join('\n'));
      setText(recognizedTexts.join('\n'));
    }
  };

  return (
    <div className="bg-primary w-[1080px] h-[720px] flex flex-row">
      <div className="flex flex-col items-center justify-center m-auto w-[360px]">
        <div className="flex flex-col items-start w-[518px] h-[478px] p-4 mb-10 border-4 border-solid rounded-[4px] border-secondary">
          <textarea
            className="bg-primary w-full h-full [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color text-[16px] resize-none focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="flex self-end p-2" onClick={copyToClipboard}>
            <img className="w-[29px] h-[31px]"
              alt="Copy to clipboard"
              src={copyClipboard}
            />
          </button>
          <Toaster visibleToasts={1} />
        </div>

        <Button text='Descargar .txt' handleClick={handleDownload}/>
      </div>

      <div className="flex flex-col w-[360px] items-center bg-secondary gap-3 px-16 py-2">
        <h2 className="[font-family:'Inter-Bold',Helvetica] font-bold text-txt-color text-[32px] text-center">
          OCR IMAGEN
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

        <Button text="Aplicar OCR" handleClick={recognizeText}/>
      </div>

    </div>

  )
}

export default OcrImage;