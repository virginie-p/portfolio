<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();

if ($_POST) {
    // Set response code - 200 OK
    http_response_code(200);
    $subject = 'Demande de contact depuis le portfolio';
    $to = "pereira.virgini@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['fname'] . ' ' . $_POST['lname'];

    // Data
    $msg = $_POST['message'];

    // Headers
    $headers  = 'From:'. $from . "\r\n" .
                'Reply-To: "' . $name . '" <'. $from . '>'."\r\n" .
                'MIME-Version: 1.0' . "\r\n" .
                'Content-type: text/html;  charset=utf-8'. "\r\n" .
                'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $msg, $headers);

    // echo json_encode( $_POST );
    echo json_encode(array(
        "sent" => true
    ));
}
else {
    // Tell the user about error
    echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>