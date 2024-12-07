import React from "react";

const AnalyticalDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold">Analytical Dashboard</h1>
      </header>
      <main className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Real-Time Monitoring */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Real-Time Monitoring</h2>
          <div className="text-gray-600">
            <p>Network Status: <span className="text-green-500">Active</span></p>
            <p>Downtime: 0%</p>
          </div>
        </div>
        {/* Predictive Analytics */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Predictive Analytics</h2>
          <div className="text-gray-600">
            <p>Predicted Outages: <span className="text-red-500">2</span></p>
            <p>Response Time: 5ms</p>
          </div>
        </div>
        {/* Insights */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Insights</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View Insights
          </button>
        </div>
      </main>
    </div>
  );
};

export default AnalyticalDashboard;
