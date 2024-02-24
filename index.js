async function handleSubmit(event) {
    event.preventDefault()

    var userDetail = {
        user_name: event.target.user_name.value,
        email_id: event.target.email_id.value,
        password: event.target.password.value
    }

    try {
        const result = await axios.post('http://localhost:3000/register/user-register', userDetail)
        if (result.data.status) {
            alert('user successful login')
            window.location.href = 'login.html';
        }
    }
    catch (e) {
        alert(e.response.data.data)
    }
    event.target.user_name.value = '',
        event.target.email_id.value = '',
        event.target.password.value = ''
}