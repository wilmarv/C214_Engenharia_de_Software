class HorarioAtendimento {
    nomeDoProfessor: String;
    horarioDeAtendimento: String;
    periodo: String;
    sala: Number;
    predio: Number[];

    constructor(nome: String, horario: String, periodo: String, sala: Number, predio: Number[]) {
        this.nomeDoProfessor = nome;
        this.horarioDeAtendimento = horario;
        this.periodo = periodo;
        this.sala = sala;
        this.predio = predio;
    }
}
export default HorarioAtendimento;