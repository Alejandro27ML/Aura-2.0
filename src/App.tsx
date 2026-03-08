import { useState } from 'react';
import { 
  Home, 
  BarChart2, 
  BookOpen, 
  User, 
  PlusCircle, 
  HelpCircle, 
  Layout, 
  ArrowLeft,
  Bell,
  Search,
  Menu,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Heart,
  Timer,
  Wind,
  Share2,
  Droplets,
  Footprints,
  Moon,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  Settings,
  LogOut,
  ShieldCheck,
  Smartphone,
  Info,
  Edit2,
  X,
  ArrowRight,
  Smile,
  Frown,
  Meh,
  Angry,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Screen, HealthMetric, MeditationCategory } from './types';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Mock Data ---
const meditationCategories: MeditationCategory[] = [
  { id: '1', title: 'Stress Relief', sessions: 24, imageUrl: 'https://picsum.photos/seed/stress/400/400' },
  { id: '2', title: 'Sleep Better', sessions: 18, imageUrl: 'https://picsum.photos/seed/sleep/400/400' },
  { id: '3', title: 'Deep Focus', sessions: 12, imageUrl: 'https://picsum.photos/seed/focus/400/400' },
  { id: '4', title: 'Morning Energy', sessions: 15, imageUrl: 'https://picsum.photos/seed/morning/400/400' },
  { id: '5', title: 'Self Love', sessions: 21, imageUrl: 'https://picsum.photos/seed/love/400/400' },
  { id: '6', title: 'Nature Sounds', sessions: 32, imageUrl: 'https://picsum.photos/seed/nature/400/400' },
];

const weeklyStepsData = [
  { day: 'M', steps: 8432 },
  { day: 'T', steps: 9120 },
  { day: 'W', steps: 7500 },
  { day: 'T', steps: 10200 },
  { day: 'F', steps: 11500 },
  { day: 'S', steps: 6800 },
  { day: 'S', steps: 5400 },
];

const sleepQualityData = [
  { day: 'MON', hours: 7.2 },
  { day: 'TUE', hours: 6.8 },
  { day: 'WED', hours: 7.5 },
  { day: 'THU', hours: 8.0 },
  { day: 'FRI', hours: 6.5 },
  { day: 'SAT', hours: 8.5 },
  { day: 'SUN', hours: 7.8 },
];

// --- Components ---

const BottomNav = ({ activeScreen, onNavigate }: { activeScreen: Screen, onNavigate: (s: Screen) => void }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'stats', label: 'Stats', icon: BarChart2 },
    { id: 'meditation-library', label: 'Learn', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 pb-6 pt-2 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Screen)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 transition-colors",
              activeScreen === item.id ? "text-primary" : "text-slate-400 dark:text-slate-500"
            )}
          >
            <item.icon className={cn("size-6", activeScreen === item.id && "fill-current")} />
            <span className="text-[10px] font-bold uppercase tracking-wide">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

// --- Screens ---

const DashboardScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  return (
    <div className="pb-24">
      <header className="flex items-center p-4 justify-between sticky top-0 bg-background-light/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 border border-primary/20 overflow-hidden">
            <img src="https://picsum.photos/seed/user/100/100" alt="User" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-lg font-bold">Aura Wellness</h2>
        </div>
        <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600">
          <Bell className="size-5" />
        </button>
      </header>

      <main className="p-4 space-y-6">
        <section>
          <h3 className="text-2xl font-bold">Good morning, Alex</h3>
          <p className="text-slate-500 text-sm">Today is Wednesday, June 12th</p>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium">Daily Steps</p>
                <p className="text-3xl font-bold mt-1">8,432 <span className="text-sm font-normal text-slate-400">/ 10k</span></p>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Footprints className="size-6" />
              </div>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '84%' }}
                className="bg-primary h-full rounded-full" 
              />
            </div>
            <p className="text-green-500 text-xs font-semibold mt-3 flex items-center">
              <TrendingUp className="size-3 mr-1" /> 12% more than yesterday
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-2">
              <p className="text-slate-500 text-sm font-medium">Sleep</p>
              <Moon className="size-5 text-primary/70" />
            </div>
            <p className="text-xl font-bold">7h 20m</p>
            <p className="text-red-500 text-xs font-semibold flex items-center mt-1">
              <TrendingDown className="size-3 mr-1" /> 5%
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-2">
              <p className="text-slate-500 text-sm font-medium">Heart Rate</p>
              <Heart className="size-5 text-red-400" />
            </div>
            <p className="text-xl font-bold">68 <span className="text-xs font-normal">bpm</span></p>
            <p className="text-green-500 text-xs font-semibold flex items-center mt-1">
              <CheckCircle2 className="size-3 mr-1" /> Normal
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">Activity Progress</h4>
            <select className="text-xs font-medium text-slate-500 bg-transparent border-none focus:ring-0">
              <option>This Week</option>
            </select>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyStepsData}>
                <Bar dataKey="steps" fill="#2b8cee" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium px-1">
            {weeklyStepsData.map(d => <span key={d.day}>{d.day}</span>)}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4">Aura Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
              <div className="size-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-green-500 shadow-sm">
                <Droplets className="size-6" />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-sm">Stay Hydrated</h5>
                <p className="text-slate-500 text-xs">You're 2 glasses away from your daily goal.</p>
              </div>
              <button 
                onClick={() => onNavigate('log-wellbeing')}
                className="text-green-600 text-xs font-bold px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-green-200 shadow-sm"
              >
                Log
              </button>
            </div>

            <div 
              onClick={() => onNavigate('meditation-player')}
              className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 cursor-pointer"
            >
              <div className="size-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
                <Play className="size-6 fill-current" />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-sm">Mindfulness Break</h5>
                <p className="text-slate-500 text-xs">A 5-minute meditation can lower your stress levels.</p>
              </div>
              <ChevronRight className="size-5 text-slate-400" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const StatsScreen = () => {
  return (
    <div className="pb-24">
      <header className="flex items-center p-4 sticky top-0 bg-white dark:bg-slate-900 z-10 border-b border-slate-100 dark:border-slate-800">
        <button className="p-2 rounded-full hover:bg-slate-100"><ArrowLeft className="size-5" /></button>
        <h1 className="text-lg font-bold flex-1 text-center mr-10">Your Progress</h1>
      </header>

      <nav className="flex border-b border-slate-100 dark:border-slate-800 px-4 bg-white dark:bg-slate-900">
        <button className="flex-1 py-4 text-sm font-bold text-primary border-b-2 border-primary">Weekly</button>
        <button className="flex-1 py-4 text-sm font-bold text-slate-400">Monthly</button>
        <button className="flex-1 py-4 text-sm font-bold text-slate-400">Yearly</button>
      </nav>

      <main className="p-4 space-y-6">
        <section className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium">Steps</p>
              <h2 className="text-3xl font-bold mt-1">57,680 <span className="text-sm font-normal text-slate-400">total</span></h2>
            </div>
            <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold flex items-center">
              <TrendingUp className="size-3 mr-1" /> 15%
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyStepsData}>
                <Bar dataKey="steps" fill="#2b8cee" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 text-sm font-medium">Sleep Quality</p>
              <h2 className="text-3xl font-bold mt-1">7h 15m <span className="text-sm font-normal text-slate-400">avg</span></h2>
            </div>
            <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold flex items-center">
              <TrendingUp className="size-3 mr-1" /> 5%
            </div>
          </div>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sleepQualityData}>
                <defs>
                  <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="hours" stroke="#6366f1" fillOpacity={1} fill="url(#colorSleep)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4">Historical Insights</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="size-6" />
              </div>
              <div>
                <p className="text-sm font-bold">Activity Spike</p>
                <p className="text-xs text-slate-500">You walked 15% more than last week. Your most active day was Thursday.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
              <div className="size-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Moon className="size-6" />
              </div>
              <div>
                <p className="text-sm font-bold">Sleep Consistency</p>
                <p className="text-xs text-slate-500">Your sleep routine was 80% consistent this week. Keep up the 10PM bedtime!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const MeditationLibraryScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  return (
    <div className="pb-24">
      <header className="flex items-center p-4 justify-between sticky top-0 bg-background-light/80 backdrop-blur-md z-10">
        <button className="p-2"><Menu className="size-6" /></button>
        <h2 className="text-lg font-bold">Meditation Library</h2>
        <button className="p-2"><User className="size-6" /></button>
      </header>

      <div className="px-4 py-3">
        <div className="flex items-center bg-white dark:bg-slate-800 rounded-xl px-4 h-12 shadow-sm border border-slate-100 dark:border-slate-700">
          <Search className="size-5 text-slate-400 mr-2" />
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-sm" 
            placeholder="Search meditations, music, guides..." 
          />
        </div>
      </div>

      <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
        {['All sessions', 'Favorites', 'Beginner', 'Quick (5m)'].map((filter, i) => (
          <button 
            key={filter}
            className={cn(
              "whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors",
              i === 0 ? "bg-primary text-white" : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="px-4 pt-4">
        <h2 className="text-xl font-bold">Browse Categories</h2>
        <p className="text-slate-500 text-sm">Find the perfect mood for your practice</p>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        {meditationCategories.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => onNavigate('meditation-player')}
            className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 cursor-pointer active:scale-95 transition-transform"
          >
            <div className="aspect-square rounded-xl overflow-hidden mb-3">
              <img src={cat.imageUrl} alt={cat.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-bold text-sm">{cat.title}</h3>
            <p className="text-primary text-xs font-medium">{cat.sessions} Sessions</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MeditationPlayerScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 flex flex-col">
      <header className="flex items-center p-6 justify-between">
        <button onClick={() => onNavigate('meditation-library')} className="p-2 rounded-full hover:bg-black/5"><ArrowLeft className="size-6" /></button>
        <h2 className="text-sm font-semibold uppercase tracking-widest">Aura Meditation</h2>
        <button className="p-2 rounded-full hover:bg-black/5"><X className="size-6" /></button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="relative w-full max-w-sm aspect-square mb-12">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-primary/10" />
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img src="https://picsum.photos/seed/ocean/600/600" alt="Ocean" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Ocean Breath</h1>
          <p className="text-primary font-medium text-lg">Mindfulness • 12:00</p>
        </div>

        <div className="w-full max-w-md mb-12">
          <div className="flex justify-between items-center mb-4 px-1">
            <span className="text-sm font-semibold text-slate-400">04:12</span>
            <span className="text-sm font-semibold text-slate-400">12:00</span>
          </div>
          <div className="relative h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: '35%' }} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-10">
          <button className="text-slate-400 hover:text-primary transition-colors"><RotateCcw className="size-8" /></button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="size-24 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause className="size-10 fill-current" /> : <Play className="size-10 fill-current ml-1" />}
          </button>
          <button className="text-slate-400 hover:text-primary transition-colors"><RotateCw className="size-8" /></button>
        </div>
      </main>

      <footer className="flex items-center justify-around p-8">
        {[
          { icon: Heart, label: 'Save' },
          { icon: Timer, label: 'Timer' },
          { icon: Wind, label: 'Sounds' },
          { icon: Share2, label: 'Share' }
        ].map((item) => (
          <button key={item.label} className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <item.icon className="size-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </footer>
    </div>
  );
};

const LogWellbeingScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [glasses, setGlasses] = useState(8);
  const [mood, setMood] = useState('Okay');

  const moods = [
    { emoji: '😫', label: 'Awful' },
    { emoji: '🙁', label: 'Low' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '🤩', label: 'Great' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <header className="flex items-center p-4 border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => onNavigate('dashboard')} className="p-2"><ArrowLeft className="size-6" /></button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">Log Your Well-being</h2>
      </header>

      <main className="flex-1 p-6 space-y-8 overflow-y-auto">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Droplets className="size-5 text-primary" />
            <h3 className="font-semibold">Water Intake</h3>
          </div>
          <div className="bg-primary/5 p-6 rounded-2xl flex flex-col items-center gap-4">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => setGlasses(Math.max(0, glasses - 1))}
                className="size-12 rounded-full bg-white shadow-sm text-primary flex items-center justify-center border border-slate-100"
              >
                <X className="size-6 rotate-45" />
              </button>
              <div className="text-center">
                <span className="text-4xl font-bold">{glasses}</span>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Glasses</p>
              </div>
              <button 
                onClick={() => setGlasses(glasses + 1)}
                className="size-12 rounded-full bg-primary text-white shadow-md flex items-center justify-center"
              >
                <PlusCircle className="size-6" />
              </button>
            </div>
            <p className="text-sm text-slate-500">Target: 10 glasses (2.5L)</p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Footprints className="size-5 text-sage" />
            <h3 className="font-semibold">Manual Steps</h3>
          </div>
          <div className="relative">
            <input 
              className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-5 text-lg font-medium focus:ring-2 focus:ring-sage/20" 
              defaultValue="6432"
              type="number"
            />
            <Edit2 className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Smile className="size-5 text-amber-500" />
            <h3 className="font-semibold">How are you feeling?</h3>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {moods.map((m) => (
              <button 
                key={m.label}
                onClick={() => setMood(m.label)}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-2xl transition-all",
                  mood === m.label ? "bg-sage/20 border-2 border-sage" : "bg-slate-50 dark:bg-slate-900 border-2 border-transparent"
                )}
              >
                <span className={cn("text-2xl", mood !== m.label && "grayscale")}>{m.emoji}</span>
                <span className={cn("text-[10px] mt-2 font-medium", mood === m.label ? "text-sage font-bold" : "text-slate-500")}>{m.label}</span>
              </button>
            ))}
          </div>
        </section>

        <button 
          onClick={() => onNavigate('log-success')}
          className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all"
        >
          Save Daily Log
        </button>
      </main>
    </div>
  );
};

const LogSuccessScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center justify-center p-6 text-center">
      <div className="size-64 rounded-full bg-primary/10 flex items-center justify-center relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full" />
        <Wind className="size-32 text-primary fill-current relative z-10" />
      </div>

      <h2 className="text-3xl font-bold mb-2">Great job, Alex!</h2>
      <p className="text-slate-500 mb-8 max-w-xs">Your health metrics have been successfully recorded for today. Keep up the amazing consistency!</p>

      <div className="w-full max-w-sm bg-white rounded-2xl p-6 border border-primary/10 mb-12">
        <h4 className="text-primary text-[10px] font-bold tracking-widest uppercase mb-4">Daily Summary</h4>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <Droplets className="size-6 text-primary mb-1" />
            <span className="font-bold text-lg">2L</span>
            <span className="text-[10px] text-slate-400">Hydration</span>
          </div>
          <div className="w-px h-8 bg-slate-100" />
          <div className="flex flex-col items-center">
            <Footprints className="size-6 text-primary mb-1" />
            <span className="font-bold text-lg">5,000</span>
            <span className="text-[10px] text-slate-400">Steps</span>
          </div>
          <div className="w-px h-8 bg-slate-100" />
          <div className="flex flex-col items-center">
            <Moon className="size-6 text-primary mb-1" />
            <span className="font-bold text-lg">7.5h</span>
            <span className="text-[10px] text-slate-400">Sleep</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => onNavigate('dashboard')}
        className="w-full max-w-sm bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
      >
        Return to Dashboard <ArrowRight className="size-5" />
      </button>
    </div>
  );
};

const ProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  return (
    <div className="pb-24">
      <header className="flex items-center p-4 sticky top-0 bg-white dark:bg-slate-900 z-10 border-b border-slate-100 dark:border-slate-800">
        <button className="p-2"><ArrowLeft className="size-5" /></button>
        <h1 className="text-lg font-bold flex-1 text-center">Profile</h1>
        <button className="p-2"><Settings className="size-5" /></button>
      </header>

      <main className="p-6 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="size-24 rounded-full border-4 border-primary/10 overflow-hidden">
            <img src="https://picsum.photos/seed/alex/200/200" alt="Profile" referrerPolicy="no-referrer" />
          </div>
          <button className="absolute bottom-0 right-0 size-8 bg-primary text-white rounded-full border-2 border-white flex items-center justify-center shadow-lg">
            <Edit2 className="size-4" />
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-bold">Alex Rivera</h2>
          <p className="text-slate-500 text-sm">alex.rivera@aura.com</p>
          <div className="mt-2 inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            <Star className="size-3 fill-current" /> Premium Member
          </div>
        </div>

        <div className="w-full space-y-6">
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Account Settings</h3>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden">
              {[
                { icon: User, label: 'Personal Information' },
                { icon: Bell, label: 'Notifications' },
                { icon: ShieldCheck, label: 'Security & Password' }
              ].map((item, i) => (
                <div key={item.label} className={cn("flex items-center gap-4 p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors", i < 2 && "border-b border-slate-100 dark:border-slate-800")}>
                  <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><item.icon className="size-5" /></div>
                  <span className="flex-1 font-medium">{item.label}</span>
                  <ChevronRight className="size-5 text-slate-300" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">Device Synchronization</h3>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-4 p-4 border-b border-slate-100 dark:border-slate-800">
                <div className="size-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center"><Heart className="size-5 fill-current" /></div>
                <div className="flex-1">
                  <p className="font-medium">Apple Health</p>
                  <p className="text-xs text-slate-500">Connected</p>
                </div>
                <div className="w-10 h-6 bg-primary rounded-full relative"><div className="absolute right-1 top-1 size-4 bg-white rounded-full" /></div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <div className="size-9 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center"><Smartphone className="size-5" /></div>
                <div className="flex-1">
                  <p className="font-medium">Google Fit</p>
                  <p className="text-xs text-slate-500">Sync weight, steps, and activity</p>
                </div>
                <div className="w-10 h-6 bg-slate-200 rounded-full relative"><div className="absolute left-1 top-1 size-4 bg-white rounded-full" /></div>
              </div>
            </div>
          </section>

          <button 
            onClick={() => onNavigate('support')}
            className="w-full flex items-center justify-center gap-2 py-4 text-slate-500 font-bold border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors"
          >
            <HelpCircle className="size-5" /> Help & Support
          </button>

          <button className="w-full flex items-center justify-center gap-2 py-4 text-red-500 font-bold border border-red-100 rounded-2xl hover:bg-red-50 transition-colors">
            <LogOut className="size-5" /> Sign Out
          </button>
        </div>
      </main>
    </div>
  );
};

const SupportScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  return (
    <div className="pb-24">
      <header className="flex items-center p-4 sticky top-0 bg-white dark:bg-slate-900 z-10 border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => onNavigate('profile')} className="p-2"><ArrowLeft className="size-5" /></button>
        <h1 className="text-lg font-bold flex-1 text-center mr-10">Help & Support</h1>
      </header>

      <main className="p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-2">How can we help?</h2>
          <p className="text-slate-500 text-sm">Find answers to your questions or reach out to our team.</p>
        </section>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 flex items-center gap-3">
          <Search className="size-5 text-slate-400" />
          <input className="bg-transparent border-none focus:ring-0 w-full text-sm" placeholder="Search for articles, guides..." />
        </div>

        <section>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Smartphone, label: 'Live Chat', color: 'bg-primary/10 text-primary' },
              { icon: BookOpen, label: 'Email Us', color: 'bg-green-50 text-green-600' },
              { icon: HelpCircle, label: 'Call Support', color: 'bg-slate-100 text-slate-600' }
            ].map((item) => (
              <button key={item.label} className={cn("flex flex-col items-center justify-center p-4 rounded-2xl transition-all active:scale-95", item.color)}>
                <item.icon className="size-6 mb-2" />
                <span className="text-[10px] font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-4">Popular Topics</h3>
          <div className="space-y-3">
            {[
              'How to start a meditation session?',
              'Managing your Aura Premium subscription',
              'Syncing with Apple Health / Google Fit'
            ].map((topic) => (
              <div key={topic} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl">
                <span className="text-sm font-medium">{topic}</span>
                <ChevronRight className="size-4 text-slate-300" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const DesignSystemScreen = () => {
  return (
    <div className="pb-24">
      <header className="flex items-center p-4 sticky top-0 bg-white z-10 border-b border-slate-100">
        <button className="p-2"><ArrowLeft className="size-5" /></button>
        <h1 className="text-lg font-bold flex-1 text-center mr-10">Aura Design System</h1>
      </header>

      <main className="p-6 space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4">Visual Identity</h1>
          <p className="text-slate-500 leading-relaxed">
            Aura is built on the principles of tranquility and clarity. Our design system ensures a consistent, accessible experience for every user seeking wellness.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="size-2 rounded-full bg-primary" />
            <h3 className="text-xl font-bold">Color Palette - Calming & Soft</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Primary Blue', color: 'bg-primary' },
              { label: 'Soft Sky', color: 'bg-aura-sky' },
              { label: 'Sage Green', color: 'bg-aura-sage' },
              { label: 'Moss Leaf', color: 'bg-aura-moss' },
              { label: 'Pure Zen', color: 'bg-white border border-slate-100' }
            ].map((c) => (
              <div key={c.label} className="space-y-2">
                <div className={cn("h-20 rounded-xl shadow-sm", c.color)} />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{c.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
          <div className="flex items-center gap-2 mb-8">
            <Layout className="size-5 text-primary" />
            <h3 className="text-xl font-bold">Typography Hierarchy</h3>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Display Heading</p>
              <h1 className="text-5xl font-bold tracking-tight">Focus & Breathe</h1>
            </div>
            <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Section Title</p>
              <h2 className="text-2xl font-bold">Morning Meditation</h2>
            </div>
            <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Body Copy</p>
              <p className="text-slate-500 leading-relaxed">
                A clear mind starts with a clear interface. We use legible line heights and generous spacing to reduce cognitive load.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <PlusCircle className="size-5 text-primary" />
            <h3 className="text-xl font-bold">Interactive Elements</h3>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold text-slate-400 mb-4">Button States</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20">Primary</button>
                <button className="bg-primary/10 text-primary px-8 py-3 rounded-full font-bold">Secondary</button>
                <button className="border-2 border-primary/10 text-primary px-8 py-3 rounded-full font-bold">Ghost</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const NavigationArchitectureScreen = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Aura Wellness - Navigation Architecture</h1>
        <p className="text-slate-400">Visual Site Map & Information Hierarchy</p>
      </header>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-xl mb-12">
          AURA WELLNESS APP
        </div>

        <div className="w-px h-12 bg-primary/30" />

        <div className="grid grid-cols-4 gap-8 w-full relative">
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-primary/30" />
          
          {[
            { label: 'Home', sub: ['Dashboard', 'Activity Details', 'Daily Insights'] },
            { label: 'Stats', sub: ['Historical Data', 'Goals Setting', 'Trend Analysis'] },
            { label: 'Learn', sub: ['Meditation Library', 'Breathing Exercises', 'Wellness Articles'] },
            { label: 'Profile', sub: ['User Settings', 'Device Sync', 'Privacy & Data'] }
          ].map((branch) => (
            <div key={branch.label} className="flex flex-col items-center">
              <div className="w-px h-8 bg-primary/30" />
              <div className="w-full bg-white border-2 border-primary p-4 rounded-xl shadow-sm text-center mb-6">
                <h3 className="font-bold">{branch.label}</h3>
              </div>
              <div className="space-y-3 w-full">
                {branch.sub.map((s) => (
                  <div key={s} className="bg-white border border-slate-100 p-3 rounded-lg text-[10px] font-bold text-center text-slate-500 shadow-sm">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard': return <DashboardScreen onNavigate={setCurrentScreen} />;
      case 'stats': return <StatsScreen />;
      case 'meditation-library': return <MeditationLibraryScreen onNavigate={setCurrentScreen} />;
      case 'meditation-player': return <MeditationPlayerScreen onNavigate={setCurrentScreen} />;
      case 'log-wellbeing': return <LogWellbeingScreen onNavigate={setCurrentScreen} />;
      case 'log-success': return <LogSuccessScreen onNavigate={setCurrentScreen} />;
      case 'profile': return <ProfileScreen onNavigate={setCurrentScreen} />;
      case 'support': return <SupportScreen onNavigate={setCurrentScreen} />;
      case 'design-system': return <DesignSystemScreen />;
      case 'navigation': return <NavigationArchitectureScreen />;
      default: return <DashboardScreen onNavigate={setCurrentScreen} />;
    }
  };

  const showBottomNav = ['dashboard', 'stats', 'meditation-library', 'profile'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="max-w-md mx-auto bg-white dark:bg-slate-900 min-h-screen shadow-2xl relative"
        >
          {renderScreen()}
          
          {/* Hidden triggers for demo purposes */}
          <div className="fixed top-0 left-0 p-2 opacity-0 hover:opacity-100 transition-opacity z-[100] flex flex-col gap-1">
            <button onClick={() => setCurrentScreen('design-system')} className="bg-black text-white text-[8px] p-1">DS</button>
            <button onClick={() => setCurrentScreen('navigation')} className="bg-black text-white text-[8px] p-1">NAV</button>
          </div>
        </motion.div>
      </AnimatePresence>

      {showBottomNav && <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />}
    </div>
  );
}
