import React from "react";

const CustomerSupportPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-600 text-white p-4">
        <h1 className="text-2xl font-bold">Customer Support Portal</h1>
      </header>
      <main className="p-4">
        {/* Ticketing System */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Ticketing System</h2>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            View Tickets
          </button>
        </div>
        {/* Live Chat */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Live Chat</h2>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
            Start Chat
          </button>
        </div>
        {/* Self-Service Portal */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Self-Service Portal</h2>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
            Access Portal
          </button>
        </div>
      </main>
    </div>
  );
};

export default CustomerSupportPortal;
