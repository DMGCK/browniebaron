

const form = document.querySelector("form")
console.log(form)

form.addEventListener("submit", submit, false)

const cred = {
  user_id: "-OlpHHuvasLZhr-SE",
  service_id: "3b_contact",
  template_id: "3b_contact_form",
  template_params: {
    from_name: "",
    reply_to: "",
    message: ""
  }
}


async function submit(e) {
  const userInput = [];
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length != 0) {
      userInput.push(form.elements[i].value)
    }
  }
  e.preventDefault();
  e.stopPropagation();
  
  console.log(userInput)
  cred.template_params.from_name = userInput[0]
  cred.template_params.reply_to = userInput[1]
  cred.template_params.message = userInput[2]

try {
  emailjs.send(cred.service_id,cred.template_id, cred.template_params)
	.then(function(response) {
	   window.alert("Thank you! The Barons will speak with you shortly!")
	}, function(err) {
	   console.log('FAILED...', err);
	});
} catch (error) {
  console.error(error) 
}
}
