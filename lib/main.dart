import 'package:flutter/material.dart';
import "request.dart";
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Testes com Mock',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Testes com Mock'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  late List<dynamic> _personagemList = [];

  @override
  void initState() {
    super.initState();
    _getPersonagem();
  }

  Future<void> _getPersonagem() async {
    List<dynamic> personagemList = await getPersonagem(http.Client());
    setState(() {
      _personagemList = personagemList;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.all(5),
            child: DataTable(
                columns: const [
                  DataColumn(label: Text('Nome')),
                  DataColumn(label: Text('Gênero')),
                  DataColumn(label: Text('Criado')),
                ],
                rows: _personagemList.map((personagem) {
                  return DataRow(cells: [
                    DataCell(Text(personagem["name"])),
                    DataCell(Text(personagem["gender"])),
                    DataCell(Text(personagem["created"])),
                  ]);
                }).toList())));
  }
}
