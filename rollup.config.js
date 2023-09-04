// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js", // Ruta al punto de entrada de tu aplicación
  output: {
    file: "dist/bundle.js", // Ruta donde se generará el archivo de salida
    format: "iife", // Formato de salida, puedes cambiarlo según tus necesidades
  },
  plugins: [
    resolve(), // Asegúrate de tener el complemento "resolve" configurado
    // Puedes agregar otros complementos según tus necesidades
  ],
};
