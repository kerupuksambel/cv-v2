export const scrollToID = (id: string) => {
  const elem = document.getElementById(id)
  if(elem){
    const elementPosition = elem.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    // elem.scrollIntoView({behavior: 'smooth'})
  }
}