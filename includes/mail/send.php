<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');

$results = [];
$visitor_name = '';
$visitor_email = '';
$visitor_message = '';

if (isset($_POST['firstname'])) { 
    $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING); 
}

if (isset($_POST['lastname'])) {
    $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING); 
} 

if (isset($_POST['email'])) {
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
} 

if (isset($_POST['message'])) {
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);  
} 

$results['name'] = $visitor_name; 
$results['message'] = $visitor_message; 


$email_subject = 'Inquiry from Oksil Joo Portfolio Site'; 
$email_recipient = 'admin@admin.com'; 
$email_message = sprintf('Name: %s, Email:$s, Message: %s', $visitor_name, $visitor_email, $visitor_message);

$email_headers = array(
    'From'=>'noreply@admin.com',
    'Reply-to'=>$visitor_email,

);

$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);


if ($email_result) {

    $results['message'] = sprintf('I will get back to you within 2 business days. I promise.', $visitor_name);

} else {

    $results['message'] = sprintf('I am really sorry, but the email did not go through.');
}

echo json_encode($results);