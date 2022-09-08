import classNames from 'classnames'
import PropTypes from 'prop-types'

const Input = ({ name, label, type, wrapperClass, className, ...props }) => {
  return (
    <div className={classNames('col-span-6 sm:col-span-3', wrapperClass)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type || 'text'}
        name={name}
        id={name}
        className={classNames(
          'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md',
          className,
        )}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOfType(['text', 'email', 'password']),
  wrapperClass: PropTypes.string,
  className: PropTypes.string,
}

export default Input
