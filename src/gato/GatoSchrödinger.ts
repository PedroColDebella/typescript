class GatoDeSchrodinger {
  nome: string;
  estado: "VIVO" | "MORTO" | "VIVO E MORTO" | "zumbi quântico"; // estado privado: vivo, morto ou indefinido
  observado: boolean = false;

  constructor(nome: string) {
    this.nome = nome;
    this.estado = "VIVO E MORTO"; // estado quântico inicial
    this.observado = false;
  }

  observar() {
    if (!this.observado) {
      // Colapsa o estado quântico de forma aleatória
      this.estado = Math.random() > 0.5 ? "VIVO" : "MORTO";
      this.observado = true;
    }
    console.log(`Após abrir a caixa, ${this.nome} está: ${this.estado.toUpperCase()}`);
  }

  verEstado() {
    console.log(`Estado atual de ${this.nome}: ${this.observado ? this.estado : "vivo e morto (superposição)"}`);
  }
}

// Classe derivada para outro experimento (herança e polimorfismo)
class GatoMutante extends GatoDeSchrodinger {
  observar() {
    if (!this.observado) {
      const rand = Math.random();
      if (rand < 0.33) {
        this.estado = "VIVO";
      } else if (rand < 0.66) {
        this.estado = "MORTO";
      } else {
        this.estado = "zumbi quântico"; // estado adicional
      }
      this.observado = true;
    }
    console.log(`Gato mutante observado: ${this.nome} está ${this.estado}`);
  }
}

// --- Execução ---
const gato = new GatoDeSchrodinger("Gato Quântico");
gato.verEstado();     // vivo e morto (antes de observar)
gato.observar();      // colapsa o estado
gato.verEstado();     // estado colapsado

// Exemplo com herança
// const gatoZumbi = new GatoMutante("Mutano");
// gatoZumbi.verEstado();
// gatoZumbi.observar();
