export type Screen = 
  | 'design-system' 
  | 'dashboard' 
  | 'navigation' 
  | 'log-success' 
  | 'log-wellbeing' 
  | 'meditation-library' 
  | 'meditation-player' 
  | 'stats' 
  | 'profile' 
  | 'support';

export interface HealthMetric {
  steps: number;
  sleepHours: number;
  sleepMinutes: number;
  heartRate: number;
  hydration: number;
}

export interface MeditationCategory {
  id: string;
  title: string;
  sessions: number;
  imageUrl: string;
}
