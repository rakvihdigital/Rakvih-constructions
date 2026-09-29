import { BarChart3, Download, Filter, TrendingUp, TrendingDown } from 'lucide-react';

export default function AdminReports() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#EDEDED] mb-1">Reports</h2>
          <p className="text-[#888888] text-sm">Detailed analytics and financial reports for your projects.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#111111] border border-[#333333] hover:border-[#444444] text-[#EDEDED] px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="bg-[#EDEDED] text-black hover:bg-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 rounded-xl flex flex-col justify-between min-h-[300px]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-sm text-[#EDEDED]">Revenue Overview</h3>
              <p className="text-xs text-[#888888]">Monthly revenue vs expenses</p>
            </div>
            <select className="bg-[#111111] border border-[#333333] rounded-lg py-1.5 px-3 text-xs text-[#EDEDED] focus:outline-none focus:border-[#666666]">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 border-b border-l border-[#333333] relative flex items-end justify-between px-4 pb-4">
            {/* Dummy Bar Chart */}
            {[40, 70, 45, 90, 65, 80].map((height, i) => (
              <div key={i} className="w-8 bg-gradient-to-t from-gold/40 to-gold rounded-t-sm" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between px-4 mt-3 text-xs text-[#888888]">
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
          </div>
        </div>

        {/* Project Completion Stats */}
        <div className="space-y-6">
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sm text-[#EDEDED]">Completion Rate</h3>
              <BarChart3 className="w-4 h-4 text-[#666666]" />
            </div>
            <h2 className="text-4xl font-semibold text-[#EDEDED] mb-2">92.4%</h2>
            <p className="text-sm text-green-400 flex items-center gap-1 font-medium">
              <TrendingUp className="w-4 h-4" /> +3.2% from last quarter
            </p>
          </div>

          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sm text-[#EDEDED]">Average Material Costs</h3>
              <BarChart3 className="w-4 h-4 text-[#666666]" />
            </div>
            <h2 className="text-4xl font-semibold text-[#EDEDED] mb-2">- 4.1%</h2>
            <p className="text-sm text-green-400 flex items-center gap-1 font-medium">
              <TrendingDown className="w-4 h-4" /> Costs reduced this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
