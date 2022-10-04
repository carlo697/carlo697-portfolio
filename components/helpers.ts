export const getTop = (element: HTMLElement) => {
  return (
    element.getBoundingClientRect().top + document.documentElement.scrollTop
  );
};
