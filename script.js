<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form element
    const form = event.target;
    
    // Get the form data
    const formData = new FormData(form);
    
    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    
    // Make an AJAX request to send the form data to Google Sheets
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbykKk6l-T2FBXYCpq6b96Ni3T4HaXh8HlAl3HCrvZeKJbhn-igmI0nleMnAAdeO9Th_LA/exec',
      method: 'POST',
      dataType: 'json',
      data: jsonData,
      success: function(response) {
        // Handle the success response
        console.log('Form submitted successfully');
        console.log(response);
        // You can show a success message or redirect the user to a thank you page
      },
      error: function(xhr, status, error) {
        // Handle the error response
        console.error('Form submission failed');
        console.log(xhr, status, error);
        // You can show an error message to the user
      }
    });
  }
</script>
