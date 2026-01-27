// Face-only versions of avatars (cropped for circle display)

export function PlannerFace() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="60 40 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head with 3D shading */}
      <circle cx="100" cy="75" r="24" fill="#FFD4A3" />
      
      {/* Nerdy glasses - thick black frames with detail */}
      <rect x="82" y="72" width="16" height="14" rx="5" fill="none" stroke="#1E293B" strokeWidth="3.5" />
      <rect x="102" y="72" width="16" height="14" rx="5" fill="none" stroke="#1E293B" strokeWidth="3.5" />
      <line x1="98" y1="79" x2="102" y2="79" stroke="#1E293B" strokeWidth="3.5" />
      <line x1="82" y1="79" x2="75" y2="77" stroke="#1E293B" strokeWidth="2.5" />
      <line x1="118" y1="79" x2="125" y2="77" stroke="#1E293B" strokeWidth="2.5" />
      {/* Glasses lenses with reflection */}
      <rect x="84" y="74" width="12" height="10" rx="4" fill="#E0F2FE" opacity="0.3" />
      <rect x="104" y="74" width="12" height="10" rx="4" fill="#E0F2FE" opacity="0.3" />
      <path d="M 85 75 L 88 78" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M 105 75 L 108 78" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      
      {/* Eyes behind glasses - focused */}
      <ellipse cx="90" cy="79" rx="3.5" ry="4" fill="white" />
      <ellipse cx="110" cy="79" rx="3.5" ry="4" fill="white" />
      <circle cx="90" cy="80" r="3" fill="#2C5282" />
      <circle cx="110" cy="80" r="3" fill="#2C5282" />
      <circle cx="91" cy="78.5" r="1.5" fill="white" />
      <circle cx="111" cy="78.5" r="1.5" fill="white" />
      <circle cx="89.5" cy="81" r="0.8" fill="white" opacity="0.7" />
      <circle cx="109.5" cy="81" r="0.8" fill="white" opacity="0.7" />
      
      {/* Hair - neat, side parted with detail */}
      <path
        d="M 76 65 Q 76 50 85 45 Q 95 42 100 42 Q 105 42 115 45 Q 124 50 124 65 L 122 70 Q 118 68 112 68 Q 105 68 100 68 Q 95 68 88 68 Q 82 68 78 70 Z"
        fill="#2C5282"
      />
      {/* Hair strands and texture */}
      <path d="M 95 45 Q 100 43 105 45" stroke="#1E3A8A" strokeWidth="1.5" />
      <path d="M 88 52 Q 93 50 98 52" stroke="#1E40AF" strokeWidth="1" opacity="0.5" />
      <path d="M 102 52 Q 107 50 112 52" stroke="#1E40AF" strokeWidth="1" opacity="0.5" />
      
      {/* Eyebrows - focused with detail */}
      <path d="M 83 70 L 95 68" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M 105 68 L 117 70" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      
      {/* Nose */}
      <path d="M 100 77 L 100 86" stroke="#E5BE99" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <ellipse cx="98" cy="87" rx="1.5" ry="2" fill="#E5BE99" opacity="0.3" />
      <ellipse cx="102" cy="87" rx="1.5" ry="2" fill="#E5BE99" opacity="0.3" />
      
      {/* Smile - satisfied and confident */}
      <path d="M 88 90 Q 100 96 112 90" stroke="#D97706" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 88 90 Q 100 94 112 90" fill="#FDE68A" opacity="0.2" />
    </svg>
  );
}

export function CoachFace() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="60 30 80 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head with 3D shading */}
      <circle cx="100" cy="70" r="25" fill="#F4A582" />
      
      {/* Hair - long, flowing, lovely */}
      <path
        d="M 76 60 Q 74 50 79 44 Q 86 38 93 40 Q 100 36 107 40 Q 114 38 121 44 Q 126 50 124 60 Q 124 63 122 66 L 118 68 Q 114 68 108 68 Q 105 68 100 69 Q 95 68 92 68 Q 86 68 82 68 L 78 66 Q 76 63 76 60 Z"
        fill="#6D4C41"
      />
      
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
      
      {/* Eyes - warm, caring */}
      <ellipse cx="88" cy="72" rx="5" ry="6" fill="white" />
      <ellipse cx="112" cy="72" rx="5" ry="6" fill="white" />
      <ellipse cx="88" cy="73" rx="4" ry="5" fill="#4A2C2A" />
      <ellipse cx="112" cy="73" rx="4" ry="5" fill="#4A2C2A" />
      
      {/* Eye sparkles */}
      <circle cx="89.5" cy="71" r="2" fill="white" />
      <circle cx="113.5" cy="71" r="2" fill="white" />
      <circle cx="87" cy="74" r="1.2" fill="white" opacity="0.8" />
      <circle cx="111" cy="74" r="1.2" fill="white" opacity="0.8" />
      
      {/* Eyelashes */}
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
    </svg>
  );
}

export function SkepticFace() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="60 35 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head - with 3D shading */}
      <ellipse cx="100" cy="72" rx="26" ry="28" fill="#D4A574" />
      
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
      
      {/* Bushy eyebrows - very expressive with detail */}
      <path d="M 76 68 L 92 66" stroke="#6B7280" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 108 66 L 124 68" stroke="#6B7280" strokeWidth="3.5" strokeLinecap="round" />
      
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
      
      {/* Mustache - thick, grey, distinguished */}
      <path d="M 86 87 Q 93 90 100 89 Q 107 90 114 87" fill="#8B95A8" />
      <path d="M 86 87 Q 90 88 94 88.5" stroke="#7C8894" strokeWidth="3" strokeLinecap="round" />
      <path d="M 100 89 Q 104 89 108 88.5 Q 110 88 114 87" stroke="#7C8894" strokeWidth="3" strokeLinecap="round" />
      {/* Mustache curls at ends */}
      <path d="M 85 87 Q 83 88 82 86" stroke="#8B95A8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 115 87 Q 117 88 118 86" stroke="#8B95A8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      
      {/* Stern frown */}
      <path d="M 90 94 Q 100 92 110 94" stroke="#8B6F47" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M 90 94.5 Q 100 93 110 94.5" fill="#6B5542" opacity="0.3" />
      
      {/* Full beard - grey, bushy */}
      <ellipse cx="100" cy="102" rx="24" ry="16" fill="#9CA3AF" />
      <ellipse cx="82" cy="97" rx="8" ry="10" fill="#9CA3AF" />
      <ellipse cx="118" cy="97" rx="8" ry="10" fill="#9CA3AF" />
      
      {/* Reading glasses on nose */}
      <ellipse cx="87" cy="75" rx="8" ry="9" fill="none" stroke="#475569" strokeWidth="2" />
      <ellipse cx="113" cy="75" rx="8" ry="9" fill="none" stroke="#475569" strokeWidth="2" />
      <rect x="95" y="74" width="10" height="2" fill="#475569" />
      <line x1="79" y1="74" x2="74" y2="72" stroke="#475569" strokeWidth="1.5" />
      <line x1="121" y1="74" x2="126" y2="72" stroke="#475569" strokeWidth="1.5" />
      {/* Glasses reflection */}
      <path d="M 84 72 L 86 75" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 110 72 L 112 75" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
