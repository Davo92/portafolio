<?php
$nombre = $_POST['nombre'];
echo $nombre . "<br>";

$mail = $_POST['mail'];
echo $mail . "<br>";

$comentario = $_POST['comentario'];
echo $comentario . "<br>";

$headers = "From: " . $mail . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$asunto = mail("david.romero.araez.92@gmail.com", "Contacto", $comentario, $headers);
echo $asunto . "<br>";


?>