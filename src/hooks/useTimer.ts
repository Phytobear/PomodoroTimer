import { useState, useEffect } from 'react'

interface UseTimerReturn {
  isRunning: boolean
  time: number
  toggleTimer: () => void
  resetTimer: () => void
  formatTime: (time: number) => string
}

export function useTimer(initialTime: number): UseTimerReturn {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(initialTime)

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTime(initialTime)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsRunning(false)
    }

    return () => clearInterval(interval)
  }, [isRunning, time])

  return {
    isRunning,
    time,
    toggleTimer,
    resetTimer,
    formatTime
  }
}