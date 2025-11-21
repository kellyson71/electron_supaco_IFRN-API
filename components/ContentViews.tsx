import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ViewState, ThemeVariant, SuapProfile, SuapMeusDadosAluno, GradeInfo, ProcessedClass, SuapCompletionData } from '../types';

interface ContentViewProps {
  view: ViewState;
  onClose: () => void;
  onChangeView: (view: ViewState) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  currentWallpaper: string;
  onWallpaperChange: (wallpaper: string) => void;
  themeVariant: ThemeVariant;
  onThemeVariantChange: (variant: ThemeVariant) => void;
  primaryColor: string;
  secondaryColor: string;
  userData: SuapProfile | null;
  academicData: SuapMeusDadosAluno | null;
  grades: GradeInfo[];
  schedule: ProcessedClass[];
  completionData: SuapCompletionData | null;
  onLogout: () => void;
  autoExpandClassroom?: boolean;
  onAutoExpandClassroom?: (expand: boolean) => void;
  initialProfileTab?: 'profile' | 'settings' | 'wallpaper';
}

export const ContentView: React.FC<ContentViewProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white dark:bg-slate-900 rounded-lg p-6 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">Conteúdo em desenvolvimento</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

