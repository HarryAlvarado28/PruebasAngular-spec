import { mensaje } from "./string";

// describe('Pruebas de Strings');
// it('Debe de reguresar un string');

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Harry');
    expect(typeof resp).toBe('string');
  });
  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Harry';
    const resp = mensaje('Harry');
    expect(resp).toContain(nombre);
  });

});
