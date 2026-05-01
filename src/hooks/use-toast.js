export const useToast = () => {
  return {
    toast: (opts) => {
      console.log("Toast:", opts);
      if (opts.title) alert(`${opts.title}\n${opts.description || ""}`);
    }
  };
};
