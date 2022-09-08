import { Link, usePage } from '@inertiajs/inertia-react'
import Layout from '../../Components/Layout'
import UsersTable from '../../Components/UsersTable'

const UsersList = () => {
  const { users } = usePage().props

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Users</h1>
          <p className="text-sm text-gray-500">
            A list of all the users in your company including their name, title,
            email and role.
          </p>
        </div>
        <div>
          <Link
            href="/add-user"
            className="bg-indigo-600 text-white px-3 py-2 rounded text-sm font-semibold cursor-pointer"
          >
            Add user
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <UsersTable users={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

UsersList.layout = (page) => <Layout>{page}</Layout>

export default UsersList
