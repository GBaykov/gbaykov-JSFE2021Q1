export const createElement = (childName:string, childClass:string, html:string, parentName:string) => {
  const parent:HTMLElement | null = document.getElementById(`${parentName}`);
  if (!parent) throw Error(`${parentName} element not found`);

  const child:HTMLElement = document.createElement(`${childName}`)
  child.classList.add(`${childClass}`);
  child.innerHTML = html;
  parent.appendChild(child)
  document.body.appendChild(parent);
}
