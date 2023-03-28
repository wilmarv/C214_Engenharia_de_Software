const mockResponse = {
    data: [
        {
            nomeDoProfessor: "Renzo",
            horarioDeAtendimento: "Segunda-feira, das 14h às 16h",
            periodo: "Integral",
            sala: 1,
            predio: [1, 2, 3, 4, 5, 6],
        },
        {
            nomeDoProfessor: "Pedro Sergio",
            horarioDeAtendimento: "Terça-feira, das 10h às 12h",
            periodo: "Noturno",
            sala: 6,
            predio: [1, 2, 3, 4, 5, 6],
        },
    ],
};

export default {
    get: jest.fn().mockResolvedValue(mockResponse),
};
