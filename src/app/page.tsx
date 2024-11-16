'use client'

import { useTimer } from '@/hooks/useTimer'
import TimerDisplay from '@/components/TimerDisplay'
import TimerControls from '@/components/TimerControls'

const TWENTY_FIVE_MINUTES = 25 * 60

export default function Page() {
  const { 
    isRunning, 
    time, 
    toggleTimer, 
    resetTimer, 
    formatTime 
  } = useTimer(TWENTY_FIVE_MINUTES)

  return (
    <main className="bg-white rounded-lg shadow-lg w-80 select-none">
      <div className="p-4">
        <TimerDisplay formattedTime={formatTime(time)} />
        <TimerControls 
          isRunning={isRunning}
          onToggle={toggleTimer}
          onReset={resetTimer}
        />
      </div>
    </main>
  )
}