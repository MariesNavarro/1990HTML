<?php
  $config = parse_ini_file('private/config.ini', true);
  require_once('PHPMailerAutoload.php');
  $name = trim($_POST['name']);
  $email = trim($_POST['email']);
  $subject = trim($_POST['subject']);
  $message = trim($_POST['message']);
  if($name != null && $email != null && $subject != null && $message != null){
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      $mail = new PHPMailer();
      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->SMTPAuth = true;
      $mail->Username = $config['m']['m'];
      $mail->Password = $config['m']['p'];
      $mail->SMTPSecure = 'ssl';
      $mail->Port = 465;
      $mail->Charset = "UTF-8";

      $mail->setFrom('handlermailmx@gmail.com', '1990 Handler');
      $mail->addAddress('handlermailmx@gmail.com', '1990 Handler');
      $mail->addReplyTo($email, $name);
      $mail->isHTML(true);
      $mail->Subject = 'Desde Web';
      $mail->Body = '<b style="color:#a6a7a7">Nombre:</b> '.$name.
                    '<br /> <b style="color:#a6a7a7">Correo:</b> '.$email.
                    '<br /> <b style="color:#a6a7a7">Asunto:</b> '.$subject.
                    '<br />
                     <br />
                    <b style="color:#a6a7a7">Mensaje:</b> <br />'.$message;

      if(!$mail->send()){
        $signal = 'bad';
        $msg = 'Error al procesar la información. Inténtalo de nuevo.';
      } else {
        $signal = 'ok';
        $msg = 'Los datos se procesaron correctamente.';
      }
    } else {
      $signal = 'bad';
      $msg = 'Por favor ingresa un correo que sea válido.';
    }
  } else {
      $signal = 'bad';
      $msg = 'Por favor llena todos los campos.';
  }

  $data = array(
    'name' =>$name,
    'signal' => $signal,
    'msg' => $msg
  );
  echo json_encode($data);
?>
