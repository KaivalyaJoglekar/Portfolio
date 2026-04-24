'use client';

export const Marquee = () => {
  const items = ['FULL-STACK', '•', 'UI/UX', '•', 'THREE.JS', '•', 'NEXT.JS', '•', 'CREATIVE', '•', 'DEVELOPER', '•'];
  
  return (
    <div className="py-8 border-y border-neutral-900 overflow-hidden bg-black/50 backdrop-blur-sm">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            {items.map((item, j) => (
              <span 
                key={j} 
                className={`text-4xl md:text-6xl font-black tracking-tighter ${
                  item === '•' ? 'text-[#d4a574]' : 'text-stroke'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
