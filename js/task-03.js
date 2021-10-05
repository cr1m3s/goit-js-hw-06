const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const liImages = images.map(pic => {
  const liTemp = document.createElement("li");
  liTemp.insertAdjacentHTML('beforeend', `<img src=${pic.url} alt=${pic.alt} width="300" height="200">`);
  liTemp.style.padding = "10px";
  liTemp.style.backgroundColor = "#FF7F50";
  liTemp.style.textAlign = "center";
  liTemp.style.width = "90%";
  liTemp.style.marginTop = "10px";
  return liTemp;
})

const ulImages = document.querySelector(".gallery");
ulImages.style.listStyleType = "none";
ulImages.style.display = "flex";
ulImages.style.flexDirection = "column";
ulImages.style.width = "400px";
ulImages.append(...liImages);