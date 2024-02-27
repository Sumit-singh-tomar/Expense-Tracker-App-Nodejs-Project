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