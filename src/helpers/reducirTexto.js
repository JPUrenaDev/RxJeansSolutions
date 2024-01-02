const Cantidad = 20;
export const reducirTexto = (texto) => {
  if (texto.length < Cantidad) return texto;
  return texto.substring(0, Cantidad) + "...";
};
