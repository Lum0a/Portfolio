import React, { useState } from 'react';
import { Box, Sparkles, Eye, ChevronUp, ChevronDown } from 'lucide-react';
import { SceneMode } from '../types';

interface SceneControlsProps {
  sceneMode: SceneMode;
  setSceneMode: (mode: SceneMode) => void;
  wireframe: boolean;
  setWireframe: (wireframe: boolean) => void;
  glowIntensity: number;
  setGlowIntensity: (intensity: number) => void;
}

export const SceneControls: React.FC<SceneControlsProps> = ({
  sceneMode,
  setSceneMode,
  wireframe,
  setWireframe,
  glowIntensity,
  setGlowIntensity,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      id="floating-scene-controls"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto select-none"
    >
      {/* Expanded Controls Panel */}
      {isExpanded && (
        <div className="bg-white/95 border border-black/10 backdrop-blur-2xl rounded-2xl p-4 shadow-xl space-y-4 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200 text-xs">
          <div className="flex items-center justify-between border-b border-black/10 pb-2">
            <span className="font-bold text-[#111111] uppercase tracking-widest text-[10px] flex items-center gap-1.5 font-mono">
              <Box className="w-3.5 h-3.5 text-black" />
              3D Ring Steuerung
            </span>
            <span className="text-[10px] text-[#888888] font-mono">WebGL</span>
          </div>

          {/* Mode Selector */}
          <div className="space-y-1.5">
            <label className="text-[#666666] block font-medium text-[10px] uppercase tracking-wider">Modus:</label>
            <div className="grid grid-cols-3 gap-1 bg-black/[0.04] p-1 rounded-xl border border-black/10">
              <button
                onClick={() => setSceneMode('scroll')}
                className={`py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  sceneMode === 'scroll'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-[#666666] hover:text-black'
                }`}
              >
                Scroll
              </button>
              <button
                onClick={() => setSceneMode('orbit')}
                className={`py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  sceneMode === 'orbit'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-[#666666] hover:text-black'
                }`}
              >
                Frei 3D
              </button>
              <button
                onClick={() => setSceneMode('auto')}
                className={`py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  sceneMode === 'auto'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-[#666666] hover:text-black'
                }`}
              >
                Auto
              </button>
            </div>
          </div>

          {/* Wireframe toggle */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[#333333] flex items-center gap-1.5 text-xs">
              <Eye className="w-3.5 h-3.5 text-[#666666]" />
              Wireframe Gitter
            </span>
            <button
              onClick={() => setWireframe(!wireframe)}
              className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                wireframe ? 'bg-[#FF5C00]' : 'bg-neutral-300'
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-full bg-white transition-transform absolute top-0.5 left-0.5 ${
                  wireframe ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Area Light Sheen Intensity */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#333333] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5C00]" />
                Lichtschein Intensität
              </span>
              <span className="text-[10px] font-mono text-[#888888]">
                {Math.round(glowIntensity * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0.4"
              max="2.0"
              step="0.1"
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#FF5C00]"
            />
          </div>
        </div>
      )}

      {/* Trigger Toggle Pill */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        id="scene-controls-toggle"
        className="glass-panel rounded-full px-4 py-2.5 flex items-center gap-2.5 text-xs font-semibold text-[#111111] hover:bg-white transition-all shadow-md cursor-pointer border border-black/10 active:scale-95"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C00]"></span>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider">3D Ring & Licht</span>
        {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
