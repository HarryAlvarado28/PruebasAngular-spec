import { Jugador } from "./clases";

describe('Prueba de Clase', () => {
  let jugador = new Jugador();
  // beforeAll();   // Se ejecuta una ves ante de todas las pruebas
  beforeEach(() => {
    jugador = new Jugador();
  });               // Se ejecuta cada ves antes de cada prueba
  //
  // afterAll();    // Se ejecuta una ves despues de todas las pruebas
  // afterEach();   // Se ejecuta cada ves despues de cada prueba
  it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe retornar 0 de hp, si recibe 100 de daño', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(100);
    expect(resp).toBe(0);
  });
});
