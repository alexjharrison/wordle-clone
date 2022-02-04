import { readonly, ref } from "vue";

type ModalOptions = "ModalGameRules" | "ModalDefault";

const isShowing = ref(false);
const currentModal = ref<ModalOptions>("ModalDefault");

export const useModal = () => {
  function openModal(selectedModal: ModalOptions) {
    currentModal.value = selectedModal;
    isShowing.value = true;
  }

  function closeModal() {
    isShowing.value = false;
  }

  return {
    openModal,
    closeModal,
    isShowing: readonly(isShowing),
    currentModal: readonly(currentModal),
  };
};
