import { Users, HardHat, Mail, ArrowUpRight, ArrowDownRight, Clock, CheckCircle, Eye, ArrowRight, ShieldCheck, MoreHorizontal, Filter, Plus } from 'lucide-react';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function AdminDashboard() {
  const stats = [
    { title: "Total Projects", value: <AnimatedCounter end={24} duration={1500} />, icon: HardHat, trend: "+8.2%", up: true },
    { title: "Active Inquiries", value: <AnimatedCounter end={12} duration={1500} />, icon: Mail, trend: "+2.4%", up: true },
    { title: "Site Visitors", value: <AnimatedCounter end={3420} duration={2500} />, icon: Users, trend: "-1.1%", up: false },
  ];

  const recentInquiries = [
    { id: 1, name: "Arjun Mehta", email: "arjun@example.com", subject: "Commercial Build Quote", date: "Today, 10:30 AM", status: "Unread" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com", subject: "Residential Project", date: "Yesterday, 2:15 PM", status: "Read" },
    { id: 3, name: "Karan Singh", email: "karan@example.com", subject: "Interior Renovation", date: "Sep 25", status: "Replied" },
  ];

  const activeProjects = [
    { id: 1, title: "Skyline Tower", type: "Commercial", progress: 75, status: "On Track" },
    { id: 2, title: "Lotus Villas", type: "Residential", progress: 40, status: "Delayed" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#EDEDED] mb-1">Dashboard</h2>
          <p className="text-[#888888] text-sm">Overview of your website performance and operations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#111111] border border-[#333333] hover:border-[#444444] text-[#EDEDED] px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="bg-[#EDEDED] text-black hover:bg-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Plus className="w-4 h-4" /> Create Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-[#0A0A0A] border border-[#1A1A1A] p-5 rounded-xl hover:border-[#333333] transition-colors relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[#888888] text-sm font-medium">{stat.title}</p>
                <Icon className="w-4 h-4 text-[#444444] group-hover:text-gold transition-colors" />
              </div>
              <div className="flex items-baseline gap-3">
                <h3 className="text-3xl font-semibold text-[#EDEDED] tracking-tight">{stat.value}</h3>
                <span className={`flex items-center text-xs font-medium ${stat.up ? 'text-green-400' : 'text-[#888888]'}`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                  {stat.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Inquiries List */}
        <div className="xl:col-span-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl flex flex-col overflow-hidden">
          <div className="px-5 py-4 border-b border-[#1A1A1A] flex justify-between items-center">
            <h3 className="font-semibold text-sm text-[#EDEDED]">Recent Inquiries</h3>
            <button className="text-[#888888] hover:text-[#EDEDED] text-xs font-medium transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#111111] text-[#888888] text-xs font-medium">
                <tr>
                  <th className="px-5 py-3 border-b border-[#1A1A1A]">Client</th>
                  <th className="px-5 py-3 border-b border-[#1A1A1A]">Subject</th>
                  <th className="px-5 py-3 border-b border-[#1A1A1A]">Date</th>
                  <th className="px-5 py-3 border-b border-[#1A1A1A]">Status</th>
                  <th className="px-5 py-3 border-b border-[#1A1A1A] text-right"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-[#111111] transition-colors border-b border-[#1A1A1A] last:border-0">
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-[#EDEDED]">{inquiry.name}</p>
                      <p className="text-[#888888] text-xs">{inquiry.email}</p>
                    </td>
                    <td className="px-5 py-3.5 text-[#EDEDED]">{inquiry.subject}</td>
                    <td className="px-5 py-3.5 text-[#888888]">{inquiry.date}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          inquiry.status === 'Unread' ? 'bg-gold' : 
                          inquiry.status === 'Replied' ? 'bg-green-500' : 
                          'bg-[#444444]'
                        }`}></span>
                        <span className="text-[#888888] text-xs font-medium">{inquiry.status}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-[#888888] hover:text-[#EDEDED] transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Projects Widget */}
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl flex flex-col overflow-hidden">
          <div className="px-5 py-4 border-b border-[#1A1A1A]">
            <h3 className="font-semibold text-sm text-[#EDEDED]">Active Sites</h3>
          </div>
          <div className="p-5 space-y-6 flex-1">
            {activeProjects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <h4 className="font-medium text-[#EDEDED] text-sm">{project.title}</h4>
                    <p className="text-xs text-[#888888]">{project.type}</p>
                  </div>
                  <span className="text-xs font-medium text-[#EDEDED]">{project.progress}%</span>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${project.status === 'Delayed' ? 'bg-[#E5484D]' : 'bg-[#EDEDED]'}`} 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            <div className="pt-2">
              <button className="w-full py-2.5 bg-[#111111] hover:bg-[#1A1A1A] border border-[#333333] rounded-lg text-xs font-medium text-[#EDEDED] transition-colors flex items-center justify-center gap-2">
                Manage Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
