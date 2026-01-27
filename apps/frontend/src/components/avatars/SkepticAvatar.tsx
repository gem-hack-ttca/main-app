export function SkepticAvatar() {
  return (
    <svg
      width="200"
      height="240"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Background gradient */}
      <circle cx="100" cy="120" r="95" fill="url(#skepticBg)" opacity="0.3" />
      
      {/* Ground/Platform - circular land with 3D effect */}
      <ellipse cx="100" cy="210" rx="70" ry="12" fill="#1E293B" opacity="0.15" />
      <ellipse cx="100" cy="210" rx="65" ry="10" fill="#475569" opacity="0.25" />
      <ellipse cx="100" cy="210" rx="60" ry="8" fill="#64748B" opacity="0.35" />
      
      {/* Shadow under character */}
      <ellipse cx="100" cy="208" rx="35" ry="6" fill="#000" opacity="0.15" />
      
      {/* Shoes - old leather with details */}
      <ellipse cx="85" cy="208" rx="14" ry="7" fill="#2C1810" />
      <ellipse cx="115" cy="208" rx="14" ry="7" fill="#2C1810" />
      <ellipse cx="85" cy="207" rx="11" ry="5" fill="#3E2723" />
      <ellipse cx="115" cy="207" rx="11" ry="5" fill="#3E2723" />
      {/* Shoe laces */}
      <line x1="83" y1="206" x2="87" y2="206" stroke="#1C1208" strokeWidth="0.8" />
      <line x1="113" y1="206" x2="117" y2="206" stroke="#1C1208" strokeWidth="0.8" />
      
      {/* Legs - grey trousers with creases */}
      <rect x="82" y="165" width="16" height="45" fill="#475569" rx="3" />
      <rect x="102" y="165" width="16" height="45" fill="#475569" rx="3" />
      {/* Trouser creases for detail */}
      <line x1="90" y1="170" x2="90" y2="205" stroke="#334155" strokeWidth="1" opacity="0.5" />
      <line x1="110" y1="170" x2="110" y2="205" stroke="#334155" strokeWidth="1" opacity="0.5" />
      
      {/* Body - cardigan/sweater vest with 3D shading */}
      <path
        d="M 75 110 L 72 165 L 88 168 L 88 115 L 100 108 L 112 115 L 112 168 L 128 165 L 125 110 Q 115 105 100 105 Q 85 105 75 110 Z"
        fill="#334155"
      />
      {/* Vest shading for 3D effect */}
      <path
        d="M 75 110 L 72 130 L 80 132 L 88 115"
        fill="#1E293B"
        opacity="0.4"
      />
      <path
        d="M 125 110 L 128 130 L 120 132 L 112 115"
        fill="#475569"
        opacity="0.3"
      />
      
      {/* Vest buttons */}
      <circle cx="100" cy="125" r="2.5" fill="#64748B" />
      <circle cx="100" cy="135" r="2.5" fill="#64748B" />
      <circle cx="100" cy="145" r="2.5" fill="#64748B" />
      {/* Button holes for detail */}
      <circle cx="100" cy="125" r="1" fill="#475569" />
      <circle cx="100" cy="135" r="1" fill="#475569" />
      <circle cx="100" cy="145" r="1" fill="#475569" />
      
      {/* Vest pocket */}
      <rect x="84" y="128" width="10" height="12" fill="#1E293B" opacity="0.4" rx="1" />
      <line x1="86" y1="130" x2="92" y2="130" stroke="#475569" strokeWidth="0.8" />
      
      {/* Right arm - sleeve part */}
      <path d="M 125 118 L 140 125 L 148 135" stroke="#334155" strokeWidth="13" strokeLinecap="round" />
      {/* Right arm - exposed hand/wrist */}
      <path d="M 148 135 L 150 145" stroke="#C9A97E" strokeWidth="11" strokeLinecap="round" />
      
      {/* Left arm - sleeve part */}
      <path d="M 75 118 L 60 125 L 52 135" stroke="#334155" strokeWidth="13" strokeLinecap="round" />
      {/* Left arm - exposed hand/wrist */}
      <path d="M 52 135 L 50 145" stroke="#C9A97E" strokeWidth="11" strokeLinecap="round" />
      
      {/* Hands */}
      <ellipse cx="150" cy="147" rx="9" ry="8" fill="#D4A574" />
      <ellipse cx="50" cy="147" rx="9" ry="8" fill="#D4A574" />
      {/* Fingers for detail */}
      <ellipse cx="153" cy="150" rx="2.5" ry="4" fill="#D4A574" />
      <ellipse cx="147" cy="150" rx="2.5" ry="4" fill="#D4A574" />
      <ellipse cx="53" cy="150" rx="2.5" ry="4" fill="#D4A574" />
      <ellipse cx="47" cy="150" rx="2.5" ry="4" fill="#D4A574" />
      
      {/* Watch on wrist - old-fashioned with detail */}
      <rect x="145" y="144" width="10" height="6" fill="#1E293B" rx="1" />
      <circle cx="150" cy="147" r="4" fill="#E5E7EB" stroke="#1E293B" strokeWidth="1" />
      <circle cx="150" cy="147" r="3" fill="#F4F4F5" />
      <line x1="150" y1="147" x2="150" y2="145" stroke="#1E293B" strokeWidth="0.5" />
      <line x1="150" y1="147" x2="151.5" y2="148" stroke="#1E293B" strokeWidth="0.5" />
      
      {/* Book/newspaper in left hand */}
      <rect x="42" y="148" width="14" height="20" rx="1" fill="#E5E7EB" stroke="#94A3B8" strokeWidth="1" />
      <line x1="45" y1="152" x2="53" y2="152" stroke="#475569" strokeWidth="0.8" />
      <line x1="45" y1="156" x2="53" y2="156" stroke="#475569" strokeWidth="0.8" />
      <line x1="45" y1="160" x2="50" y2="160" stroke="#475569" strokeWidth="0.8" />
      <line x1="45" y1="164" x2="52" y2="164" stroke="#475569" strokeWidth="0.8" />
      
      {/* Neck with shadow */}
      <rect x="92" y="98" width="16" height="12" fill="#D4A574" />
      <rect x="93" y="98" width="6" height="12" fill="#C9A97E" opacity="0.3" />
      
      {/* Shirt collar visible with detail */}
      <path d="M 88 108 L 95 116" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
      <path d="M 112 108 L 105 116" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
      <path d="M 90 109 L 95 115" stroke="#F4F4F5" strokeWidth="2" strokeLinecap="round" />
      <path d="M 110 109 L 105 115" stroke="#F4F4F5" strokeWidth="2" strokeLinecap="round" />
      
      {/* Head - with 3D shading */}
      <ellipse cx="100" cy="72" rx="26" ry="28" fill="#D4A574" />
      
      {/* Head shadow for depth */}
      <ellipse cx="90" cy="75" rx="8" ry="15" fill="#C9A97E" opacity="0.3" />
      
      {/* Hair - realistic grey hair with natural volume and shape */}
      {/* Main hair mass - sides and back */}
      <path
        d="M 75 68 Q 74 62 75 56 Q 76 50 78 46 L 80 48 Q 78 52 78 58 L 75 68 Z"
        fill="#9CA3AF"
      />
      <path
        d="M 125 68 Q 126 62 125 56 Q 124 50 122 46 L 120 48 Q 122 52 122 58 L 125 68 Z"
        fill="#9CA3AF"
      />
      {/* Top of head - balding crown */}
      <ellipse cx="100" cy="52" rx="18" ry="10" fill="#9CA3AF" />
      {/* Balding area on top */}
      <ellipse cx="100" cy="50" rx="12" ry="7" fill="#D4A574" opacity="0.7" />
      
      {/* Hair texture and individual strands for realism */}
      <path d="M 76 65 Q 75 60 76 55" stroke="#6B7280" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 79 66 Q 78 61 79 56" stroke="#6B7280" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M 82 67 Q 81 62 82 57" stroke="#6B7280" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M 124 65 Q 125 60 124 55" stroke="#6B7280" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 121 66 Q 122 61 121 56" stroke="#6B7280" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M 118 67 Q 119 62 118 57" stroke="#6B7280" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      
      {/* Grey hair highlights */}
      <path d="M 77 64 Q 76 59 77 54" stroke="#D1D5DB" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 123 64 Q 124 59 123 54" stroke="#D1D5DB" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
      
      {/* Hair shadow under */}
      <ellipse cx="78" cy="68" rx="5" ry="2" fill="#4B5563" opacity="0.2" />
      <ellipse cx="122" cy="68" rx="5" ry="2" fill="#4B5563" opacity="0.2" />
      
      {/* Wrinkles - age lines with more detail */}
      <path d="M 76 68 Q 78 70 80 68" stroke="#B8936E" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 76 75 Q 80 77 84 75" stroke="#B8936E" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 120 68 Q 122 70 124 68" stroke="#B8936E" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 116 75 Q 120 77 124 75" stroke="#B8936E" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 78 85 Q 82 87 86 85" stroke="#B8936E" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 114 85 Q 118 87 122 85" stroke="#B8936E" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Forehead wrinkles */}
      <path d="M 85 58 Q 100 56 115 58" stroke="#B8936E" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 87 61 Q 100 59 113 61" stroke="#B8936E" strokeWidth="0.8" fill="none" opacity="0.4" />
      
      {/* Bushy eyebrows - very expressive with detail */}
      <path d="M 76 68 L 92 66" stroke="#6B7280" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 108 66 L 124 68" stroke="#6B7280" strokeWidth="3.5" strokeLinecap="round" />
      {/* Eyebrow texture */}
      <path d="M 78 68 L 82 67" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 118 67 L 122 68" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      
      {/* One raised eyebrow - skeptical */}
      <path d="M 76 68 L 78 64 L 83 63" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Eyes - narrow, critical with detail */}
      <ellipse cx="87" cy="75" rx="5" ry="4" fill="white" />
      <ellipse cx="113" cy="75" rx="5" ry="4" fill="white" />
      <ellipse cx="87" cy="76" rx="4" ry="3" fill="#2D3748" />
      <ellipse cx="113" cy="76" rx="4" ry="3" fill="#2D3748" />
      <circle cx="88" cy="75" r="1.5" fill="white" opacity="0.8" />
      <circle cx="114" cy="75" r="1.5" fill="white" opacity="0.8" />
      
      {/* Bags under eyes */}
      <path d="M 82 79 Q 87 82 92 79" stroke="#B8936E" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M 108 79 Q 113 82 118 79" stroke="#B8936E" strokeWidth="1.2" fill="none" opacity="0.5" />
      
      {/* Nose - prominent and detailed */}
      <path d="M 100 73 L 100 85" stroke="#B8936E" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <ellipse cx="100" cy="85" rx="4" ry="3" fill="#C9A97E" opacity="0.3" />
      <ellipse cx="97" cy="85.5" rx="2" ry="2.5" fill="#B8936E" opacity="0.4" />
      <ellipse cx="103" cy="85.5" rx="2" ry="2.5" fill="#B8936E" opacity="0.4" />
      {/* Nose bridge detail */}
      <path d="M 98 76 L 98 83" stroke="#B8936E" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M 102 76 L 102 83" stroke="#B8936E" strokeWidth="0.8" fill="none" opacity="0.3" />
      
      {/* Mustache - thick, grey, distinguished - ABOVE the mouth */}
      <path d="M 86 87 Q 93 90 100 89 Q 107 90 114 87" fill="#8B95A8" />
      <path d="M 86 87 Q 90 88 94 88.5" stroke="#7C8894" strokeWidth="3" strokeLinecap="round" />
      <path d="M 100 89 Q 104 89 108 88.5 Q 110 88 114 87" stroke="#7C8894" strokeWidth="3" strokeLinecap="round" />
      {/* Mustache curls at ends */}
      <path d="M 85 87 Q 83 88 82 86" stroke="#8B95A8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 115 87 Q 117 88 118 86" stroke="#8B95A8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Mustache texture and highlights */}
      <path d="M 90 88 Q 95 89 100 88.5" stroke="#A0AEC0" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 100 88.5 Q 105 89 110 88" stroke="#A0AEC0" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 88 87.5 Q 92 88.5 96 88" stroke="#6B7280" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M 104 88 Q 108 88.5 112 87.5" stroke="#6B7280" strokeWidth="0.8" fill="none" opacity="0.5" />
      
      {/* Stern frown - mouth clearly visible BELOW mustache */}
      <path d="M 90 94 Q 100 92 110 94" stroke="#8B6F47" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M 90 94.5 Q 100 93 110 94.5" fill="#6B5542" opacity="0.3" />
      {/* Lip detail */}
      <path d="M 95 94 Q 100 93 105 94" stroke="#704020" strokeWidth="1" fill="none" opacity="0.4" />
      
      {/* Full beard - grey, bushy, intelligent look with LOTS of detail */}
      {/* Realistic beard - natural rounded shape */}
      {/* Main beard volume - soft rounded bottom */}
      <ellipse cx="100" cy="102" rx="24" ry="16" fill="#9CA3AF" />
      {/* Beard connection to face sides */}
      <ellipse cx="82" cy="97" rx="8" ry="10" fill="#9CA3AF" />
      <ellipse cx="118" cy="97" rx="8" ry="10" fill="#9CA3AF" />
      {/* Beard shadow/depth layer */}
      <ellipse cx="100" cy="104" rx="20" ry="13" fill="#6B7280" opacity="0.3" />
      
      {/* Natural beard texture with flowing strands */}
      <path d="M 80 95 Q 82 100 83 105" stroke="#6B7280" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 84 95 Q 86 101 87 107" stroke="#6B7280" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M 88 96 Q 90 102 91 109" stroke="#6B7280" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 92 96 Q 94 103 95 111" stroke="#6B7280" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M 96 97 Q 98 104 99 112" stroke="#6B7280" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M 100 97 Q 100 105 100 113" stroke="#6B7280" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M 104 97 Q 102 104 101 112" stroke="#6B7280" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M 108 96 Q 106 103 105 111" stroke="#6B7280" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M 112 96 Q 110 102 109 109" stroke="#6B7280" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 116 95 Q 114 101 113 107" stroke="#6B7280" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M 120 95 Q 118 100 117 105" stroke="#6B7280" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      
      {/* Grey beard highlights - natural shine */}
      <path d="M 82 98 Q 84 104 85 109" stroke="#D1D5DB" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 90 98 Q 92 105 93 111" stroke="#D1D5DB" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 98 98 Q 98 106 98 112" stroke="#E5E7EB" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M 110 98 Q 108 105 107 111" stroke="#D1D5DB" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 118 98 Q 116 104 115 109" stroke="#D1D5DB" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
      
      {/* Beard edge detail - natural stray hairs */}
      <path d="M 77 100 Q 75 103 74 106" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M 123 100 Q 125 103 126 106" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M 86 112 Q 84 114 83 116" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M 94 114 Q 93 116 92 118" stroke="#9CA3AF" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M 106 114 Q 107 116 108 118" stroke="#9CA3AF" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M 114 112 Q 116 114 117 116" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      
      {/* Reading glasses on nose */}
      <ellipse cx="87" cy="75" rx="8" ry="9" fill="none" stroke="#475569" strokeWidth="2" />
      <ellipse cx="113" cy="75" rx="8" ry="9" fill="none" stroke="#475569" strokeWidth="2" />
      <rect x="95" y="74" width="10" height="2" fill="#475569" />
      <line x1="79" y1="74" x2="74" y2="72" stroke="#475569" strokeWidth="1.5" />
      <line x1="121" y1="74" x2="126" y2="72" stroke="#475569" strokeWidth="1.5" />
      {/* Glasses reflection */}
      <path d="M 84 72 L 86 75" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 110 72 L 112 75" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      
      <defs>
        <linearGradient id="skepticBg" x1="0" y1="0" x2="200" y2="240">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
