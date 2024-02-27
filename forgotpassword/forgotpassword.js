function handleForgotPassword(event){
    event.preventDefault()
    const userData = { email_id: event.target.email_id.value }
    axios.post('http://localhost:3000/password/forgotpassword',userData)
        .then((result) => {
            console.log(result);
        })
        .catch((e) => {
            console.log(e);
        })
}


// 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