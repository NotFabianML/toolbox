import { Link } from 'react-router-dom'
import ocrImage from '../assets/icons/ocr-image.svg'

const ToolCard = () => {
    return (
        <>
        <Link to="/tool">
            <div className="flex flex-col w-[250px] h-[150px] items-start justify-between p-[15px] relative bg-secondary rounded-[5px] overflow-hidden">
                <img className="relative w-[50px] h-[50px]" alt="OCR Image" src={ocrImage} />
                <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-txt-color text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Ocr Imagen
                </div>
                <p className="relative self-stretch h-[33px] [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color-2 text-[10px] tracking-[0] leading-[normal]">
                    Convierte facilmente imagenes a texto.
                </p>
            </div>
        </Link>
        </>
    )
}

export default ToolCard