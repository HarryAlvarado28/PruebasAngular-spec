import { Jugador2 } from "./jugador2";

describe('Jugador 2 Emitter', () => {
  let jugador: Jugador2;
  // beforeAll();   // Se ejecuta una ves ante de todas las pruebas
  beforeEach(() => {
    jugador = new Jugador2();
  });               // Se ejecuta cada ves antes de cada prueba
  //
  // afterAll();    // Se ejecuta una ves despues de todas las pruebas
  // afterEach();   // Se ejecuta cada ves despues de cada prueba
  it('Debe de emitir un evento cuando recibe un daño', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp;
    });
    jugador.recibeDanio(1000);
    expect(nuevoHp).toBe(0);
  });

  it('Debe de emitir un evento cuando recibe un daño y sobrevivir si es menor de 100', () => {
    let nuevoHp = 0;
    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp;
    });
    jugador.recibeDanio(50);
    expect(nuevoHp).toBe(50);
  });
});
