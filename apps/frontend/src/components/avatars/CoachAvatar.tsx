export function CoachAvatar() {
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
      <circle cx="100" cy="120" r="95" fill="url(#coachBg)" opacity="0.4" />
      
      {/* Ground/Platform - circular land with 3D effect */}
      <ellipse cx="100" cy="210" rx="70" ry="12" fill="#F43F5E" opacity="0.2" />
      <ellipse cx="100" cy="210" rx="65" ry="10" fill="#FB7185" opacity="0.3" />
      <ellipse cx="100" cy="210" rx="60" ry="8" fill="#FCA5A5" opacity="0.25" />
      
      {/* Shadow under character */}
      <ellipse cx="100" cy="208" rx="35" ry="6" fill="#000" opacity="0.12" />
      
      {/* Shoes - cute sneakers with detail */}
      <ellipse cx="85" cy="208" rx="14" ry="7" fill="#EC4899" />
      <ellipse cx="115" cy="208" rx="14" ry="7" fill="#EC4899" />
      <ellipse cx="85" cy="207" rx="11" ry="5" fill="white" opacity="0.8" />
      <ellipse cx="115" cy="207" rx="11" ry="5" fill="white" opacity="0.8" />
      {/* Shoe details */}
      <ellipse cx="85" cy="206" rx="6" ry="3" fill="#F472B6" opacity="0.4" />
      <ellipse cx="115" cy="206" rx="6" ry="3" fill="#F472B6" opacity="0.4" />
      <line x1="83" y1="207" x2="87" y2="207" stroke="#EC4899" strokeWidth="1" />
      <line x1="113" y1="207" x2="117" y2="207" stroke="#EC4899" strokeWidth="1" />
      
      {/* Legs - casual pants with detail */}
      <rect x="82" y="165" width="16" height="45" fill="#FDA4AF" rx="3" />
      <rect x="102" y="165" width="16" height="45" fill="#FDA4AF" rx="3" />
      {/* Leg shading for 3D */}
      <rect x="83" y="165" width="6" height="45" fill="#FBB6BD" opacity="0.3" rx="2" />
      <rect x="103" y="165" width="6" height="45" fill="#FBB6BD" opacity="0.3" rx="2" />
      
      {/* Body - dress with heart pattern and 3D shading */}
      <path
        d="M 75 110 L 70 165 L 85 168 L 85 115 L 100 108 L 115 115 L 115 168 L 130 165 L 125 110 Q 115 105 100 105 Q 85 105 75 110 Z"
        fill="#F43F5E"
      />
      
      {/* Dress details - lighter overlay with 3D effect */}
      <path
        d="M 78 120 Q 100 125 122 120 L 125 145 Q 100 150 75 145 Z"
        fill="#FB7185"
        opacity="0.4"
      />
      {/* Dress shading */}
      <path
        d="M 75 110 L 70 135 L 78 138 L 85 115"
        fill="#E11D48"
        opacity="0.3"
      />
      <path
        d="M 125 110 L 130 135 L 122 138 L 115 115"
        fill="#FB7185"
        opacity="0.3"
      />
      
      {/* Small hearts on dress with more detail */}
      <path d="M 85 125 C 85 125 83 123 83 122 C 83 121 84 120 85 120 C 86 120 86.5 121 87 122 C 87.5 121 88 120 89 120 C 90 120 91 121 91 122 C 91 123 89 125 87 125 L 85 125 Z" fill="white" opacity="0.8" />
      <path d="M 110 135 C 110 135 108 133 108 132 C 108 131 109 130 110 130 C 111 130 111.5 131 112 132 C 112.5 131 113 130 114 130 C 115 130 116 131 116 132 C 116 133 114 135 112 135 L 110 135 Z" fill="white" opacity="0.8" />
      <path d="M 95 145 C 95 145 93.5 143.5 93.5 142.5 C 93.5 141.5 94 141 94.5 141 C 95 141 95.5 141.5 96 142.5 C 96.5 141.5 97 141 97.5 141 C 98 141 98.5 141.5 98.5 142.5 C 98.5 143.5 97 145 95 145 Z" fill="white" opacity="0.7" />
      
      {/* Arms - welcoming, open with sleeve details */}
      <path d="M 75 115 L 58 130 L 50 145" stroke="#F43F5E" strokeWidth="14" strokeLinecap="round" />
      <path d="M 50 138 L 50 145" stroke="#F4A582" strokeWidth="11" strokeLinecap="round" />
      
      <path d="M 125 115 L 142 130 L 150 145" stroke="#F43F5E" strokeWidth="14" strokeLinecap="round" />
      <path d="M 150 138 L 150 145" stroke="#F4A582" strokeWidth="11" strokeLinecap="round" />
      
      {/* Hands - open palms with detail */}
      <ellipse cx="50" cy="147" rx="9" ry="10" fill="#F4A582" />
      <ellipse cx="150" cy="147" rx="9" ry="10" fill="#F4A582" />
      
      {/* Fingers with more detail */}
      <ellipse cx="48" cy="153" rx="2.5" ry="5" fill="#F4A582" />
      <ellipse cx="52" cy="153" rx="2.5" ry="5" fill="#F4A582" />
      <ellipse cx="50" cy="155" rx="2" ry="4" fill="#F4A582" />
      <ellipse cx="148" cy="153" rx="2.5" ry="5" fill="#F4A582" />
      <ellipse cx="152" cy="153" rx="2.5" ry="5" fill="#F4A582" />
      <ellipse cx="150" cy="155" rx="2" ry="4" fill="#F4A582" />
      
      {/* Nail polish */}
      <ellipse cx="48" cy="155" rx="1.5" ry="2" fill="#EC4899" opacity="0.6" />
      <ellipse cx="52" cy="155" rx="1.5" ry="2" fill="#EC4899" opacity="0.6" />
      <ellipse cx="148" cy="155" rx="1.5" ry="2" fill="#EC4899" opacity="0.6" />
      <ellipse cx="152" cy="155" rx="1.5" ry="2" fill="#EC4899" opacity="0.6" />
      
      {/* Bracelet - memory charm with detail */}
      <ellipse cx="150" cy="145" rx="7" ry="3.5" fill="none" stroke="#FDE047" strokeWidth="2.5" />
      <circle cx="152" cy="145" r="2.5" fill="#FDE047" />
      <circle cx="152" cy="145" r="1.5" fill="#FBBF24" />
      <circle cx="148" cy="144" r="1.5" fill="#FDE047" opacity="0.8" />
      
      {/* Neck with shading */}
      <rect x="92" y="98" width="16" height="12" fill="#F4A582" />
      <rect x="93" y="98" width="6" height="12" fill="#E89B7E" opacity="0.2" />
      
      {/* Necklace with heart pendant - more detailed */}
      <ellipse cx="100" cy="105" rx="16" ry="3" stroke="#FDE047" strokeWidth="2" fill="none" />
      <path d="M 100 112 C 100 112 97 110 97 108 C 97 107 98 106 99 106 C 99.5 106 100 107 100 108 C 100 107 100.5 106 101 106 C 102 106 103 107 103 108 C 103 110 100 112 100 112 Z" fill="#FDE047" stroke="#FBBF24" strokeWidth="0.5" />
      <circle cx="100" cy="108" r="1" fill="#FBBF24" opacity="0.6" />
      
      {/* Head with 3D shading */}
      <circle cx="100" cy="70" r="25" fill="#F4A582" />
      
      {/* Hair - long, flowing, lovely */}
      <path
        d="M 76 60 Q 74 50 79 44 Q 86 38 93 40 Q 100 36 107 40 Q 114 38 121 44 Q 126 50 124 60 Q 124 63 122 66 L 118 68 Q 114 68 108 68 Q 105 68 100 69 Q 95 68 92 68 Q 86 68 82 68 L 78 66 Q 76 63 76 60 Z"
        fill="#6D4C41"
      />
      
      {/* Hair strands - detailed with highlights */}
      <path d="M 86 42 Q 91 38 96 40" stroke="#5D4037" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 104 40 Q 109 38 114 42" stroke="#5D4037" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 82 50 Q 87 48 92 50" stroke="#5D4037" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 108 50 Q 113 48 118 50" stroke="#5D4037" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Hair highlights */}
      <path d="M 90 46 Q 95 44 100 46" stroke="#8D6E63" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M 85 55 Q 90 53 95 55" stroke="#8D6E63" strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Long hair on sides - flowing down */}
      <path d="M 80 74 Q 74 85 72 100 Q 70 110 72 118" stroke="#6D4C41" strokeWidth="13" strokeLinecap="round" />
      <path d="M 120 74 Q 126 85 128 100 Q 130 110 128 118" stroke="#6D4C41" strokeWidth="13" strokeLinecap="round" />
      {/* Side hair highlights */}
      <path d="M 78 80 Q 73 90 71 100" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M 122 80 Q 127 90 129 100" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      
      {/* Hair accessory - bow with detail */}
      <path d="M 86 52 L 81 48 L 86 44 L 89 48 Z" fill="#F43F5E" />
      <path d="M 89 48 L 94 44 L 99 48 L 94 52 Z" fill="#FB7185" />
      <circle cx="89" cy="48" r="3.5" fill="#EC4899" />
      <circle cx="89" cy="48" r="2" fill="#F472B6" opacity="0.6" />
      {/* Bow ribbons */}
      <path d="M 81 48 Q 78 52 77 56" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" />
      <path d="M 99 48 Q 102 52 103 56" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" />
      
      {/* Eyebrows - gentle and detailed */}
      <path d="M 83 66 L 93 65" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 107 65 L 117 66" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Eyebrow texture */}
      <path d="M 85 66 L 88 65.5" stroke="#4A2C2A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M 112 65.5 L 115 66" stroke="#4A2C2A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      
      {/* Eyes - warm, caring */}
      <ellipse cx="88" cy="72" rx="5" ry="6" fill="white" />
      <ellipse cx="112" cy="72" rx="5" ry="6" fill="white" />
      <ellipse cx="88" cy="73" rx="4" ry="5" fill="#4A2C2A" />
      <ellipse cx="112" cy="73" rx="4" ry="5" fill="#4A2C2A" />
      
      {/* Eye sparkles - more detailed */}
      <circle cx="89.5" cy="71" r="2" fill="white" />
      <circle cx="113.5" cy="71" r="2" fill="white" />
      <circle cx="87" cy="74" r="1.2" fill="white" opacity="0.8" />
      <circle cx="111" cy="74" r="1.2" fill="white" opacity="0.8" />
      <circle cx="90" cy="73" r="0.8" fill="white" opacity="0.6" />
      <circle cx="114" cy="73" r="0.8" fill="white" opacity="0.6" />
      
      {/* Eyelashes - longer and more detailed */}
      <path d="M 84 70 L 82 67" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 86 69 L 85 66" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 88 69 L 88 65.5" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 90 69 L 91 66" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 92 70 L 93 67" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 108 70 L 107 67" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 110 69 L 109 66" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 112 69 L 112 65.5" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 114 69 L 115 66" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 116 70 L 118 67" stroke="#4A2C2A" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Rosy cheeks - warm with detail */}
      <ellipse cx="78" cy="78" rx="7" ry="6" fill="#FF9BAA" opacity="0.6" />
      <ellipse cx="122" cy="78" rx="7" ry="6" fill="#FF9BAA" opacity="0.6" />
      <ellipse cx="79" cy="77" rx="4" ry="3" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="121" cy="77" rx="4" ry="3" fill="#FFB6C1" opacity="0.4" />
      
      {/* Warm smile with detail */}
      <path d="M 87 84 Q 100 91 113 84" stroke="#D97777" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 87 84 Q 100 89 113 84" fill="#FFB6C1" opacity="0.4" />
      {/* Smile dimples */}
      <circle cx="85" cy="83" r="2" fill="#FF9BAA" opacity="0.3" />
      <circle cx="115" cy="83" r="2" fill="#FF9BAA" opacity="0.3" />
      
      <defs>
        <linearGradient id="coachBg" x1="0" y1="0" x2="200" y2="240">
          <stop offset="0%" stopColor="#FECDD3" />
          <stop offset="100%" stopColor="#FFF1F2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
