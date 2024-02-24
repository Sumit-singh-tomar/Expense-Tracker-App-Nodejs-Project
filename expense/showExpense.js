document.addEventListener("DOMContentLoaded", async () => {
    var result = await axios.get('http://localhost:3000/expense/get-expense')

    const table = document.querySelector('table')

    result.data.data.map((item) => {
        const row = table.insertRow()
        row.insertCell(0).innerHTML = item.expense_name;
        row.insertCell(1).innerHTML = `&#8377;${item.amount}`;
        row.insertCell(2).innerHTML = item.description;

        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = "Delete"
        deleteButton.onclick = async function (event) {
            try {
                var response = await axios.delete(`http://localhost:3000/expense/delete-expense/${item.id}`)
                if (response.data.status) {
                    location.reload()
                }
            } catch (e) {
                alert(e.response.data.data)
            }
        }

        row.insertCell(3).append(deleteButton)
    })
})