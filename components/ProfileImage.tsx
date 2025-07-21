// components/ProfileImage.tsx

"use client";

import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0">
      <Image
        // Using the new, simpler filename
        src="/images/profile.jpg" 
        
        alt="Picture of James Ford"
        fill 
        className="rounded-full object-cover border-4 border-accent-1/20"
        
        onError={(e) => { 
          e.currentTarget.src = 'https://placehold.co/256x256/0D0D0D/00F5A0?text=JF'; 
        }}
      />
    </div>
  );
}