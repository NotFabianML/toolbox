const Button = (props: {text: string; handleClick: () => void}) => {
    return (
        <>
            <button className={"flex w-[240px] h-[72px] items-center justify-center gap-[10px] p-[5px] bg-alternative rounded-[5px] hover:bg-[#9b0b0b]"} onClick={props.handleClick}>
                <div className="w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-txt-color text-[20px] text-center">
                    {props.text}
                </div>
            </button>
        </>
    )
}

export default Button