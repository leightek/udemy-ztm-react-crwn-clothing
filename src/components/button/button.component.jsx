
const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button {...otherProps}
        >
            {children}    
        </button>
    );
};

export default Button;