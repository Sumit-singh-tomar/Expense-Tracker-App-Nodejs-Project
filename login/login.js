async function handleLogin(event) {
    try {
        event.preventDefault()
        const userDetail = { email_id: event.target.email_id.value, password: event.target.password.value }
        var result = await axios.post('http://localhost:3000/register/login-user', userDetail)
        console.log('result',result);
        if (result.data.status) {
            alert("User Login Succesfully")
        }
        else{
            alert(result.data.data)
        }
    } 
    catch (e) {
        console.log('eeeeeee',e);
        alert(e.response.data.data)
    }
}