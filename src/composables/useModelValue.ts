import { ref } from 'vue';

// TODO: Check how to type emits
export default function useModelValue(props: any, emit: any) {
  const internalValue = ref(props.modelValue);
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    internalValue.value = target.value;
    emit('update:modelValue', target.value);
  };

  return {
    internalValue,
    handleInput
  };
}
