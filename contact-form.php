<?php

	if (strtoupper($_SERVER['REQUEST_METHOD'] == "POST"))
	{
		$valid_email = false;
		$errors = array();
		$mail_format = "#^[a-z0-9]+([_.-]*[a-z0-9]+[_.-]*)*@([a-z0-9]+([_.-][a-z0-9]+))+$#";

		if(preg_match($mail_format,$_POST['email']))
			$valid_email = true;

		if (empty($_POST['name']))
			$errors[] = "Please provide your first name";

		if (empty($_POST['email']) || $valid_email == false)
			$errors[] = "Please provide a valid e-mail";

		if (count($errors) > 0)
		{

			//If fail

			?>

            $('#enviando').fadeOut();

            $('#errormsg_contact').html("<?=$errors[0]?>").fadeIn("slow");

            $('#name').val('<?php echo $_POST['name']; ?>');
            $('#email').val('<?php echo $_POST['email']; ?>');

            setTimeout('$("#errormsg_contact").fadeOut("slow");', 2000);

			<?php

		}else{
				?>$('#errormsg_contact').html("Thank you for applying! We’ll be in touch with you soon.").fadeIn("slow");$('input[type="text"]').val('');$('#enviando').fadeOut();<?php
		}
	}
?>