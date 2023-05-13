import 'package:http/http.dart' as http;
import 'dart:convert';

Future<List<dynamic>> getPersonagem(http.Client client) async {
  final response = await client.get(Uri.parse('https://swapi.dev/api/people'));
  if (response.statusCode == 200) {
    final result = json.decode(response.body);
    return result['results'];
  } else {
    throw Exception('Failed to load data');
  }
}
