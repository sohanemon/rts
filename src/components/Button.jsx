import cx from 'classnames';

export default function Button({ variants = "primary", className = '', children }) {
  return (
    <button className={cx('rounded-full text-[17px] font-medium px-10 py-3', {
      'bg-theme text-theme-dark': variants === 'primary',
      'bg-theme-dark text-theme': variants === 'primary-reverse',
    }, className)}>
      {children}
    </button>
  )
}