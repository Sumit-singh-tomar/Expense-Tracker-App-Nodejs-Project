async function handleAddExpense(event) {
    try {
        event.preventDefault()
        const expenseDetail = {
            expense_name: event.target.category.value,
            amount: event.target.amount.value,
            description: event.target.description.value,
        }
        const token = localStorage.getItem('token')
        var result = await axios.post('http://localhost:3000/expense/add-expense', expenseDetail, { headers: { 'Authorization': token } })
        if (result.data.status) {
            alert(result.data.data)
            window.location.href = 'showExpense.html'
        }
    }
    catch (e) {
        alert(e.response.data.data)
    }
}

async function handleBuyPremium(event) {
    event.preventDefault()
    try {
        const token = localStorage.getItem('token')
        var result = await axios.get('http://localhost:3000/purchase/buy-premium', { headers: { "Authorization": token } })
        if(result.data.status){
            alert('dlkj')
        }
    }
    catch (e) {
        alert(e.response.data.data)
    }
}