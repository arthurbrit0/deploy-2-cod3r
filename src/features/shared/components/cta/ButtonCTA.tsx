import React from 'react'
import Button from '../Button'
import { ArrowRight } from 'lucide-react'

const ButtonCTA = () => {
  return (
    <div>
      <Button
        href="/assinatura"
        className="inline-flex bg-gradient-to-r from-purple-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
      >
        Comece Agora
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}

export default ButtonCTA
