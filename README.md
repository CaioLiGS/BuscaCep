<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="./Css/style.css">
    
    <title>Buscacep</title>
</head>
<body>
    <h1>Buscador de Cep</h1>
    
    <div class="Input">
        <input type="number" name="Cep" class="BuscadorCep" onblur="Coletar()">
    </div>
    
    <div class="Dados">
        <input type="text" name="Estado" class="Estado" disabled placeholder="Estado">
        <input type="text" name="Cidade" class="Cidade" disabled placeholder="Cidade">
        <input type="text" name="Endereco" class="Endereco" disabled placeholder="Endereco">
        <input type="text" name="Rua" class="Rua" disabled placeholder="Rua">
        <input type="text" name="DDD" class="ddd" disabled placeholder="DDD">
    </div>
    
    <script src="./Js/main.js"></script>
</body>
</html>
