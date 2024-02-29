document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token")
    axios.get("http://localhost:3000/expense/get-expense", { headers: { "Authorization": token } })
        .then((result) => {
            if (result.data.status) {
console.log(result.data.data[0]);
                const table = document.querySelector('table')
                result.data.data.map((item) => {
                    const row = table.insertRow()
                    row.insertCell(0).innerHTML = item.dates;
                    row.insertCell(1).innerHTML = item.description;
                    row.insertCell(2).innerHTML = item.expense_name;
                    row.insertCell(3).innerHTML = item.income?`&#8377;${item.income}`:'' ;
                    row.insertCell(4).innerHTML = item.amount?`&#8377;${item.amount}`:'';
                })
            }
        })
        .catch((e) => {
            alert(e.response.data.data)
            console.log(e);
        })
})

function handleshowpremiumuserexpenses(){
    window.location.reload()
}

function handleMonthlyWise(){
    window.location.href = 'expensemonthlywise.html'
}

function handleWeeklyWise(){
    window.location.href = 'expenseweeklywise.html'
}