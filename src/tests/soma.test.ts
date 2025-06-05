import { soma } from '../soma';

describe('Função soma', () => {
  it('deve somar dois números corretamente', () => {
    const resultado = soma(2, 3);
    expect(resultado).toBe(5);
  });

  it('deve funcionar com números negativos', () => {
    expect(soma(-2, -3)).toBe(-5);
  });
});