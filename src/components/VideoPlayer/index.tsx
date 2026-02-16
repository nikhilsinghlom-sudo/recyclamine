// src/components/PlyrPlayer.tsx



import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css"; // Import Plyr's CSS

// Simple event emitter for managing play events across instances
class VideoPlayerEventEmitter {
  private static instance: VideoPlayerEventEmitter;
  private listeners: Set<(id: string) => void> = new Set();

  private constructor() {}

  static getInstance() {
    if (!VideoPlayerEventEmitter.instance) {
      VideoPlayerEventEmitter.instance = new VideoPlayerEventEmitter();
    }
    return VideoPlayerEventEmitter.instance;
  }

  subscribe(listener: (id: string) => void) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: (id: string) => void) {
    this.listeners.delete(listener);
  }

  emit(id: string) {
    this.listeners.forEach(listener => listener(id));
  }
}

// Modify interface for conditional props
interface PlyrPlayerProps {
  videoUrl?: string;       // Optional: For local video sources (MP4, WebM, etc.)
  provider?: "youtube" | "vimeo" | "html5";  // Optional: If we use YouTube or Vimeo
  embedId?: string;        // Optional: Embed ID for YouTube or Vimeo
  options?: Plyr.Options;  // Options for Plyr customization
  onPlay?: () => void;     // Callback when video starts playing
}

// Define a custom interface for the ref object
export interface PlyrPlayerHandle {
  pause: () => void;
  stop: () => void;
  reset: () => void;
}

const PlyrPlayer = forwardRef<PlyrPlayerHandle, PlyrPlayerProps>(({ videoUrl, provider, embedId, options, onPlay }, ref) => {
  const playerRef = useRef<HTMLDivElement | null>(null);  // Use a div to hold the Plyr player
  const plyrInstanceRef = useRef<Plyr | null>(null);
  const instanceId = useRef<string>(Math.random().toString(36).substr(2, 9)); // Unique id for this instance

  useImperativeHandle(ref, () => ({
    pause: () => {
      if (plyrInstanceRef.current) {
        plyrInstanceRef.current.pause();
      }
    },
    stop: () => {
      if (plyrInstanceRef.current && typeof plyrInstanceRef.current.stop === 'function') {
        plyrInstanceRef.current.stop();
      }
    },
    reset: () => {
      if (playerRef.current) {
        const iframe = playerRef.current.querySelector('iframe');
        if (iframe) {
          const src = iframe.src;
          iframe.src = '';
          iframe.src = src;
        }
      }
    }
  }));

  useEffect(() => {
    const emitter = VideoPlayerEventEmitter.getInstance();

    const onOtherPlayerPlay = (id: string) => {
      if (id !== instanceId.current) {
        // Pause this player if another player started playing
        if (plyrInstanceRef.current) {
          plyrInstanceRef.current.pause();
        }
      }
    };

    emitter.subscribe(onOtherPlayerPlay);

    return () => {
      emitter.unsubscribe(onOtherPlayerPlay);
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      // Clear previous content and attributes to avoid conflicts
      playerRef.current.innerHTML = "";
      playerRef.current.removeAttribute("data-plyr-provider");
      playerRef.current.removeAttribute("data-plyr-embed-id");

      if (provider && embedId) {
        // For YouTube or Vimeo embeds, use the data-plyr-provider and data-plyr-embed-id
        const playerElement = playerRef.current;
        playerElement.setAttribute("data-plyr-provider", provider);
        playerElement.setAttribute("data-plyr-embed-id", embedId);

        plyrInstanceRef.current = new Plyr(playerElement, options);
        if (onPlay) {
          plyrInstanceRef.current.on('play', () => {
            onPlay();
            VideoPlayerEventEmitter.getInstance().emit(instanceId.current);
          });
        } else {
          plyrInstanceRef.current.on('play', () => {
            VideoPlayerEventEmitter.getInstance().emit(instanceId.current);
          });
        }
      } else if (videoUrl) {
        // If videoUrl is provided, assume it's a local video (e.g., MP4)
        const videoElement = document.createElement("video");
        videoElement.src = videoUrl;
        videoElement.setAttribute("controls", "true");
        playerRef.current.appendChild(videoElement);
        plyrInstanceRef.current = new Plyr(videoElement, options);
        if (onPlay) {
          plyrInstanceRef.current.on('play', () => {
            onPlay();
            VideoPlayerEventEmitter.getInstance().emit(instanceId.current);
          });
        } else {
          plyrInstanceRef.current.on('play', () => {
            VideoPlayerEventEmitter.getInstance().emit(instanceId.current);
          });
        }
      }
    }

    // Cleanup the player instance when the component unmounts
    return () => {
      if (plyrInstanceRef.current) {
        plyrInstanceRef.current.destroy();
      }
    };
  }, [videoUrl, provider, embedId, options, onPlay]);  // Re-run effect if props change

  return (
    <div ref={playerRef} className="plyr-player-container">
      {/* The player will be initialized here */}
    </div>
  );
});

export default PlyrPlayer;
