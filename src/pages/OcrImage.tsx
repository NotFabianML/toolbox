import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import { preprocessImage } from '../utils/preprocess';

const OcrImage = () => {
    const { t, i18n } = useTranslation("global");

    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");

    const handleChange = (event: { target: { files: (Blob | MediaSource)[]; }; }) => {
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }

    const handleClick = () => {

        Tesseract.recognize(
            imagePath, 'spa',
            {
                logger: m => console.log(m)
            }
        )
            .catch(err => {
                console.error(err);
            })
            .then(result => {
                // Get Confidence score
                // if (result && (result as any).text) {
                //     let text = (result as any).text;
                //     setText(text);
                // }
                let confidence = result.confidence
                let text = result.text
                setText(text);
                console.log(text);
            })
    }

    return (
        <>
            <div className="flex flex-col items-center w-full">
                <div className="mt-12 [font-family:'Inter-Bold',Helvetica] font-bold text-txt-color text-[32px] text-center tracking-[0] leading-[normal]">
                    {t('ocrImage.title')}

                    <p className="mt-4 mb-5 [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color text-[16px] text-center tracking-[0] leading-[normal]">
                        {t('ocrImage.description2')}
                    </p>
                </div>
                <div className="w-[760px] h-[413px] mt-16 flex flex-col justify-center items-center rounded-[4px] border-4 border-dashed border-secondary">
                    <h3>Canvas</h3>
                    <p className='text-white'>{text}</p>

                    <input className='text-txt-color' type="file" accept='.jpg, .png' onChange={(event) => {
                        if (event.target.files) {
                            setImagePath(URL.createObjectURL(event.target.files[0]));
                        }
                    }} />
                    <button className="text-txt-color" onClick={handleClick} style={{ height: 50 }}>Convert to text</button>

                    <p className="mt-3 [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color text-[16px] text-center tracking-[0] leading-[normal]">
                        {t('ocrImage.dragAndDrop')}
                    </p>
                </div>
            </div>
        </>
    );
}

export default OcrImage;
