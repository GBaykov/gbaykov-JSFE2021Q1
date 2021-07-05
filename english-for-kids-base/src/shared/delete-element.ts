export const deleteElement = (childClass: string, parentId:string) => {
  const child: HTMLElement | null = document.querySelector(`.${childClass}`);
  if (child) {
    const parent:HTMLElement | null = document.getElementById(`${parentId}`);
    if (parent === null) throw Error;
    parent.removeChild(child);
  }
};
