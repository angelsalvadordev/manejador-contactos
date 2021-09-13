//Normalizar: ángelsalvador => angelsalvador
export const normalizeName = (name) =>
  name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Recortar cadena de texto
export const cutText = (data = "", max = 25) =>
  data.length > max ? `${data.substring(0, max)}...` : data;
