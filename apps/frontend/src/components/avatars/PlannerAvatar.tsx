export function PlannerAvatar() {
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
      <circle cx="100" cy="120" r="95" fill="url(#plannerBg)" opacity="0.3" />
      
      {/* Ground/Platform - circular land with 3D effect */}
      <ellipse cx="100" cy="210" rx="70" ry="12" fill="#1E3A8A" opacity="0.2" />
      <ellipse cx="100" cy="210" rx="65" ry="10" fill="#2C5282" opacity="0.3" />
      <ellipse cx="100" cy="210" rx="60" ry="8" fill="#3B82F6" opacity="0.35" />
      
      {/* Shadow under character */}
      <ellipse cx="100" cy="208" rx="35" ry="6" fill="#000" opacity="0.15" />
      
      {/* Shoes - polished professional with detail */}
      <ellipse cx="85" cy="208" rx="13" ry="7" fill="#0C1A3A" />
      <ellipse cx="115" cy="208" rx="13" ry="7" fill="#0C1A3A" />
      <ellipse cx="85" cy="207" rx="10" ry="5" fill="#1E3A8A" />
      <ellipse cx="115" cy="207" rx="10" ry="5" fill="#1E3A8A" />
      {/* Shoe shine */}
      <ellipse cx="87" cy="206" rx="4" ry="2" fill="#3B82F6" opacity="0.4" />
      <ellipse cx="117" cy="206" rx="4" ry="2" fill="#3B82F6" opacity="0.4" />
      
      {/* Legs - dress pants with creases */}
      <rect x="82" y="165" width="16" height="45" fill="#2563EB" rx="3" />
      <rect x="102" y="165" width="16" height="45" fill="#2563EB" rx="3" />
      {/* Trouser creases for detail */}
      <line x1="90" y1="170" x2="90" y2="205" stroke="#1D4ED8" strokeWidth="1" opacity="0.5" />
      <line x1="110" y1="170" x2="110" y2="205" stroke="#1D4ED8" strokeWidth="1" opacity="0.5" />
      {/* 3D shading on pants */}
      <rect x="83" y="165" width="5" height="45" fill="#1E40AF" opacity="0.3" rx="2" />
      <rect x="103" y="165" width="5" height="45" fill="#1E40AF" opacity="0.3" rx="2" />
      
      {/* Body - button-up shirt with tie and 3D shading */}
      <path
        d="M 75 110 L 72 165 L 88 168 L 88 115 L 100 108 L 112 115 L 112 168 L 128 165 L 125 110 Q 115 105 100 105 Q 85 105 75 110 Z"
        fill="#60A5FA"
      />
      {/* Shirt shading for 3D */}
      <path
        d="M 75 110 L 72 135 L 80 138 L 88 115"
        fill="#3B82F6"
        opacity="0.3"
      />
      <path
        d="M 125 110 L 128 135 L 120 138 L 112 115"
        fill="#93C5FD"
        opacity="0.3"
      />
      
      {/* Tie - very organized with pattern */}
      <path d="M 100 110 L 95 115 L 96 145 L 100 150 L 104 145 L 105 115 Z" fill="#1E3A8A" />
      <path d="M 95 115 L 100 110 L 105 115 L 100 118 Z" fill="#2563EB" />
      {/* Tie pattern */}
      <line x1="98" y1="122" x2="102" y2="122" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
      <line x1="97" y1="130" x2="103" y2="130" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
      <line x1="97.5" y1="138" x2="102.5" y2="138" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
      {/* Tie clip */}
      <rect x="97" y="127" width="6" height="2" fill="#CBD5E1" rx="0.5" />
      
      {/* Collar with detail */}
      <path d="M 92 108 L 100 115 L 108 108" stroke="white" strokeWidth="4" fill="none" />
      <path d="M 93 109 L 100 114 L 107 109" stroke="#E5E7EB" strokeWidth="2" fill="none" />
      
      {/* Shirt buttons */}
      <circle cx="100" cy="120" r="1.5" fill="white" opacity="0.8" />
      <circle cx="100" cy="128" r="1.5" fill="white" opacity="0.8" />
      <circle cx="100" cy="136" r="1.5" fill="white" opacity="0.8" />
      
      {/* Pocket protector with pens - more detailed */}
      <rect x="106" y="120" width="14" height="20" fill="white" opacity="0.95" rx="1.5" />
      <rect x="107" y="121" width="12" height="2" fill="#DBEAFE" opacity="0.6" />
      <line x1="109" y1="124" x2="109" y2="137" stroke="#EF4444" strokeWidth="2" />
      <line x1="112" y1="122" x2="112" y2="135" stroke="#3B82F6" strokeWidth="2" />
      <line x1="115" y1="123" x2="115" y2="138" stroke="#10B981" strokeWidth="2" />
      {/* Pen details */}
      <circle cx="109" cy="123" r="1" fill="#DC2626" />
      <circle cx="112" cy="121" r="1" fill="#2563EB" />
      <circle cx="115" cy="122" r="1" fill="#059669" />
      
      {/* Left arm with sleeve */}
      <path d="M 75 115 L 60 125 L 58 150" stroke="#60A5FA" strokeWidth="13" strokeLinecap="round" />
      <path d="M 58 143 L 58 150" stroke="#FFC7A0" strokeWidth="10" strokeLinecap="round" />
      
      {/* Right arm */}
      <path d="M 125 115 L 140 125 L 145 150" stroke="#60A5FA" strokeWidth="13" strokeLinecap="round" />
      <path d="M 145 143 L 145 150" stroke="#FFC7A0" strokeWidth="10" strokeLinecap="round" />
      
      {/* Left hand holding tablet/planner - more detailed */}
      <ellipse cx="58" cy="152" rx="8" ry="9" fill="#FFD4A3" />
      {/* Fingers */}
      <ellipse cx="56" cy="157" rx="2" ry="4" fill="#FFD4A3" />
      <ellipse cx="60" cy="157" rx="2" ry="4" fill="#FFD4A3" />
      
      {/* Tablet/digital planner */}
      <rect x="44" y="145" width="24" height="32" rx="2" fill="#1E293B" />
      <rect x="46" y="147" width="20" height="28" fill="#3B82F6" opacity="0.4" />
      {/* Screen content */}
      <line x1="49" y1="151" x2="63" y2="151" stroke="#60A5FA" strokeWidth="1.5" />
      <line x1="49" y1="155" x2="63" y2="155" stroke="#60A5FA" strokeWidth="1.5" />
      <line x1="49" y1="159" x2="58" y2="159" stroke="#60A5FA" strokeWidth="1.5" />
      <line x1="49" y1="163" x2="61" y2="163" stroke="#93C5FD" strokeWidth="1" />
      <line x1="49" y1="167" x2="63" y2="167" stroke="#93C5FD" strokeWidth="1" />
      {/* Checkmark on screen */}
      <path d="M 51 169 L 53 171 L 57 166" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Screen reflection */}
      <rect x="47" y="148" width="8" height="10" fill="white" opacity="0.15" rx="1" />
      
      {/* Right hand - pointing up (idea!) with detail */}
      <ellipse cx="145" cy="152" rx="8" ry="9" fill="#FFD4A3" />
      {/* Pointing finger */}
      <rect x="143" y="143" width="4" height="14" fill="#FFD4A3" rx="2" />
      <ellipse cx="145" cy="142" rx="2.5" ry="3" fill="#FFD4A3" />
      {/* Other fingers curled */}
      <ellipse cx="148" cy="155" rx="2" ry="3" fill="#FFD4A3" />
      <ellipse cx="142" cy="155" rx="2" ry="3" fill="#FFD4A3" />
      
      {/* Neck with shadow */}
      <rect x="92" y="98" width="16" height="12" fill="#FFD4A3" />
      <rect x="93" y="98" width="6" height="12" fill="#FFC7A0" opacity="0.3" />
      
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
      {/* Side part detail */}
      <path d="M 100 44 L 100 58" stroke="#1E3A8A" strokeWidth="2" opacity="0.4" />
      <path d="M 98 46 Q 98 52 97 58" stroke="#1E40AF" strokeWidth="1" opacity="0.3" />
      <path d="M 102 46 Q 102 52 103 58" stroke="#1E40AF" strokeWidth="1" opacity="0.3" />
      
      {/* Eyebrows - focused with detail */}
      <path d="M 83 70 L 95 68" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M 105 68 L 117 70" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      {/* Eyebrow texture */}
      <path d="M 85 70 L 89 69" stroke="#6B5742" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M 111 69 L 115 70" stroke="#6B5742" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      
      {/* Nose */}
      <path d="M 100 77 L 100 86" stroke="#E5BE99" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <ellipse cx="98" cy="87" rx="1.5" ry="2" fill="#E5BE99" opacity="0.3" />
      <ellipse cx="102" cy="87" rx="1.5" ry="2" fill="#E5BE99" opacity="0.3" />
      
      {/* Smile - satisfied and confident */}
      <path d="M 88 90 Q 100 96 112 90" stroke="#D97706" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 88 90 Q 100 94 112 90" fill="#FDE68A" opacity="0.2" />
      
      <defs>
        <linearGradient id="plannerBg" x1="0" y1="0" x2="200" y2="240">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#BFDBFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
