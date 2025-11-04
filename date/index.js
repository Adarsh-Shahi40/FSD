function calculateAge() {
        const dobInput = document.getElementById('dob').value;
        if (!dobInput) {
            alert('Please enter your date of birth.');
            return;
        }

        const dob = new Date(dobInput);
        const today = new Date();

        let years = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        let date = today.getDate() - dob.getDate();
        if (date < 0) {
            month--;
            date += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (month < 0) {
            years--;
            month += 12;
        }

        document.getElementById('ageResult').innerText = `Your age is: ${years} years, ${month} months, and ${date} days.`;

    }