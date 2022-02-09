import { ref } from "vue";

const statuses = ["normal", "nightmode", "colorblind"];

const initialColorStatus = localStorage.getItem("color");

const selectedColorStatus = ref(initialColorStatus || "normal");

localStorage.setItem("color", selectedColorStatus.value);

const app = document.getElementById("app");
app?.classList.toggle(selectedColorStatus.value);

export const useColorStatus = () => {
  function toggleColors() {
    // vue root div

    const prevStatus = selectedColorStatus.value;
    selectedColorStatus.value =
      statuses[
        (statuses.findIndex((color) => color === selectedColorStatus.value) +
          1) %
          3
      ];

    // toggle color class at vue root
    app?.classList.toggle(prevStatus);
    app?.classList.toggle(selectedColorStatus.value);

    // save to user preferences
    localStorage.setItem("color", selectedColorStatus.value);
  }

  return { selectedColorStatus, toggleColors };
};
