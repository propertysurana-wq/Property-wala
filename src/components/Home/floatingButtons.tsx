import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <button className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110">
        <MessageCircle className="text-white" size={32} />
      </button>

      <button className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110">
        <Phone className="text-white" size={32} />
      </button>
    </div>
  );
}