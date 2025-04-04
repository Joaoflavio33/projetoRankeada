function calcularNivel(vitorias , derrotas) { 
 calcularNivel = (78,12);
 let saldoVitorias = vitorias - derrotas; // Calcula o saldo de vitórias e derrotas
 let nivel ; // Declara a variável nivel
    console.log("Vitórias: " + vitorias); // Exibe o número de vitórias no console
    console.log("Derrotas: " + derrotas); // Exibe o número de derrotas no console
    console.log("saldo:" + saldovitorias); // Exibe o saldo no console
    console.log("nivel: " + nivel); // Exibe o nível no console



 console.log(saldoVitorias); // Exibe o nível calculado no console
    // Função para calcular o nível baseado nas vitórias e derrotas

}

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Nível indefinido";
    }

console.log("O Herói tem de saldo de " ) + saldoVitorias ("e está no nível " + nivel); // Exibe o nível calculado no console



