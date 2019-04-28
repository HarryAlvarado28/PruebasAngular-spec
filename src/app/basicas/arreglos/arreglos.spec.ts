import { obtenerRobots } from "./arreglos";

xdescribe('Pruebas de arreglos', () => {
  it('Debe retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe de existir MegaMan y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('MegaMan', 'Ultron');
    expect(res).toContain('Ultron');
  });
});
