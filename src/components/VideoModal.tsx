
import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  if (!isOpen) return null;
  
  // Extract video ID from YouTube URL
  const getYouTubeID = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : url;
  };
  
  const videoId = getYouTubeID(videoUrl);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>
      <div className="relative z-10 w-full max-w-[800px] mx-auto">
        <div className="glass-card bg-white/20 p-4 rounded-xl border border-blue-300/50 shadow-lg relative overflow-hidden">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 bg-white/80 rounded-full p-2 text-gray-800 hover:text-blue-600 z-20 transition-colors"
            aria-label="Close video"
          >
            <X size={24} />
          </button>
          
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
