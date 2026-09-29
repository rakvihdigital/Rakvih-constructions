import { Save, Lock, User, Globe, Bell } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="space-y-8 animate-fade-in-up max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#EDEDED] mb-1">Settings</h2>
        <p className="text-[#888888] text-sm">Configure your website preferences and admin account.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-[#1A1A1A] text-[#EDEDED] rounded-lg text-sm font-medium transition-colors border border-[#333333]">
            <Globe className="w-4 h-4" /> General
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:bg-[#111111] hover:text-[#EDEDED] rounded-lg text-sm font-medium transition-colors">
            <User className="w-4 h-4" /> Account
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:bg-[#111111] hover:text-[#EDEDED] rounded-lg text-sm font-medium transition-colors">
            <Lock className="w-4 h-4" /> Security
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#888888] hover:bg-[#111111] hover:text-[#EDEDED] rounded-lg text-sm font-medium transition-colors">
            <Bell className="w-4 h-4" /> Notifications
          </button>
        </div>

        {/* Settings Form Area */}
        <div className="lg:col-span-3 space-y-6">
          
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#1A1A1A]">
              <h3 className="font-semibold text-sm text-[#EDEDED]">General Information</h3>
              <p className="text-xs text-[#888888] mt-1">Update your primary website details.</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Company Name</label>
                  <input 
                    type="text" 
                    defaultValue="Rakvih Constructions & Developers" 
                    className="w-full bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Support Email</label>
                  <input 
                    type="email" 
                    defaultValue="contact@rakvih.com" 
                    className="w-full bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Office Address</label>
                  <input 
                    type="text" 
                    defaultValue="Level 12, Horizon Tower, Corporate Road, Mumbai, India" 
                    className="w-full bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Website Meta Description</label>
                  <textarea 
                    rows={3}
                    defaultValue="Building iconic spaces and stronger communities through innovation, integrity and excellence."
                    className="w-full bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#1A1A1A] flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-sm text-[#EDEDED]">Contact Form Routing</h3>
                <p className="text-xs text-[#888888] mt-1">Where inquiries from the website should be sent.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Forwarding Email Address</label>
                <div className="flex gap-3">
                  <input 
                    type="email" 
                    defaultValue="inquiries@rakvih.com" 
                    className="flex-1 bg-[#111111] border border-[#333333] rounded-lg py-2 px-3 text-sm text-[#EDEDED] focus:outline-none focus:border-[#666666] transition-colors"
                  />
                  <button className="bg-[#111111] border border-[#333333] hover:border-[#444444] text-[#EDEDED] px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Test
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button className="px-5 py-2.5 font-medium rounded-lg text-sm text-[#888888] hover:text-[#EDEDED] hover:bg-[#111111] transition-colors">
              Discard
            </button>
            <button className="bg-[#EDEDED] text-black hover:bg-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
