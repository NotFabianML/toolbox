import { useSortable } from "@dnd-kit/sortable";
import { closeX } from "../assets/icons";

const Image = (props: { id: number; text: string; onDelete: () => void }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

    const styles = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
    };

    return (
        <div
            className="flex w-full h-[35px] items-center justify-between px-[15px] py-[7px] cursor-grab bg-primary rounded-[5px] hover:bg-alternative box draggable"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            data-id={props.id}
            data-testid="image-container"
            style={styles}
        >
            <p className="w-10/12 h-6 [font-family:'Inter-Regular',Helvetica] font-normal text-txt-color text-[14px] select-none truncate hover:text-clip">
                {props.text}
            </p>
            <div>

            <button onClick={props.onDelete}>
                <img className="w-[15px] h-[15px]" alt="Icon close" src={closeX} />
            </button>
            </div>
        </div>
    );
};

export default Image;