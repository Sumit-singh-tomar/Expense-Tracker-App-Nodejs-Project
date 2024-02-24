document.addEventListener("DOMContentLoaded",async ()=>{
    var result = await axios.get('http://localhost:3000/expense/get-expense')

    const table = document.querySelector('table')
    
    result.data.data.map((item)=>{
        const row = table.insertRow()
        row.insertCell(0).innerHTML = item.expense_name;
        row.insertCell(1).innerHTML = item.amount;
        row.insertCell(2).innerHTML = item.description;
        row.insertCell(3).innerHTML = `<button>Delete</button>`
    })
})