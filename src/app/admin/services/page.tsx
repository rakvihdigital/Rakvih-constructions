import { Plus, Edit3, Trash2, Search, Filter } from 'lucide-react';

export default function AdminServices() {
  const services = [
    { id: 1, title: "Residential Construction", desc: "Custom homes and residential complexes built to exact specifications.", status: "Active" },
    { id: 2, title: "Commercial Construction", desc: "Office buildings, retail spaces, and corporate facilities.", status: "Active" },
    { id: 3, title: "Industrial Construction", desc: "Warehouses, factories, and industrial infrastructure.", status: "Active" },
    { id: 4, title: "Infrastructure Projects", desc: "Large scale public and private infrastructure development.", status: "Active" },
    { id: 5, title: "Interior & Fit-Out Services", desc: "Premium interior finishing and corporate fit-outs.", status: "Active" },
    { id: 6, title: "Project Management", desc: "End-to-end project oversight and delivery management.", status: "Active" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#EDEDED] mb-1">Services</h2>
          <p className="text-[#888888] text-sm">Manage the services offered on your website.</p>
        </div>
        <button className="bg-[#EDEDED] text-black hover:bg-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden mt-8">
        <div className="p-3 border-b border-[#1A1A1A] flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0A0A0A]">
          <div className="relative w-full md:w-[400px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
            <input 
              type="text" 
              placeholder="Search services..." 
              className="w-full bg-[#111111] border border-[#333333] rounded-lg py-2 pl-9 pr-4 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors placeholder:text-[#666666]"
            />
          </div>
          <button className="bg-[#111111] border border-[#333333] hover:border-[#444444] text-[#EDEDED] px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap border-collapse">
            <thead className="bg-[#111111] text-[#888888] text-xs font-medium">
              <tr>
                <th className="px-6 py-3 border-b border-[#1A1A1A]">Service Details</th>
                <th className="px-6 py-3 border-b border-[#1A1A1A]">Status</th>
                <th className="px-6 py-3 border-b border-[#1A1A1A] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-[#111111] transition-colors group border-b border-[#1A1A1A] last:border-0">
                  <td className="px-6 py-5">
                    <p className="font-medium text-[#EDEDED] mb-1">{service.title}</p>
                    <p className="text-[#888888] text-xs truncate max-w-lg">{service.desc}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-green-500/10 text-green-500 border border-green-500/20">
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-md hover:bg-[#1A1A1A] text-[#888888] hover:text-[#EDEDED] transition-colors" title="Edit">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-md hover:bg-[#381316] text-[#888888] hover:text-[#E5484D] transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
