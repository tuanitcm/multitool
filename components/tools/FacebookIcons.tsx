
import React, { useState } from 'react';
import { Copy, Check, RefreshCw, Search, X } from 'lucide-react';

// Dữ liệu Icon rút gọn cho bản MVP (Có thể bổ sung thêm sau)
const ICON_DATA = [
  {
    category: 'Cảm xúc & Nụ cười (Smileys)',
    icons: [
      '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '☺️', '😊', '😇', 
      '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', 'dk', 'wm', '😙', 'bf', '😋', 
      '😛', '😜', '🤪', 'lz', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', 
      '😑', '😶', 'sm', '😒', '🙄', '😬', '🤥', '😌', 'zk', 'zk', '😪', '🤤', 
      '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯'
    ]
  },
  {
    category: 'Cử chỉ & Con người (Gestures)',
    icons: [
      '👋', 'hg', 'hf', '✋', '🖖', 'ok', 'it', 'pt', 'vi', 'mn', 'lo', 'rn', 
      'cl', 'pt', 'pf', 'up', 'mf', 'dn', 'lb', 'db', 'fi', 'fa', 'ef', 'ea', 
      'hl', 'hr', 'hu', 'hd', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', 
      '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '🫀', '🫁', '🦷', 
      '🦴', '👀', '👁️', '👅', '👄'
    ]
  },
  {
    category: 'Trái tim & Tình yêu (Hearts)',
    icons: [
      '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '❣️', '💕', 
      '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', 
      '✡️', '🔯', '🕎', '☯️', 'ORT', '🆔', '⚛️'
    ]
  },
  {
    category: 'Động vật & Thiên nhiên (Nature)',
    icons: [
      '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', 
      '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', 
      '🐤', '🐣', '🐥', 'du', 'go', 'ea', 'ow', 'ba', 'wo', 'bo', 'ho', 'un', 
      'be', 'bu', 'sn', 'la', 'mo', 'bu', 'be', 'an', 'gr', 'cr', 'sp'
    ]
  },
  {
    category: 'Đồ vật & Biểu tượng (Objects)',
    icons: [
      '⚽', '🏀', '🏈', '⚾', 'soft', 'te', 'vo', 'ru', 'fr', 'ic', 'go', 'ar', 
      'fi', 'bo', 'sk', 'sk', 'cu', 'bo', 'go', 'fi', 'ru', 'sk', 'sl', 'ba', 
      '✨', '⭐', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👃', 
      '🔥', '🎈', '🎉', '🎊', '🎋', '🎍', '🎎', '🎏', '🎐', '🎑', '🎀', '🎁'
    ]
  }
];

export const FacebookIcons = () => {
  const [selectedIcons, setSelectedIcons] = useState('');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleIconClick = (icon: string) => {
    setSelectedIcons(prev => prev + icon);
  };

  const handleCopy = () => {
    if (!selectedIcons) return;
    navigator.clipboard.writeText(selectedIcons);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setSelectedIcons('');
  };

  // Filter icons based on category name (simple search for MVP)
  // In future versions, we can add keywords to each icon for better search
  const filteredData = searchQuery 
    ? ICON_DATA.filter(cat => cat.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : ICON_DATA;

  return (
    <div className="space-y-6">
      {/* Input Area (Sticky or Prominent) */}
      <div className="bg-white p-4 rounded-2xl border-2 border-blue-100 shadow-md sticky top-20 z-20">
        <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Icon đã chọn</span>
            <div className="flex gap-2">
                <button 
                    onClick={handleClear}
                    className="text-xs text-rose-500 hover:text-rose-600 flex items-center gap-1 font-medium px-2 py-1 rounded hover:bg-rose-50 transition-colors"
                    title="Xóa tất cả"
                >
                    <X size={14} /> Xóa
                </button>
            </div>
        </div>
        <div className="relative">
            <textarea
                value={selectedIcons}
                readOnly
                placeholder="Click vào icon bên dưới để chọn..."
                className="w-full h-24 bg-slate-50 border border-slate-200 rounded-xl p-4 text-2xl tracking-widest text-slate-900 outline-none resize-none focus:border-blue-400 transition-all"
            ></textarea>
            <button 
                onClick={handleCopy}
                disabled={!selectedIcons}
                className={`absolute bottom-3 right-3 flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-sm ${!selectedIcons ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 active:scale-95'}`}
            >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? 'Đã copy' : 'Copy'}</span>
            </button>
        </div>
      </div>

      {/* Search & Grid */}
      <div className="space-y-6">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
                type="text" 
                placeholder="Tìm danh mục (VD: Tim, Cười...)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-blue-500 outline-none transition-all shadow-sm"
            />
        </div>

        <div className="space-y-8">
            {filteredData.length > 0 ? filteredData.map((group, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                        <h3 className="font-bold text-slate-700 text-sm uppercase">{group.category}</h3>
                    </div>
                    <div className="p-4 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                        {group.icons.map((icon, i) => (
                            <button
                                key={i}
                                onClick={() => handleIconClick(icon)}
                                className="aspect-square flex items-center justify-center text-2xl hover:bg-blue-50 hover:scale-125 transition-all rounded-lg cursor-pointer select-none"
                                title="Click để chọn"
                            >
                                {icon}
                            </button>
                        ))}
                    </div>
                </div>
            )) : (
                <div className="text-center py-10 text-slate-500">
                    Không tìm thấy danh mục phù hợp.
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
