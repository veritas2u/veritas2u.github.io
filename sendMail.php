<?php
if (!empty($_POST['submit_form'])) {
    //user input details
    $fullname = $_POST['fullname'];
    $useremail = $_POST['emailaddress'];
    $usermobile = $_POST['mobile'];
    $usermessage = $_POST['message'];
    $vali = $_POST['vali'];
    if ($vali == "2"){
        //admin mail details
        $adminmail = "veritas2u@gmail.com, veritas2u@icloud.com";
        $adminsubject = "$fullname <$useremail> || email from http://veritas2u.com";
        $adminmail_body = "A message received from http://veritas2u.com website's contact form \n\nName : $fullname \nEmail : $useremail \nMobile: $usermobile \n\nMessage : $usermessage";
        $adminheaders = "From: $useremail";
        $adminsent = mail($adminmail, $adminsubject, $adminmail_body, $adminheaders);
        //echo $adminsent;
        //echo "sent";exit;
        if ($adminsent) {
            header("Location: /#contact_me");
            //$mailerMessage = "Message has been sent successfully";
            //$_POST = array();
        }
    } else {
        header("Refresh:0");
//        header("Location: /#contact_me");
    }
}
?>
