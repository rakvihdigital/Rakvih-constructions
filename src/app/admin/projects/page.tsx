import { Plus, Edit3, Trash2, Search, Filter } from 'lucide-react';
import Image from 'next/image';

export default function AdminProjects() {
  const projects = [
    { id: 1, title: "Skyline Tower", category: "Commercial", location: "Mumbai", status: "Active", img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=400&auto=format&fit=crop" },
    { id: 2, title: "Lotus Villas", category: "Residential", location: "Pune", status: "Active", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop" },
    { id: 3, title: "Tech Park Phase II", category: "Infrastructure", location: "Bangalore", status: "Completed", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop" },
    { id: 4, title: "Green Energy Plant", category: "Industrial", location: "Gujarat", status: "Draft", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#EDEDED] mb-1">Projects</h2>
          <p className="text-[#888888] text-sm">Manage the projects displayed on your website.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#111111] border border-[#333333] hover:border-[#444444] text-[#EDEDED] px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="bg-[#EDEDED] text-black hover:bg-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Plus className="w-4 h-4" /> Add Project
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0A0A0A] border border-[#1A1A1A] p-3 rounded-xl">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full bg-[#111111] border border-[#333333] rounded-lg py-2 pl-9 pr-4 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors placeholder:text-[#666666]"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] w-full md:w-auto">
            <option>All Categories</option>
            <option>Commercial</option>
            <option>Residential</option>
            <option>Infrastructure</option>
          </select>
          <select className="bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] w-full md:w-auto">
            <option>Status: All</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden group hover:border-[#333333] transition-colors">
            <div className="relative h-48 w-full border-b border-[#1A1A1A]">
              <Image src={project.img} alt={project.title} fill className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 rounded-lg bg-[#111111]/80 backdrop-blur-md flex items-center justify-center text-[#EDEDED] hover:bg-[#222222] transition-colors border border-[#333333]">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#381316]/80 backdrop-blur-md flex items-center justify-center text-[#E5484D] hover:bg-[#E5484D] hover:text-white transition-colors border border-[#E5484D]/30">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <span className={`absolute bottom-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${
                project.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                project.status === 'Completed' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                'bg-[#333333] text-[#888888] border-[#444444]'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="p-5">
              <p className="text-[#888888] text-[10px] font-bold uppercase tracking-widest mb-1.5">{project.category}</p>
              <h3 className="font-medium text-[#EDEDED] text-base mb-1">{project.title}</h3>
              <p className="text-[#666666] text-xs">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
