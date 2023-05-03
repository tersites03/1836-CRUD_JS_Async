const listaClientes = () =>fetch(" http://localhost:3000/perfil").then(repuesta => respuesta.json());

export const clientServices = {
  listaClientes
}