import { Search, Filter, MoreHorizontal, Mail, CheckCircle, Clock } from 'lucide-react';

export default function AdminInquiries() {
  const inquiries = [
    { id: 1, name: "Arjun Mehta", email: "arjun@example.com", phone: "+91 98765 43210", subject: "Commercial Build Quote", message: "Looking for a quote on a 50,000 sq ft commercial building in Mumbai.", date: "Today, 10:30 AM", status: "Unread" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com", phone: "+91 87654 32109", subject: "Residential Project", message: "Interested in your Lotus Villas project. Can we schedule a site visit?", date: "Yesterday, 2:15 PM", status: "Read" },
    { id: 3, name: "Karan Singh", email: "karan@example.com", phone: "+91 76543 21098", subject: "Interior Renovation", message: "Need a complete interior overhaul for my existing office space.", date: "Sep 25, 2026", status: "Replied" },
    { id: 4, name: "Riya Patel", email: "riya@example.com", phone: "+91 65432 10987", subject: "Infrastructure Query", message: "Do you handle public infrastructure contracts?", date: "Sep 24, 2026", status: "Read" },
    { id: 5, name: "Vikram Reddy", email: "vikram@example.com", phone: "+91 54321 09876", subject: "Industrial Setup", message: "We are planning a new manufacturing plant in Gujarat.", date: "Sep 20, 2026", status: "Replied" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#EDEDED] mb-1">Inquiries</h2>
          <p className="text-[#888888] text-sm">Manage and respond to messages from your website contact form.</p>
        </div>
        <button className="bg-[#111111] border border-[#333333] hover:border-[#444444] text-[#EDEDED] px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
          <Mail className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0A0A0A] border border-[#1A1A1A] p-3 rounded-xl">
        <div className="relative w-full md:w-[400px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
          <input 
            type="text" 
            placeholder="Search by name, email or subject..." 
            className="w-full bg-[#111111] border border-[#333333] rounded-lg py-2 pl-9 pr-4 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors placeholder:text-[#666666]"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="bg-[#111111] border border-[#333333] hover:border-[#444444] text-[#EDEDED] px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <select className="bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] w-full md:w-auto">
            <option>Sort by: Newest First</option>
            <option>Sort by: Oldest First</option>
          </select>
        </div>
      </div>

      {/* Inquiries Table */}
      <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap border-collapse">
            <thead className="bg-[#111111] text-[#888888] text-xs font-medium">
              <tr>
                <th className="px-6 py-3 border-b border-[#1A1A1A]">Status</th>
                <th className="px-6 py-3 border-b border-[#1A1A1A]">Contact Info</th>
                <th className="px-6 py-3 border-b border-[#1A1A1A]">Subject & Message</th>
                <th className="px-6 py-3 border-b border-[#1A1A1A]">Date Received</th>
                <th className="px-6 py-3 border-b border-[#1A1A1A] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-[#111111] transition-colors cursor-pointer group border-b border-[#1A1A1A] last:border-0">
                  <td className="px-6 py-5 align-top">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-widest rounded-md font-bold border ${
                      inquiry.status === 'Unread' ? 'bg-gold/10 text-gold border-gold/20' : 
                      inquiry.status === 'Replied' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                      'bg-[#1A1A1A] text-[#888888] border-[#333333]'
                    }`}>
                      {inquiry.status === 'Unread' && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>}
                      {inquiry.status === 'Replied' && <CheckCircle className="w-3 h-3" />}
                      {inquiry.status === 'Read' && <Clock className="w-3 h-3" />}
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 align-top">
                    <p className="font-medium text-[#EDEDED] mb-0.5">{inquiry.name}</p>
                    <p className="text-[#888888] text-xs mb-0.5 hover:text-[#EDEDED] transition-colors">{inquiry.email}</p>
                    <p className="text-[#666666] text-xs">{inquiry.phone}</p>
                  </td>
                  <td className="px-6 py-5 max-w-md whitespace-normal align-top">
                    <p className="font-medium text-[#EDEDED] mb-1">{inquiry.subject}</p>
                    <p className="text-[#888888] text-xs line-clamp-2 leading-relaxed">{inquiry.message}</p>
                  </td>
                  <td className="px-6 py-5 text-[#888888] text-xs align-top">
                    {inquiry.date}
                  </td>
                  <td className="px-6 py-5 text-right align-top">
                    <button className="text-[#666666] hover:text-[#EDEDED] p-2 rounded-md hover:bg-[#1A1A1A] transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-[#1A1A1A] flex items-center justify-between text-xs text-[#888888] bg-[#0A0A0A]">
          <p>Showing <span className="text-[#EDEDED] font-medium">1</span> to <span className="text-[#EDEDED] font-medium">5</span> of <span className="text-[#EDEDED] font-medium">24</span> entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-[#333333] rounded-md hover:bg-[#1A1A1A] hover:text-[#EDEDED] transition-colors disabled:opacity-50">Prev</button>
            <button className="px-3 py-1.5 bg-[#EDEDED] text-black font-medium border border-[#EDEDED] rounded-md">1</button>
            <button className="px-3 py-1.5 border border-[#333333] rounded-md hover:bg-[#1A1A1A] hover:text-[#EDEDED] transition-colors">2</button>
            <button className="px-3 py-1.5 border border-[#333333] rounded-md hover:bg-[#1A1A1A] hover:text-[#EDEDED] transition-colors">3</button>
            <button className="px-3 py-1.5 border border-[#333333] rounded-md hover:bg-[#1A1A1A] hover:text-[#EDEDED] transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
