const RippleButton = (props) => {
    const createRipple = (event) => {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth/2, button.clientHeight/2);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    return (
        <button
            onClick={createRipple}
            className={`my-5 relative block rounded-lg ${props.buttonStyles} text-xl font-bold leading-normal overflow-hidden`}
            type={props.type}
        >
            {props.areaLabel}
            <span className="ripple absolute"></span>
        </button>
    );
};

export default RippleButton;
