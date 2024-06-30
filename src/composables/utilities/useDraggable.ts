import { ref } from 'vue';

export function useDraggable() {
  const isDragging = ref(false);
  const drag = (event: DragEvent, draggedItem: string | undefined) => {
    if (!draggedItem) return;

    isDragging.value = true;
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer?.setData('text/plain', draggedItem);
    }
  };

  const drop = (
    event: DragEvent,
    dropzoneItem: string,
    dropActionCallback: (draggedItem: string, dropzoneItem: string) => void
  ) => {
    isDragging.value = false;

    if (event.dataTransfer) {
      const draggedItem = event.dataTransfer.getData('text/plain');

      dropActionCallback(draggedItem, dropzoneItem);
    }
  };

  return { isDragging, drag, drop };
}
