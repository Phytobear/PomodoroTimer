import { Play, Pause, RotateCcw } from 'lucide-react'

interface TimerControlsProps {
  isRunning: boolean
  onToggle: () => void
  onReset: () => void
}

export default function TimerControls({ 
  isRunning, 
  onToggle, 
  onReset 
}: TimerControlsProps) {
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={onToggle}
        className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        {isRunning ? 
          <Pause className="w-6 h-6" /> : 
          <Play className="w-6 h-6" />
        }
      </button>
      <button
        onClick={onReset}
        className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <RotateCcw className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  )
}