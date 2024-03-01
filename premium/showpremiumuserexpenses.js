document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token")
    let page = 1
    axios.get(`http://localhost:3000/expense/get-expense?page=${page}`, { headers: { "Authorization": token } })
        .then((result) => {
            if (result.data.status) {
                createTable(result,page)
                showPagination(result.data.pageData)
            }
        })
        .catch((e) => {
            alert(e.response.data.data)
            console.log(e);
        })
})


function createTable(result,page){
     const table = document.querySelector('table')
    table.innerHTML = ''
    const caption = table.createCaption();
    caption.innerHTML = 'Daily Expense';
    const headingRow = table.insertRow()
    headingRow.style.backgroundColor = 'tan'
    headingRow.style.color = 'white'
    headingRow.insertCell(0).innerHTML = 'Sn';
    headingRow.insertCell(1).innerHTML = 'Date';
    headingRow.insertCell(2).innerHTML = 'Description';
    headingRow.insertCell(3).innerHTML = 'Category';
    headingRow.insertCell(4).innerHTML = 'Income';
    headingRow.insertCell(5).innerHTML = 'Amount';

    page = (page*10)-9
    result.data.data.map((item,i) => {
        const row = table.insertRow()
        row.insertCell(0).innerHTML = page;
        row.insertCell(1).innerHTML = item.dates;
        row.insertCell(2).innerHTML = item.description;
        row.insertCell(3).innerHTML = item.expense_name;
        row.insertCell(4).innerHTML = item.income ? `&#8377;${item.income}` : '';
        row.insertCell(5).innerHTML = item.amount ? `&#8377;${item.amount}` : '';
        page++
    })

}


function getPage(page) {
    const token = localStorage.getItem("token")
    axios.get(`http://localhost:3000/expense/get-expense?page=${page}`, { headers: { "Authorization": token } })
        .then((result) => {
            if (result.data.status) {
                createTable(result,page)
                showPagination(result.data.pageData)
            }
        })
        .catch((e) => {
            // alert(e.response.data.data)
            console.log(e);
        })
}

function showPagination(data) {
    const paginationContainer = document.querySelector('#pagination')
    paginationContainer.innerHTML = ''
    if (data.ispreviouspage) {
        const previousPageButton = document.createElement('button');
        previousPageButton.innerHTML = data.previouspage
        previousPageButton.onclick = function (event) {
            getPage(data.previouspage)
        }
        paginationContainer.appendChild(previousPageButton)
    }

    const currentPageButton = document.createElement('button');
    currentPageButton.innerHTML = data.currentpage
    currentPageButton.style.backgroundColor = 'tomato'
    currentPageButton.onclick = function () {
        getPage(dat.currentpage)
    }
    paginationContainer.appendChild(currentPageButton)

    if (data.isnextpage) {
        const nextPageButton = document.createElement('button');
        nextPageButton.innerHTML = data.nextpage
        nextPageButton.onclick = function () {
            getPage(data.nextpage)
        }
        paginationContainer.appendChild(nextPageButton)
    }
}

function handleshowpremiumuserexpenses() {
    window.location.reload()
}

function handleMonthlyWise() {
    window.location.href = 'expensemonthlywise.html'
}

function handleWeeklyWise() {
    window.location.href = 'expenseweeklywise.html'
}