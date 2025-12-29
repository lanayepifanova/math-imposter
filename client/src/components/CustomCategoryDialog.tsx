import { NeonButton } from "@/components/NeonButton";
import { useGame } from "@/contexts/GameContext";
import { useState } from "react";

interface CustomCategoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomCategoryDialog({ isOpen, onClose }: CustomCategoryDialogProps) {
  const { addCustomCategory } = useGame();
  const [name, setName] = useState("");
  const [wordsInput, setWordsInput] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Please enter a category name");
      return;
    }

    const words = wordsInput
      .split(',')
      .map(w => w.trim())
      .filter(w => w.length > 0);

    if (words.length < 5) {
      setError("Please add at least 5 words (comma separated)");
      return;
    }

    addCustomCategory(name.trim(), words);
    onClose();
    setName("");
    setWordsInput("");
    setError("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card rounded-2xl shadow-2xl max-w-sm w-full p-5 relative animate-in zoom-in-95 duration-300 border border-border">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 px-2 py-1 text-xs font-lato font-bold uppercase tracking-widest text-foreground/60 hover:text-foreground/80 transition-colors pressable"
        >
          Close
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-playfair font-bold text-foreground">New Category</h3>
          <div className="h-px w-12 bg-foreground/30 mx-auto mt-2"></div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Category Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Movies, Animals"
              className="w-full p-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-lato text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
              Words <span className="text-foreground/60 font-normal normal-case">(comma separated)</span>
            </label>
            <textarea
              value={wordsInput}
              onChange={(e) => setWordsInput(e.target.value)}
              placeholder="Lion, Tiger, Bear, Elephant, Giraffe..."
              className="w-full p-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-lato min-h-[100px] resize-none text-sm"
            />
          </div>

          {error && (
            <p className="text-destructive text-sm font-bold text-center animate-in slide-in-from-top-2">
              {error}
            </p>
          )}

          <NeonButton 
            fullWidth 
            onClick={handleSubmit}
            className="text-xs"
          >
            Create Category
          </NeonButton>
        </div>
      </div>
    </div>
  );
}
