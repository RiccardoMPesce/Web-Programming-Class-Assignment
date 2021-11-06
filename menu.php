<?php 
include 'database.php';

const NOME = 0, NUMERO = 1, RUOLO = 2, ANNO = 3;

switch ($_GET["richiesta"]) {
    case NOME:
        usort($giocatori, "ordinaPerNome");
        break;
    case NUMERO:
        usort($giocatori, "ordinaPerMaglia");
        break;
    case RUOLO:
        usort($giocatori, "ordinaPerRuolo");
        break;
    case ANNO:
        usort($giocatori, "ordinaPerAnno");
        break;
}

echo json_encode($giocatori);

?>
