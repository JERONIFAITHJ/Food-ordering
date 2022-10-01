let rowNum = 0;
const createOrder = (orderId) => {
  rowNum++;
  let colDiv = document.createElement("div");
  let cardDiv = document.createElement("div");
  let cardHeader = document.createElement("div");
  let cancelButton = document.createElement("span");
  let cardBody = document.createElement("div");
  let table =  document.createElement('table');
  let secTab = `<table class="table">
  <tbody>
    <tr>
      <th scope="row">${rowNum}</th>
      <td>Large Pizza</td>
      <td> $${Math.ceil(Math.random() * 10) + 15}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Medium pizza</td>
      <td>$${Math.ceil(Math.random() * 5) + 10}</td>
    </tr>
    <tr>
      <td colspan="2">Total</td>
      <td id="totalCost">$27</td>
    </tr>
  </tbody>
</table>`;

  let orderStatus = document.createElement("span");
  let cardFooter = document.createElement("div");

  colDiv.classList = "col-md-3 col-sm-6 col-xs-12 col-12";
  cardDiv.classList = "card text-center";
  cardHeader.classList =
    "card-header d-flex justify-content-between align-items-center";
  cardBody.classList = "card-body";
  cancelButton.innerHTML = `<i class="fa-solid fa-xmark text-warning"></i>`;
  cancelButton.id = `Cancel-${orderId}`;
  table.classList = 'table';
  orderStatus.classList = "badge rounded-pill bg-success";
  orderStatus.id = orderId;
  cardFooter.classList = "card-footer";

  cardHeader.innerHTML = `Order No: <b> ${orderId} </b>`;
  cardBody.innerHTML = secTab;
  orderStatus.innerHTML = `Order Placed`;
  cardFooter.innerHTML = `23-09-2022 09:47:36 PM`;

  colDiv.appendChild(cardDiv);
  cardDiv.appendChild(cardHeader);
  cardHeader.appendChild(cancelButton);
  cardDiv.appendChild(cardBody);
  cardBody.appendChild(orderStatus);
  cardDiv.appendChild(cardFooter);
  document.getElementById("order-cards-wrapper").appendChild(colDiv);

  const cancelOrder = document.querySelector(`#Cancel-${orderId}`);
  cancelOrder.addEventListener("click", () => {
    colDiv.style.display = "none";
  });
};
