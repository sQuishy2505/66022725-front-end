let xhr = new XMLHttpRequest()
xhr.open('GET',' https://ghibliapi.vercel.app/films/')
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);

        addProductsToTable(response)
    }
}
xhr.send()

function addProductsToTable(products) {
    const tableBody = document.querySelector('#product-table tbody');

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <img src="${product.image}" alt="">
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.release_date}</td>
        `;
        tableBody.appendChild(row);
    });
}