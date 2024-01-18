//----------------------- animate number counter---------------------------------------------
const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries, observe) => {
    const [entry] = entries;
    // console.log(entry);

    // if (entry.isIntersecting == false)
    if (!entry.isIntersecting) return;

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 100;

    counterNum.forEach((curElem) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.number);
            // console.log(targetNumber);
            const initialNum = parseInt(curElem.innerText);
            // console.log(initialNum);

            const incrementNumber = Math.trunc(targetNumber / speed);
            // console.log(incrementNumber);

            if (initialNum < targetNumber) {
                curElem.innerText = `${initialNum + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            }
        };

        updateNumber();
    });
    observe.unobserve(workSection);

}, {
    root: null,
    threshold: 0,
});

workObserver.observe(workSection);