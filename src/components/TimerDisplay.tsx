interface TimerDisplayProps {
    formattedTime: string
  }
  
  export default function TimerDisplay({ formattedTime }: TimerDisplayProps) {
    return (
      <div className="flex flex-col items-center mb-8">
        <div className="text-6xl font-bold text-gray-800">
          {formattedTime}
        </div>
      </div>
    )
  }