document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem('token')

    var result = await axios.get("http://localhost:3000/premium/show-leaderboard", { headers: { "Authorization": token } })

    console.log('result', result.data.data);

    const table = document.querySelector('table')

    const key = Object.keys(result.data.data)
    const values = Object.values(result.data.data)

    key.map((item, i) => {
        const row = table.insertRow()
        row.insertCell(0).innerHTML = item;
        row.insertCell(1).innerHTML = values[i];
    })
})