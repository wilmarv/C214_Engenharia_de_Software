import axios from "axios";
import HorarioAtendimento from "./model/HorarioAtendimento";

export class InformacaoHorarioAtendimento {
    private lista: Array<HorarioAtendimento> = [];

    public async carregarListaHorarios(): Promise<void> {
        const listaHorarioAtendimento = await axios.get('https://api-fake-inatel/horarios-de-atendimento');
        
        if (Array.isArray(listaHorarioAtendimento.data)) {
            this.lista = listaHorarioAtendimento.data;
            return;
        }
        this.lista = [];
    }

    public adicionarHorario(
        nomeDoProfessor: String,
        horarioDeAtendimento: String,
        periodo: String,
        sala: Number,
        predio: Array<Number>
    ): void {
        const novoHorario = new HorarioAtendimento(
            nomeDoProfessor,
            horarioDeAtendimento,
            periodo,
            sala,
            predio
        );
        this.lista.push(novoHorario);
    }

    public editarHorario(
        nomeDoProfessor: string,
        novoHorario: HorarioAtendimento
    ): void {
        const indice = this.lista.findIndex(
            (horario) => horario.nomeDoProfessor === nomeDoProfessor
        );
        if (indice >= 0) {
            this.lista[indice] = novoHorario;
        } else {
            throw new Error("Horário de atendimento não encontrado");
        }
    }

    public deletarHorario(nomeDoProfessor: string): void {
        const indice = this.lista.findIndex(
            (horario) => horario.nomeDoProfessor === nomeDoProfessor
        );
        if (indice >= 0) {
            this.lista.splice(indice, 1);
        } else {
            throw new Error("Horário de atendimento não encontrado");
        }
    }

    public listarTodosHorariosAtendimento(): Array<HorarioAtendimento> {
        return this.lista;
    }

    public buscarHorarioAtendimentoPorNome(nomeDoProfessor: string): HorarioAtendimento | undefined {
        return this.lista.find((horarioAtendimento) => horarioAtendimento.nomeDoProfessor === nomeDoProfessor);
    }
}
export default InformacaoHorarioAtendimento;