import { toast } from "react-toastify";

export const useCopyToClipboard = (textToCopy: string, toastText: string) => {
  const showCopyNumberToast = () => {
    toast(toastText, {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      toastId: "toast",
    });
  };

  return () => {
    navigator.clipboard.writeText(textToCopy).then();
    showCopyNumberToast();
  };
};
