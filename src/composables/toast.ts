import { readonly, ref } from "vue";

const message = ref("");
const isVisible = ref(false);

export const useToast = () => {
  const fireToast = (newMessage: string, timeout = 5) => {
    message.value = newMessage;
    isVisible.value = true;

    setTimeout(() => {
      message.value = "";
      isVisible.value = false;
    }, timeout * 1000);
  };
  return {
    message: readonly(message),
    isVisible: readonly(isVisible),
    fireToast,
  };
};
