import InformacaoHorarioAtendimento from "../src";
import HorarioAtendimento from "../src/model/HorarioAtendimento";
import { horarioProfMarcelo, horarioProfPedro, horarioProfRenzo } from "../__mocks__/horariosAtendimento";

describe("Cenarios de Teste: Teste com a classe InformacaoHorarioAtendimento", () => {

    test("Caso de teste: Lista de horarios de atendimento deve receber do servidor array de HorarioAtendimento", async () => {

        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();
        await informacaoHorarioAtendimento.carregarListaHorarios();
        expect(informacaoHorarioAtendimento.listarTodosHorariosAtendimento().length).toEqual(2);

    });

    test("Caso de teste: lista deve esta vazia caso n seja feito o request para carrega-la", () => {
        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();
        expect(informacaoHorarioAtendimento.listarTodosHorariosAtendimento().length).toEqual(0);
    });

    test("Caso de teste: Adicionando horario de atendimento ", async () => {

        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();
        await informacaoHorarioAtendimento.carregarListaHorarios();

        informacaoHorarioAtendimento.adicionarHorario("Egidio", "Terça 14h às 16h", "Integral", 3, [1]);

        expect(informacaoHorarioAtendimento.listarTodosHorariosAtendimento().length).toEqual(3);
    });

    test("Caso de teste: Depois de adicionar um horario deve editar com sucesso da sala", async () => {
        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();
        await informacaoHorarioAtendimento.carregarListaHorarios();

        informacaoHorarioAtendimento.adicionarHorario("Egidio", "Terça 14h às 16h", "Integral", 3, [1]);

        const novoHorario = new HorarioAtendimento("Egidio", "Terça 14h às 16h", "Integral", 3, [1]);

        informacaoHorarioAtendimento.editarHorario("Egidio", novoHorario);

        expect(informacaoHorarioAtendimento.buscarHorarioAtendimentoPorNome("Egidio")).toStrictEqual(novoHorario);
    });

    test("Caso de teste: Deve adicionar 3 horarios com sucesso e depois deletar um e ter apenas 2 Horarios na lista", () => {

        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();

        informacaoHorarioAtendimento.adicionarHorario(
            horarioProfMarcelo.nomeDoProfessor,
            horarioProfMarcelo.horarioDeAtendimento,
            horarioProfMarcelo.periodo,
            horarioProfMarcelo.sala,
            horarioProfMarcelo.predio
        );

        informacaoHorarioAtendimento.adicionarHorario(
            horarioProfRenzo.nomeDoProfessor,
            horarioProfRenzo.horarioDeAtendimento,
            horarioProfRenzo.periodo,
            horarioProfRenzo.sala,
            horarioProfRenzo.predio
        );

        informacaoHorarioAtendimento.adicionarHorario(
            horarioProfPedro.nomeDoProfessor,
            horarioProfPedro.horarioDeAtendimento,
            horarioProfPedro.periodo,
            horarioProfPedro.sala,
            horarioProfPedro.predio
        );

        informacaoHorarioAtendimento.deletarHorario("Pedro Sergio");
        expect(informacaoHorarioAtendimento.buscarHorarioAtendimentoPorNome("Pedro Sergio")).toEqual(undefined)
    });

    test("Caso de teste: Tentar apagar um horario de atendimento que não existe", () => {

        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();

        informacaoHorarioAtendimento.adicionarHorario(
            horarioProfMarcelo.nomeDoProfessor,
            horarioProfMarcelo.horarioDeAtendimento,
            horarioProfMarcelo.periodo,
            horarioProfMarcelo.sala,
            horarioProfMarcelo.predio
        );

        expect(() => {
            informacaoHorarioAtendimento.deletarHorario("Inexistente");
        }).toThrow("Horário de atendimento não encontrado");
    });

    test("Caso de teste: Tentar buscar um horario de atendimento não existente", async () => {
        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();
        await informacaoHorarioAtendimento.carregarListaHorarios();

        const horarioEncontrado = informacaoHorarioAtendimento.buscarHorarioAtendimentoPorNome("Carlos");

        expect(horarioEncontrado).toBeUndefined();
    });

    test("Caso de teste: Tentar editar um horario de atendimento não existente", async () => {

        const informacaoHorarioAtendimento = new InformacaoHorarioAtendimento();
        await informacaoHorarioAtendimento.carregarListaHorarios();

        const novoHorario: HorarioAtendimento = {
            nomeDoProfessor: "Rangel",
            horarioDeAtendimento: "Segunda, das 14h às 16h",
            periodo: "Noturno",
            sala: 2,
            predio: [1],
        };
        expect(() => informacaoHorarioAtendimento.editarHorario("Rangel", novoHorario)).toThrow("Horário de atendimento não encontrado");
    });
});
