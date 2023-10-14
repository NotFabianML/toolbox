import { useTranslation } from 'react-i18next';
import ButtonLink from '../components/ButtonLink';

const OcrImage = () => {
    const { t, i18n } = useTranslation("global");
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
                    <ButtonLink text={t('ocrImage.selectImage')} to="/processing-image" />

                    <p className="mt-3 [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color text-[16px] text-center tracking-[0] leading-[normal]">
                        {t('ocrImage.dragAndDrop')}
                    </p>

                </div>
            </div>

        </>
    );
}

export default OcrImage