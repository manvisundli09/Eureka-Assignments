<html>

<head>
    <title>Increment Decrement Counter</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="main.js" defer></script>
</head>

<body>
    <div class="container">
        <button id="increment">
            LIKE
        </button>
        <h3 id="counter">
        </h3>
        <button id="decrement">
            DISLIKE
        </button>
    </div>
</body>

</html>
-------------------------------------------------------------------------------JS---------------------------------------------------------------------

const incrementCount = document.getElementById("increment");
const decrementCount = document.getElementById("decrement");

// Select total count
const totalCount = document.getElementById("counter");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
    if(count==0)
    {
        totalCount.innerHTML = count;
    }
    else{
        count--;
        totalCount.innerHTML = count;
    }
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
