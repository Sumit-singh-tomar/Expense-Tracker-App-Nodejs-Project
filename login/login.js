async function handleLogin(event) {
    try {
        event.preventDefault()
        const userDetail = { email_id: event.target.email_id.value, password: event.target.password.value }
        var result = await axios.post('http://localhost:3000/register/login-user', userDetail)
        if (result.data.status) {
            alert("User Login Succesfully")
            localStorage.setItem('token',result.data.token)
            window.location.href = '../expense/expense.html'
        }
    } 
    catch (e) {
        alert(e.response.data.data)
    }
}