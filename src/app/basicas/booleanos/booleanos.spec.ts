import { usuarioIngresado } from "./booleanos";

describe('Pruebas de Booleanos', () => {
  it('Debe de retornar True', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  });
});
