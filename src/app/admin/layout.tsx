import Link from 'next/link';
import { LayoutDashboard, HardHat, Mail, Settings, LogOut, FileText, ChevronRight, Bell } from 'lucide-react';
import Image from 'next/image';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-[#EDEDED] flex font-sans selection:bg-gold selection:text-black">
      
      {/* Sidebar - Solid and Sleek */}
      <aside className="w-[280px] h-screen bg-[#0A0A0A] border-r border-[#1A1A1A] flex flex-col shrink-0 sticky top-0">
        
        {/* Logo Area */}
        <div className="h-20 px-6 flex items-center border-b border-[#1A1A1A]">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src="/logo-transparent.png" alt="Rakvih Logo" width={130} height={35} className="object-contain" />
          </Link>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 py-6 flex flex-col gap-8 custom-scrollbar overflow-y-auto">
          
          <div className="px-4">
            <p className="px-3 text-[11px] font-semibold text-[#888888] tracking-[0.2em] uppercase mb-3">Overview</p>
            <nav className="space-y-1">
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 bg-[#1A1A1A] text-white rounded-lg transition-colors border border-[#333333]">
                <LayoutDashboard className="w-4 h-4 text-gold" />
                <span className="font-medium text-sm">Dashboard</span>
              </Link>
            </nav>
          </div>

          <div className="px-4">
            <p className="px-3 text-[11px] font-semibold text-[#888888] tracking-[0.2em] uppercase mb-3">Content</p>
            <nav className="space-y-1">
              <Link href="/admin/projects" className="flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:text-[#EDEDED] hover:bg-[#111111] rounded-lg transition-colors">
                <HardHat className="w-4 h-4" />
                <span className="font-medium text-sm">Projects</span>
              </Link>
              <Link href="/admin/services" className="flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:text-[#EDEDED] hover:bg-[#111111] rounded-lg transition-colors">
                <FileText className="w-4 h-4" />
                <span className="font-medium text-sm">Services</span>
              </Link>
              <Link href="/admin/reports" className="flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:text-[#EDEDED] hover:bg-[#111111] rounded-lg transition-colors">
                <LayoutDashboard className="w-4 h-4" />
                <span className="font-medium text-sm">Reports</span>
              </Link>
              <Link href="/admin/inquiries" className="flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:text-[#EDEDED] hover:bg-[#111111] rounded-lg transition-colors justify-between group">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium text-sm">Inquiries</span>
                </div>
                <span className="bg-gold/20 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full border border-gold/30">4 New</span>
              </Link>
            </nav>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#1A1A1A]">
          <nav className="space-y-1">
            <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:text-[#EDEDED] hover:bg-[#111111] rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              <span className="font-medium text-sm">Settings</span>
            </Link>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#E5484D] hover:bg-[#381316] hover:text-[#FFC9C9] rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="font-medium text-sm">Log Out</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen max-w-full overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-20 border-b border-[#1A1A1A] bg-black/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-10">
          <div className="flex items-center text-sm font-medium text-[#888888]">
            <span>Rakvih</span>
            <ChevronRight className="w-4 h-4 mx-2 text-[#444444]" />
            <span className="text-[#EDEDED]">Admin Portal</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-[#888888] hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-gold rounded-full border-2 border-black block"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#333333] to-[#111111] border border-[#333333] flex items-center justify-center text-[#EDEDED] font-bold text-sm cursor-pointer hover:border-gold transition-colors">
              A
            </div>
          </div>
        </header>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-10 bg-[#000000]">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
