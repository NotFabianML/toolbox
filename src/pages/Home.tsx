import ToolCard from "../components/ToolCard";
import { ocrImage } from "../assets/icons";
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t, i18n } = useTranslation("global");

    return (
        <>
            <div className="flex flex-col items-center w-full" >
                <div className="mt-12 [font-family:'Inter-Bold',Helvetica] font-bold text-txt-color text-[32px] text-center tracking-[0] leading-[normal]">
                    ToolBox

                    <p className="mt-4 mb-5 [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color text-[16px]">
                        {t('header')}
                    </p>
                </div>
                <div className="flex flex-wrap w-[985px] items-start gap-[25px_25px] px-[90px] py-[25px]">
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                    <ToolCard icon={ocrImage} name={t('ocrImage.title')} description={t('ocrImage.description')} />
                </div>
            </div>

        </>
    );
}

export default Home