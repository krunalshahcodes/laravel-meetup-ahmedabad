import { Head, Link, useForm } from '@inertiajs/inertia-react'
import toast from 'react-hot-toast'
import Input from '../../Components/Input'
import Layout from '../../Components/Layout'
import Select from '../../Components/Select'

const departments = [
  { id: 'Software', name: 'Software' },
  { id: 'Design', name: 'Design' },
  { id: 'Management', name: 'Management' },
  { id: 'Marketing', name: 'Marketing' },
]

const titles = [
  { id: 'Full Timer', name: 'Full Timer' },
  { id: 'Part Timer', name: 'Part Timer' },
  { id: 'Freelancer', name: 'Freelancer' },
]

const roles = [
  { id: 'Owner', name: 'Owner' },
  { id: 'Admin', name: 'Admin' },
  { id: 'Member', name: 'Member' },
]

const UsersCreate = () => {
  const { data, setData, post, processing, errors } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    department: '',
    title: '',
    role: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/add-user', {
      onSuccess: (res) => toast.success(res.props.flash?.success),
    })
  }

  return (
    <>
      <Head>
        <title>Create User</title>
      </Head>
      <div className="container max-w-5xl mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-2">Create User</h1>
        <p className="text-sm text-gray-500 mb-8">
          Add new user in your company.
        </p>
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <Input
                  name="first_name"
                  label="First Name"
                  value={data.first_name}
                  error={errors.first_name}
                  onChange={(e) => setData('first_name', e.target.value)}
                />
                <Input
                  name="last_name"
                  label="Last Name"
                  value={data.last_name}
                  error={errors.last_name}
                  onChange={(e) => setData('last_name', e.target.value)}
                />
                <Input
                  type="email"
                  name="email"
                  label="Email address"
                  value={data.email}
                  error={errors.email}
                  wrapperClass="col-span-6 sm:col-span-4"
                  onChange={(e) => setData('email', e.target.value)}
                />
                <Select
                  name="department"
                  label="Department"
                  options={departments}
                  value={data.department}
                  error={errors.departments}
                  onChange={(e) => setData('department', e.target.value)}
                />
                <Select
                  name="title"
                  label="Title"
                  options={titles}
                  value={data.title}
                  error={errors.title}
                  onChange={(e) => setData('title', e.target.value)}
                />
                <Select
                  name="role"
                  label="Role"
                  options={roles}
                  value={data.role}
                  error={errors.role}
                  onChange={(e) => setData('role', e.target.value)}
                />
              </div>
              {Object.keys(errors).length > 0 && (
                <ul className="mt-4 bg-red-50 rounded p-4">
                  {Object.keys(errors).map((error) => (
                    <li key={error} className="text-sm">
                      - {errors[error]}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex justify-start mt-4">
                <button
                  disabled={processing}
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
                <Link href="/">
                  <button
                    type="button"
                    className="ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

UsersCreate.layout = (page) => <Layout>{page}</Layout>

export default UsersCreate
