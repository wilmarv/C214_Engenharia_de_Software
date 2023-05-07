import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import "api_test.mocks.dart";

import "package:test_mock/request.dart";

@GenerateMocks([http.Client])
void main() {
  test("Deve retornar lista com pesonagem de star wars se api foi chamada com sucesso", () async {
    
    final client = MockClient();

    when(client.get(Uri.parse('https://swapi.dev/api/people'))).thenAnswer(
        (_) async => http.Response(
            '{"count":3,"next":"https://swapi.dev/api/people/?page=2\",\"previous\":null,\"results\":[{\"name\":\"Luke Skywalker","gender":"male","created":"2014-12-09T13:50:51.644000Z"},{"name":"C-3PO","gender":"n/a","created":"2014-12-10T15:10:51.357000Z"},{"name":"R2-D2","gender":"n/a","created":"2014-12-10T15:11:50.376000Z"}]}',
            200));

    expect(await getPersonagem(client), listMock);
  });
}

final listMock = [
  {
    "name": "Luke Skywalker",
    "gender": "male",
    "created": "2014-12-09T13:50:51.644000Z"
  },
  {"name": "C-3PO", "gender": "n/a", "created": "2014-12-10T15:10:51.357000Z"},
  {"name": "R2-D2", "gender": "n/a", "created": "2014-12-10T15:11:50.376000Z"}
];
