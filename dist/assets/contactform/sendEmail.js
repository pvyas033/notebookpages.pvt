function sendEmail(ownerName,ownerUserName,ownerPassword,ownerEmailAddress,senderEmailAddress,name,email,subject,message){
    Email.send({
	Host: "smtp.gmail.com",
	Username : senderEmailAddress,
	Password : ownerPassword,
	To : ownerEmailAddress,
	From : senderEmailAddress,
	Subject : "Something from your site Notebook",
	Body : "Hi, "+ownerName+" Someone message you see this: Name : "+name+" Email : ***"+email+"*** Subject : ***"+subject+"***  Message : ***"+message+"***    ****I hope you will like it."
	}).then(function (response) {
            if(response =='OK'){
                $("#sendmessage").addClass("show");
                $("#errormessage").removeClass("show");
                $('.contactForm').find("input, textarea").val("");
            }
            else
            {
                $("#sendmessage").removeClass("show");
                $("#errormessage").addClass("show");
                $('#errormessage').html("Something is wrong with your Email address. Correct it, Please try again");
            }
        }
	);
}
