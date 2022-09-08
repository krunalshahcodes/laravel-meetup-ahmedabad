import { Link } from '@inertiajs/inertia-react'
import PropTypes from 'prop-types'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster />
      <div className="container mx-auto pt-8">
        <Link href="/">
          <img
            className=""
            src="https://laravel.com/img/logomark.min.svg"
            alt="Laravel"
          />
        </Link>
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

export default Layout
