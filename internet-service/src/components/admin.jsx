import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* System Settings */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">System Settings</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Manage Settings
          </button>
        </div>
        {/* User Roles */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">User Roles & Permissions</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Manage Roles
          </button>
        </div>
        {/* Customer Data */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Customer Data</h2>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            View Customers
          </button>
        </div>
        {/* Reports */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-lg font-semibold mb-2">System Reports</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Generate Reports
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
