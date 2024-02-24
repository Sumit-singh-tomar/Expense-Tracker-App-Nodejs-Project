async function handleAddExpense(event) {
    try {
        event.preventDefault()
        const expenseDetail = {
            expense_name : event.target.category.value,
            amount : event.target.amount.value,
            description : event.target.description.value,
        }
        var result = await axios.post('http://localhost:3000/expense/add-expense', expenseDetail)
        if (result.data.status) {
            alert(result.data.data)
        }
    }
    catch (e) {
        alert(e.response.data.data)
    }
}