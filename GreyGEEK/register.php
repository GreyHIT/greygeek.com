<?php
// Подключение к базе данных
$host = 'localhost';
$dbname = 'postgres';
$user = 'postgres';
$pass = '54321';

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Получение данных из формы
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Шифрование пароля

    // Проверка, существует ли пользователь
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    if ($stmt->fetchColumn() > 0) {
        echo "Пользователь с таким email уже существует!";
    } else {
        // Добавление нового пользователя
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
        $stmt->execute([
            'username' => $username,
            'email' => $email,
            'password' => $password
        ]);
        echo "Регистрация успешна!";
    }
} catch (PDOException $e) {
    echo "Ошибка: " . $e->getMessage();
}
?>
