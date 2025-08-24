const commonIconOptions = {
  shadowUrl: "/images/leaf-shadow.png",

  iconSize: [24, 24], // size of the icon
  iconAnchor: [12, 24], // point of the icon which will correspond to marker's location
};

export const museumIcon = {
  ...commonIconOptions,
  iconUrl: "./museum.png",
};
export const genericIcon = {
  iconSize: [24.5, 36.5],
  iconAnchor: [12, 36.5],
  iconUrl: "./generic_icon.png",
};
