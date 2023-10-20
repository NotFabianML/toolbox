import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useState, useEffect } from 'react';
import Image from './Image';

const ImagesContainer = (props: { imageArray: Array<File>; updateSelectedImages: (updatedImages: File[]) => void }) => {


    const [items, setItems] = useState<{ id: number; text: string; file: File }[]>([]);
    const [imageArray, setImageArray] = useState(props.imageArray);

    useEffect(() => {
        // Actualiza 'items' con el nuevo array 'imageArray'
        setItems(imageArray.map((image, index) => ({ id: index + 1, text: image.name, file: image })));
    }, [imageArray]);

    // Agrega un efecto para actualizar 'items' cuando cambia 'props.imageArray'
    useEffect(() => {
        setImageArray(props.imageArray);
    }, [props.imageArray]);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                console.log(arrayMove(items, oldIndex, newIndex));
                props.updateSelectedImages(arrayMove(imageArray, oldIndex, newIndex)); // Llama a la función para actualizar en OcrImage
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    // Función para eliminar una imagen del array
    const handleDeleteImage = (imageToDelete: File) => {
        const updatedImages = imageArray.filter((image) => image !== imageToDelete);
        props.updateSelectedImages(updatedImages);
        console.log("ELIMINADO");
    };

    return (
        <DndContext sensors={useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor))} collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis, restrictToWindowEdges]} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col w-[240px] h-[434px] items-center bg-secondary gap-2 px-4 py-6 border-4 border-solid rounded-md border-primary sortable overflow-auto">
                    {items.map((item) => (
                        <Image key={item.id} id={item.id} text={item.text} onDelete={() => handleDeleteImage(imageArray[item.id - 1])} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default ImagesContainer;