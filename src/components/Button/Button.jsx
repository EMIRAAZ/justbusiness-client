function Button({ type='button',handleClick, className, title, ariaLabel, name, id, value }) {
  return (
    <button
      className={className}
      title={title}
      type={type}
      aria-label={ariaLabel}
      name={name}
      id={id}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Button;
