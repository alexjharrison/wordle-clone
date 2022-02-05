import { readonly, ref } from "vue";

interface ToastOptions {
  newMessage: string[] | string;
  timeout?: number;
  shouldResetOnClose?: boolean;
}

const message = ref([""]);
const isVisible = ref(false);
const resetOnClose = ref(false);
let timeoutCounter: number | null = null;

export const useToast = () => {
  const fireToast = ({
    newMessage,
    timeout = 5,
    shouldResetOnClose = false,
  }: ToastOptions) => {
    message.value = [newMessage].flat();
    isVisible.value = true;
    resetOnClose.value = shouldResetOnClose;

    timeoutCounter = setTimeout(() => {
      message.value = [""];
      isVisible.value = false;
    }, timeout * 1000);
  };

  const closeToast = () => {
    if (timeoutCounter !== null) clearTimeout(timeoutCounter);
    message.value = [""];
    isVisible.value = false;
    resetOnClose.value = false;
  };

  return {
    message: readonly(message),
    isVisible: readonly(isVisible),
    resetOnClose: readonly(resetOnClose),
    fireToast,
    closeToast,
  };
};
