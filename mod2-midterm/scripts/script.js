document.getElementById("calculateButton").addEventListener("click", function() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let total = 0;
    let allValid = true;

    days.forEach(day => {
        const mileageInput = document.getElementById(day).value;
        const mileage = parseFloat(mileageInput);

        if (isNaN(mileage) || mileageInput === '') {
            //check for valid distance data
            alert(`Please enter a valid distance for ${day}`);
            allValid = false;
            return;
        }

        total += mileage;
    });

    if (!allValid) return;

    const goalInput = document.getElementById('goalInput');
    const goal = parseFloat(goalInput.value);

    //check for valid goal data
    if (isNaN(goal) || goal === null) {
        alert("Please enter a valid goal.");
        return;
    }

    const percentComplete = (total / goal) * 100;

    document.getElementById('totalMileage').textContent = total.toFixed(2);
    document.getElementById('percentComplete').textContent = Math.round(percentComplete);

    const logDiv = document.getElementById('log');
    const currentDate = new Date().toLocaleDateString();
    const logEntry = document.createElement('div');
    logEntry.classList.add('log-entry');
    const logContent = `**${currentDate}** Goal: ${goal}, Total Mileage: ${total.toFixed(2)}, % Complete: ${Math.round(percentComplete)}`;
    logEntry.textContent = logContent;
    //best way to add to end of log is with append child https://www.w3schools.com/jsref/met_node_appendchild.asp
    logDiv.appendChild(logEntry);
    document.getElementById('currentLog').textContent = "Current Log:";
});
