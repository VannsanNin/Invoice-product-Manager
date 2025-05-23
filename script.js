$(document).ready(function () {
  let grandTotal = 0;
  let count = 1;

  // Function to update the grand total display
  function updateGrandTotal() {
    $("#grandTotal").text(grandTotal.toFixed(2));
  }

  // Function to clear the form inputs
  function clearForm() {
    $(" #title, #qty, #price").val("");
    $("#discount").val("0");
    $("#title").focus();
  }

  // Function to remove the empty state row
  function removeEmptyState() {
    $(".empty-state").remove();
  }

  // Form submission handler
  $("#itemForm").submit(function (e) {
    e.preventDefault();

    // Get form values
    const title = $("#title").val();
    const qty = parseFloat($("#qty").val());
    const price = parseFloat($("#price").val());
    const discount = parseFloat($("#discount").val()) || 0;

    // Validate required fields
    if (!title || !qty || !price) {
      alert("Please fill in all required fields");
      return;
    }

    // Calculate amounts
    const subtotal = qty * price;
    const discountAmount = subtotal * (discount / 100);
    const amount = subtotal - discountAmount;

    // Update grand total
    grandTotal += amount;

    // Remove empty state if it exists
    removeEmptyState();

    // Create new table row
    const row = `
      <tr data-amount="${amount}">
        <td>${count}</td>
        <td>${title}</td>
        <td>$${price.toFixed(2)}</td>
        <td>${qty}</td>
        <td>${discount}%</td>
        <td class="amount">$${amount.toFixed(2)}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button></td>
      </tr>
    `;

    // Append row to table and update UI
    $("#tbody").append(row);
    updateGrandTotal();
    clearForm();
  });

  // Delete button click handler (using event delegation)
  $(document).on("click", ".delete-btn", function () {
    const row = $(this).closest("tr");
    const amount = parseFloat(row.data("amount"));

    // Update grand total and remove row
    grandTotal -= amount;
    row.remove();
    updateGrandTotal();

    // Add empty state if no items remain
    if ($("#tbody tr").length === 0) {
      $("#tbody").append(`
        <tr class="empty-state">
          <td colspan="7">No items added yet. Fill out the form above to add your first item.</td>
        </tr>
      `);
    }
    count++;
  });

  // Focus on first input when page loads
  $("#title").focus();
});
