import classNames from 'classnames'
import PropTypes from 'prop-types'

const Select = ({
  name,
  label,
  wrapperClass,
  className,
  options,
  ...props
}) => {
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
      <select
        id={name}
        name={name}
        className={classNames(
          'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
          className,
        )}
        {...props}
      >
        {options.map((option, i) => (
          <option key={i} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  wrapperClass: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
}

export default Select
