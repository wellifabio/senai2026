# Gerenciar galeria de fotos
Para listar e contar as fotos da galeria do dispositivo no Flutter sem abrir uma tela de seleção nativa, use o pacote **photo_manager**.
- Solicite permissão, obtenha a contagem total com getAssetCount e traga os arquivos ou metadados usando `getAssetListPaged`
## Passos
- 1 Adicione a dependência no seu pubspec.yaml
```yaml
dependencies:
  photo_manager: ^3.12.0
```
- 1 Peça permissão e busque as fotos com este código
```dart
import 'package:photo_manager/photo_manager.dart';

Future<void> obterFotosDaGaleria() async {
  // 1. Solicitar permissão de acesso à galeria
  final PermissionState ps = await PhotoManager.requestPermissionExtend();

  if (ps.isAuth || ps.hasAccess) {
    // 2. Obter a quantidade total de arquivos de imagem
    int totalFotos = await PhotoManager.getAssetCount(
      type: RequestType.image,
    );
    print('Total de fotos: $totalFotos');

    // 3. Obter uma lista com as fotos (ex: as primeiras 80 fotos)
    List<AssetEntity> listaFotos = await PhotoManager.getAssetListPaged(
      type: RequestType.image,
      page: 0,
      pageCount: 80, 
    );

    // 4. Percorrer os dados das fotos (ID, arquivo físico, etc.)
    for (var foto in listaFotos) {
      // Caminho do arquivo no celular (pode ser lento no iOS para arquivos em nuvem)
      // var arquivo = await foto.file; 
      print('ID da foto: ${foto.id}, Data: ${foto.createDateTime}');
    }
  } else {
    // Permissão negada
    PhotoManager.openSetting();
  }
}
```
## Detalhes
- Permissões Nativas: Não se esqueça de configurar as permissões no AndroidManifest.xml (Android) e no Info.plist (iOS) para leitura da galeria/fotos, conforme a documentação do pacote.
- Performance: Evite carregar o arquivo binário de todas as fotos de uma só vez usando .file para não travar a memória RAM do aparelho; utilize paginação (getAssetListPaged) ou os provedores de miniatura recomendados pela biblioteca.
  
