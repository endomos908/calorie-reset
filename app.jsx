import { useState, useRef } from "react";

// ─── PROFILE ───────────────────────────────────────────────
const PROFILE = { age: 48, weight: 315, height: "5'9\"", goal: 215, dailyCal: 1800, weeklyLoss: 2.2 };

// ─── MEAL PLAN ─────────────────────────────────────────────
const MEAL_PLAN = [
{
day: "Monday", theme: "High Protein Start",
meals: [
{ type: "Breakfast", icon: "🌅", cal: 380, items: ["3 scrambled egg whites + 1 whole egg", "1 slice whole wheat toast", "½ cup oatmeal with cinnamon", "Black coffee or green tea"], protein: 28, carbs: 42, fat: 9 },
{ type: "Snack", icon: "🍎", cal: 120, items: ["1 medium apple", "10 raw almonds"], protein: 3, carbs: 22, fat: 6 },
{ type: "Lunch", icon: "☀️", cal: 480, items: ["150g grilled chicken breast", "1 cup brown rice", "1 cup steamed broccoli", "1 tsp olive oil + lemon dressing"], protein: 42, carbs: 48, fat: 8 },
{ type: "Snack", icon: "🥛", cal: 130, items: ["1 cup low-fat Greek yogurt", "½ tsp honey"], protein: 17, carbs: 14, fat: 2 },
{ type: "Dinner", icon: "🌙", cal: 490, items: ["150g baked salmon", "1 cup roasted sweet potato", "Large green salad (no dressing)", "1 tbsp olive oil + vinegar dressing"], protein: 38, carbs: 45, fat: 14 },
{ type: "Evening", icon: "💤", cal: 180, items: ["1 boiled egg", "1 cup cucumber + celery sticks", "Herbal tea (no sugar)"], protein: 8, carbs: 8, fat: 5 },
]
},
{
day: "Tuesday", theme: "Low Carb Day",
meals: [
{ type: "Breakfast", icon: "🌅", cal: 360, items: ["2 whole eggs + 2 egg whites omelette", "Spinach + tomato + onion filling", "½ avocado", "Green tea"], protein: 26, carbs: 12, fat: 22 },
{ type: "Snack", icon: "🥕", cal: 90, items: ["1 cup baby carrots", "2 tbsp hummus"], protein: 4, carbs: 16, fat: 3 },
{ type: "Lunch", icon: "☀️", cal: 470, items: ["150g tuna (water-packed)", "Large mixed greens salad", "½ cup cherry tomatoes", "1 tbsp olive oil + lemon", "10 whole wheat crackers"], protein: 40, carbs: 28, fat: 12 },
{ type: "Snack", icon: "🍌", cal: 140, items: ["1 banana", "1 tbsp peanut butter (natural)"], protein: 4, carbs: 30, fat: 8 },
{ type: "Dinner", icon: "🌙", cal: 500, items: ["180g grilled turkey breast", "2 cups roasted vegetables (zucchini, bell pepper, onion)", "½ cup quinoa", "Fresh herbs seasoning"], protein: 44, carbs: 38, fat: 8 },
{ type: "Evening", icon: "💤", cal: 140, items: ["½ cup cottage cheese (low-fat)", "5 walnut halves"], protein: 14, carbs: 6, fat: 7 },
]
},
{
day: "Wednesday", theme: "Mediterranean Focus",
meals: [
{ type: "Breakfast", icon: "🌅", cal: 390, items: ["1 cup oatmeal with berries", "1 scoop protein powder (mixed in)", "1 tbsp flaxseed", "Black coffee"], protein: 30, carbs: 48, fat: 7 },
{ type: "Snack", icon: "🍇", cal: 100, items: ["1 cup mixed grapes", "String cheese (low-fat)"], protein: 7, carbs: 18, fat: 2 },
{ type: "Lunch", icon: "☀️", cal: 460, items: ["150g grilled white fish (tilapia or cod)", "1 cup couscous", "Cucumber + tomato + olives salad", "Lemon + olive oil dressing"], protein: 38, carbs: 44, fat: 10 },
{ type: "Snack", icon: "🥜", cal: 150, items: ["28g mixed nuts (1 small handful)", "1 pear"], protein: 5, carbs: 22, fat: 9 },
{ type: "Dinner", icon: "🌙", cal: 480, items: ["150g chicken breast strips", "1 whole wheat pita", "Tzatziki (2 tbsp)", "Lettuce + tomato + onion wrap"], protein: 40, carbs: 42, fat: 9 },
{ type: "Evening", icon: "💤", cal: 120, items: ["1 cup warm skim milk", "1 small orange"], protein: 9, carbs: 22, fat: 1 },
]
},
{
day: "Thursday", theme: "Protein Power",
meals: [
{ type: "Breakfast", icon: "🌅", cal: 370, items: ["2 whole eggs scrambled", "2 turkey sausage links (lean)", "1 slice whole wheat toast", "½ grapefruit"], protein: 30, carbs: 30, fat: 12 },
{ type: "Snack", icon: "🍑", cal: 110, items: ["1 peach or nectarine", "15g pumpkin seeds"], protein: 5, carbs: 18, fat: 4 },
{ type: "Lunch", icon: "☀️", cal: 490, items: ["150g lean beef (90% lean) patty (no bun)", "1 cup lentil soup", "Side salad with vinegar dressing", "1 small whole wheat roll"], protein: 46, carbs: 40, fat: 12 },
{ type: "Snack", icon: "🥛", cal: 120, items: ["1 cup low-fat Greek yogurt", "1 tbsp chia seeds"], protein: 15, carbs: 12, fat: 3 },
{ type: "Dinner", icon: "🌙", cal: 490, items: ["180g shrimp stir-fry", "2 cups mixed vegetables (no oil)", "1 cup brown rice", "Soy sauce + garlic seasoning (low sodium)"], protein: 42, carbs: 46, fat: 6 },
{ type: "Evening", icon: "💤", cal: 120, items: ["1 boiled egg", "½ cup sliced bell peppers", "Chamomile tea"], protein: 7, carbs: 8, fat: 5 },
]
},
{
day: "Friday", theme: "Clean & Light",
meals: [
{ type: "Breakfast", icon: "🌅", cal: 380, items: ["Smoothie: 1 banana + 1 cup spinach + 1 scoop protein + skim milk", "1 boiled egg on the side"], protein: 32, carbs: 42, fat: 6 },
{ type: "Snack", icon: "🍏", cal: 100, items: ["1 green apple", "1 tbsp almond butter"], protein: 2, carbs: 22, fat: 5 },
{ type: "Lunch", icon: "☀️", cal: 460, items: ["150g grilled chicken", "1 cup black bean soup", "Corn tortilla (1 small)", "Salsa + lettuce"], protein: 44, carbs: 38, fat: 8 },
{ type: "Snack", icon: "🥝", cal: 120, items: ["2 kiwi fruits", "10 cashews"], protein: 4, carbs: 24, fat: 6 },
{ type: "Dinner", icon: "🌙", cal: 500, items: ["150g baked cod or halibut", "1 cup mashed sweet potato (no butter)", "1 cup green beans", "Lemon + herbs seasoning"], protein: 38, carbs: 48, fat: 6 },
{ type: "Evening", icon: "💤", cal: 140, items: ["½ cup low-fat ricotta", "Cinnamon sprinkle", "5 strawberries"], protein: 12, carbs: 14, fat: 5 },
]
},
{
day: "Saturday", theme: "Flexible Day",
meals: [
{ type: "Breakfast", icon: "🌅", cal: 420, items: ["2 whole wheat pancakes (small)", "2 turkey bacon strips", "½ cup fresh berries", "Black coffee"], protein: 24, carbs: 52, fat: 10 },
{ type: "Snack", icon: "🍊", cal: 90, items: ["1 orange", "1 low-fat string cheese"], protein: 7, carbs: 16, fat: 2 },
{ type: "Lunch", icon: "☀️", cal: 480, items: ["Large grilled chicken salad", "Mixed greens + avocado + egg + tomato", "Balsamic vinaigrette (2 tbsp)", "1 small whole grain roll"], protein: 40, carbs: 34, fat: 16 },
{ type: "Snack", icon: "🥤", cal: 130, items: ["Protein shake (1 scoop + water)", "1 banana"], protein: 22, carbs: 28, fat: 2 },
{ type: "Dinner", icon: "🌙", cal: 480, items: ["150g grilled salmon", "1 cup roasted asparagus", "½ cup wild rice", "Lemon butter (minimal, 1 tsp)"], protein: 40, carbs: 38, fat: 14 },
{ type: "Evening", icon: "💤", cal: 100, items: ["1 cup air-popped popcorn (no butter)", "Herbal tea"], protein: 3, carbs: 20, fat: 1 },
]
},
{
day: "Sunday", theme: "Reset & Prepare",
meals: [
{ type: "Breakfast", icon: "🌅", cal: 400, items: ["Veggie omelette: 3 eggs + spinach + mushroom + tomato", "1 slice whole wheat toast", "½ cup fresh fruit", "Green tea"], protein: 28, carbs: 34, fat: 14 },
{ type: "Snack", icon: "🍓", cal: 100, items: ["1 cup mixed berries", "1 tbsp sunflower seeds"], protein: 3, carbs: 20, fat: 4 },
{ type: "Lunch", icon: "☀️", cal: 470, items: ["150g lean ground turkey bowl", "Brown rice + black beans", "Salsa + lime + cilantro", "Shredded lettuce"], protein: 44, carbs: 44, fat: 8 },
{ type: "Snack", icon: "🥛", cal: 120, items: ["1 cup low-fat Greek yogurt", "1 tsp honey + walnuts (5 halves)"], protein: 14, carbs: 14, fat: 6 },
{ type: "Dinner", icon: "🌙", cal: 470, items: ["150g roasted chicken thigh (skinless)", "1 cup roasted root vegetables", "Large green salad", "Olive oil + lemon dressing"], protein: 36, carbs: 42, fat: 12 },
{ type: "Evening", icon: "💤", cal: 140, items: ["1 boiled egg", "½ cup edamame", "Peppermint tea"], protein: 14, carbs: 10, fat: 6 },
]
},
];

// ─── WORKOUT PLAN ──────────────────────────────────────────
const WORKOUTS = [
{
day: "Monday", focus: "Upper Body", color: "#3b82f6",
treadmill: { duration: "20 min", speed: "2.5–3 mph", mode: "Steady Walk", cal: 120 },
exercises: [
{ name: "Seated Dumbbell Curl", sets: 3, reps: "12", weight: "5–10 lb", tip: "Sit on chair, elbows at sides, curl slow" },
{ name: "Seated Shoulder Press", sets: 3, reps: "10", weight: "5–8 lb", tip: "Sit upright, press up, exhale on press" },
{ name: "Chest Press (Floor)", sets: 3, reps: "10", weight: "8–12 lb", tip: "Lie on floor, feet flat, press straight up" },
{ name: "One-Arm Dumbbell Row", sets: 3, reps: "12 each", weight: "8–12 lb", tip: "Knee on bench, pull elbow to hip" },
]
},
{
day: "Tuesday", focus: "Cardio Focus", color: "#10b981",
treadmill: { duration: "30 min", speed: "2.5–3.5 mph", mode: "Intervals", cal: 190 },
exercises: [
{ name: "Dumbbell Side Bend", sets: 2, reps: "15 each", weight: "5–8 lb", tip: "Stand tall, bend sideways at waist only" },
{ name: "Standing Calf Raise", sets: 3, reps: "15", weight: "5 lb each", tip: "Rise on toes, squeeze at top, slow down" },
]
},
{
day: "Wednesday", focus: "Active Rest", color: "#8b5cf6",
treadmill: { duration: "15 min", speed: "1.5–2 mph", mode: "Easy Walk", cal: 70 },
exercises: [
{ name: "Overhead Tricep Extension", sets: 2, reps: "12", weight: "5 lb", tip: "Hold 1 dumbbell with both hands, lower behind head" },
{ name: "Wrist Curl", sets: 2, reps: "15", weight: "3–5 lb", tip: "Forearm on knee, wrist only moves" },
]
},
{
day: "Thursday", focus: "Lower Body", color: "#f59e0b",
treadmill: { duration: "20 min", speed: "2.5–3 mph", mode: "Steady Walk", cal: 120 },
exercises: [
{ name: "Chair Squat", sets: 3, reps: "10", weight: "8–12 lb each", tip: "Touch chair seat then stand. Safe on knees." },
{ name: "Dumbbell Deadlift", sets: 3, reps: "10", weight: "10–15 lb each", tip: "Hinge at hips, back flat, look forward" },
{ name: "Reverse Lunge", sets: 3, reps: "8 each", weight: "5–8 lb each", tip: "Step BACKWARD, easier on knees" },
{ name: "Standing Hip Abduction", sets: 2, reps: "12 each", weight: "5 lb", tip: "Hold wall, lift leg to side slowly" },
]
},
{
day: "Friday", focus: "Full Body", color: "#ef4444",
treadmill: { duration: "25 min", speed: "3–3.5 mph", mode: "Best Effort", cal: 165 },
exercises: [
{ name: "Curl to Press", sets: 3, reps: "10", weight: "5–8 lb", tip: "Curl up then press overhead, one fluid move" },
{ name: "Goblet Squat", sets: 3, reps: "10", weight: "10–15 lb", tip: "Hold 1 dumbbell at chest, squat deep" },
{ name: "Bent-Over Row", sets: 3, reps: "12", weight: "8–12 lb each", tip: "45° hinge, pull to stomach, squeeze blades" },
{ name: "Lateral Raise", sets: 3, reps: "12", weight: "3–5 lb", tip: "Raise to shoulder height ONLY. Light weight." },
]
},
{
day: "Saturday", focus: "Cardio + Core", color: "#06b6d4",
treadmill: { duration: "35 min", speed: "2.5–3 mph", mode: "Long Walk", cal: 220 },
exercises: [
{ name: "Dumbbell Crunch", sets: 3, reps: "12", weight: "5 lb on chest", tip: "Partial crunch only. No full sit-up." },
{ name: "Seated Russian Twist", sets: 3, reps: "10 each", weight: "3–5 lb", tip: "Lean back slightly, twist slow left/right" },
]
},
{
day: "Sunday", focus: "Full Rest", color: "#64748b",
treadmill: { duration: "Optional 10 min", speed: "1.5 mph", mode: "Leisure Only", cal: 40 },
exercises: []
},
];

const DAYS_SHORT = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

// ─── MAIN APP ──────────────────────────────────────────────
export default function HealthApp() {
const [tab, setTab] = useState("dashboard");
const [foodLog, setFoodLog] = useState([]);
const [activeDay, setActiveDay] = useState(0);
const [activeMealDay, setActiveMealDay] = useState(0);
const [completedEx, setCompletedEx] = useState({});
const [treadDone, setTreadDone] = useState({});
const [expandedMeal, setExpandedMeal] = useState(null);
const [image, setImage] = useState(null);
const [imageB64, setImageB64] = useState(null);
const [scanResult, setScanResult] = useState(null);
const [scanning, setScanning] = useState(false);
const [startWeight] = useState(315);
const [currentWeight, setCurrentWeight] = useState(315);
const [weightInput, setWeightInput] = useState("");
const fileRef = useRef();

const totalEaten = foodLog.reduce((s, f) => s + f.cal, 0);
const remaining = PROFILE.dailyCal - totalEaten;
const calProgress = Math.min((totalEaten / PROFILE.dailyCal) * 100, 100);
const lostSoFar = startWeight - currentWeight;
const goalProgress = Math.min((lostSoFar / 100) * 100, 100);
const workout = WORKOUTS[activeDay];
const mealDay = MEAL_PLAN[activeMealDay];
const totalMealCal = mealDay.meals.reduce((s, m) => s + m.cal, 0);
const doneEx = workout.exercises.filter((_, i) => completedEx[`${activeDay}-${i}`]).length;

const handleFile = (file) => {
if (!file || !file.type.startsWith("image/")) return;
const reader = new FileReader();
reader.onload = (e) => { setImage(e.target.result); setImageB64(e.target.result.split(",")[1]); setScanResult(null); };
reader.readAsDataURL(file);
};

const scanFood = async () => {
if (!imageB64) return;
setScanning(true); setScanResult(null);
try {
// ⚠️ IMPORTANT: This API call will NOT work without authentication
// You need to set up a backend API endpoint that handles the Anthropic API key securely
// For now, this will fail with a CORS or authentication error
// TODO: Create a backend endpoint at your-domain.com/api/scan-food
const res = await fetch("https://api.anthropic.com/v1/messages", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
model: "claude-sonnet-4-20250514", max_tokens: 1000,
messages: [{ role: "user", content: [
{ type: "image", source: { type: "base64", media_type: "image/jpeg", data: imageB64 } },
{ type: "text", text: `You are a clinical nutritionist AI. Analyze this food image. Respond ONLY with valid JSON, no markdown:
{"foodName":"dish name","servingSize":"estimated portion","totalCalories":000,"macros":{"protein":0,"carbs":0,"fat":0,"fiber":0},"ingredients":[{"name":"item","calories":0,"amount":"amount"}],"healthNote":"one tip for high blood pressure + weight loss patient","confidence":"high/medium/low"}` }
]}]
})
});
const data = await res.json();
const text = data.content.find(b => b.type === "text")?.text || "";
setScanResult(JSON.parse(text.replace(/```json|```/g, "").trim()));
} catch (err) { 
setScanResult({ error: "Scanner needs backend setup. Check console for details." });
console.error("Food scanner error:", err);
console.log("To fix: Create a backend API endpoint that securely calls Anthropic API with your API key");
}
setScanning(false);
};

const addToLog = () => {
if (!scanResult || scanResult.error) return;
setFoodLog(p => [...p, { name: scanResult.foodName, cal: scanResult.totalCalories, macros: scanResult.macros, img: image, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
setImage(null); setImageB64(null); setScanResult(null);
};

const barCol = remaining < 0 ? "#f87171" : remaining < 200 ? "#fbbf24" : "#4ade80";

return (
<div style={{ fontFamily: "'DM Sans', sans-serif", background: "#070b14", minHeight: "100vh", color: "#e2e8f0", maxWidth: 540, margin: "0 auto", paddingBottom: 80 }}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@500&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:#1e293b;border-radius:4px;}
.btn{border:none;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.18s;}
.card{background:#0f1724;border:1px solid #1e2d45;border-radius:16px;padding:16px;}
.tab-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:540px;background:#070b14;border-top:1px solid #1e2d45;display:flex;z-index:100;padding:8px 4px 10px;}
.nav-btn{flex:1;background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 4px;font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600;letter-spacing:0.5px;color:#475569;transition:color 0.2s;}
.nav-btn.active{color:#38bdf8;}
.nav-icon{font-size:20px;}
.slide-in{animation:slideIn 0.28s ease-out;}
@keyframes slideIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.pulse{animation:pulse 1.3s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
.glow{box-shadow:0 0 20px #38bdf820;}
.meal-row{border-radius:12px;padding:12px 14px;margin-bottom:8px;cursor:pointer;transition:all 0.18s;border:1px solid #1e2d45;background:#0a1120;}
.meal-row:hover{border-color:#38bdf840;background:#0f1b2e;}
.ex-card{border-radius:12px;padding:14px;margin-bottom:9px;cursor:pointer;transition:all 0.18s;border:1.5px solid #1e2d45;background:#0a1120;}
.ex-card:hover{transform:translateX(3px);}
.drop-zone{border:2px dashed #1e2d45;border-radius:14px;padding:32px 16px;text-align:center;cursor:pointer;transition:all 0.2s;background:#0a1120;}
.drop-zone:hover{border-color:#38bdf860;}
.day-pill{flex:1;border:none;cursor:pointer;border-radius:8px;padding:7px 2px;font-family:'DM Mono',monospace;font-weight:500;font-size:11px;letter-spacing:0.5px;transition:all 0.18s;}
.progress-bar{height:10px;background:#0a1120;border-radius:8px;overflow:hidden;margin:6px 0;}
.progress-fill{height:100%;border-radius:8px;transition:width 0.6s ease;}
.macro-pill{flex:1;background:#0a1120;border-radius:10px;padding:9px 6px;text-align:center;}
.remove-btn{background:none;border:none;color:#334155;cursor:pointer;font-size:13px;padding:3px 6px;border-radius:4px;transition:color 0.15s;}
.remove-btn:hover{color:#f87171;}
.weight-input{background:#0a1120;border:1px solid #1e2d45;color:#e2e8f0;border-radius:10px;padding:10px 14px;font-family:'DM Sans',sans-serif;font-size:15px;width:100%;outline:none;}
.weight-input:focus{border-color:#38bdf8;}
.update-btn{background:#38bdf8;color:#070b14;border:none;border-radius:10px;padding:10px 20px;font-weight:700;font-family:'DM Sans',sans-serif;cursor:pointer;font-size:14px;transition:opacity 0.15s;}
.update-btn:hover{opacity:0.85;}
`}</style>

{/* ── DASHBOARD ── */}
{tab === "dashboard" && (
<div className="slide-in" style={{ padding: "24px 16px 16px" }}>
<div style={{ marginBottom: 22 }}>
<div style={{ fontSize: 11, color: "#475569", letterSpacing: 2, marginBottom: 4 }}>YOUR HEALTH JOURNEY</div>
<h1 style={{ fontSize: 26, fontWeight: 700, background: "linear-gradient(90deg,#38bdf8,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
Transform Dashboard
</h1>
</div>

{/* Stats Row */}
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
{[
{ label: "Current", val: `${currentWeight}`, unit: "lbs", color: "#38bdf8" },
{ label: "Lost", val: `${lostSoFar}`, unit: "lbs", color: "#4ade80" },
{ label: "To Goal", val: `${Math.max(0, currentWeight - PROFILE.goal)}`, unit: "lbs", color: "#f472b6" },
].map(s => (
<div className="card" key={s.label} style={{ textAlign: "center", padding: "14px 8px" }}>
<div style={{ fontSize: 24, fontWeight: 700, color: s.color, fontFamily: "'DM Mono'" }}>{s.val}</div>
<div style={{ fontSize: 10, color: "#475569", marginTop: 1 }}>{s.unit} · {s.label}</div>
</div>
))}
</div>

{/* Goal Progress */}
<div className="card" style={{ marginBottom: 14 }}>
<div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
<span style={{ fontWeight: 600, fontSize: 14 }}>🏆 100 lb Goal Progress</span>
<span style={{ fontSize: 13, color: "#4ade80", fontFamily: "'DM Mono'", fontWeight: 600 }}>{goalProgress.toFixed(1)}%</span>
</div>
<div className="progress-bar">
<div className="progress-fill" style={{ width: `${goalProgress}%`, background: "linear-gradient(90deg,#4ade80,#38bdf8)" }} />
</div>
<div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#475569", marginTop: 4 }}>
<span>{PROFILE.weight} lbs start</span><span>Target: {PROFILE.goal} lbs</span>
</div>
</div>

{/* Today's Calories */}
<div className="card" style={{ marginBottom: 14 }}>
<div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
<span style={{ fontWeight: 600, fontSize: 14 }}>🍽️ Today's Calories</span>
<span style={{ fontSize: 13, color: barCol, fontFamily: "'DM Mono'", fontWeight: 600 }}>
{remaining < 0 ? `${Math.abs(remaining)} over` : `${remaining} left`}
</span>
</div>
<div className="progress-bar">
<div className="progress-fill" style={{ width: `${calProgress}%`, background: `linear-gradient(90deg,#38bdf8,${barCol})` }} />
</div>
<div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#475569", marginTop: 4 }}>
<span><b style={{ color: "#e2e8f0" }}>{totalEaten}</b> eaten</span>
<span>Goal: <b style={{ color: "#e2e8f0" }}>{PROFILE.dailyCal}</b> cal</span>
</div>
</div>

{/* Update Weight */}
<div className="card" style={{ marginBottom: 14 }}>
<div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10 }}>⚖️ Update My Weight</div>
<div style={{ display: "flex", gap: 10 }}>
<input className="weight-input" type="number" placeholder="Enter current weight (lbs)" value={weightInput} onChange={e => setWeightInput(e.target.value)} />
<button className="update-btn" onClick={() => { if (weightInput) { setCurrentWeight(parseFloat(weightInput)); setWeightInput(""); } }}>Save</button>
</div>
</div>

{/* Safe Loss Timeline */}
<div className="card" style={{ marginBottom: 14, background: "#0a1a12", borderColor: "#14532d" }}>
<div style={{ fontWeight: 600, fontSize: 14, color: "#4ade80", marginBottom: 12 }}>📅 Your Realistic Timeline</div>
{[
{ period: "Month 1–2", loss: "16–20 lbs", total: "~295 lbs", note: "Body adjusting, habits forming" },
{ period: "Month 3–4", loss: "18–22 lbs", total: "~275 lbs", note: "Momentum building, energy rising" },
{ period: "Month 5–6", loss: "18–22 lbs", total: "~255 lbs", note: "Visible transformation" },
{ period: "Month 7–9", loss: "20–25 lbs", total: "~230 lbs", note: "Major health improvements" },
{ period: "Month 10–12", loss: "15–18 lbs", total: "~215 lbs", note: "Goal reached. 100 lbs gone." },
].map((t, i) => (
<div key={i} style={{ display: "flex", gap: 12, paddingBottom: 10, marginBottom: 10, borderBottom: i < 4 ? "1px solid #14532d" : "none" }}>
<div style={{ width: 3, background: "#4ade80", borderRadius: 4, flexShrink: 0, opacity: 0.6 }} />
<div style={{ flex: 1 }}>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<span style={{ fontWeight: 600, fontSize: 13 }}>{t.period}</span>
<span style={{ fontFamily: "'DM Mono'", fontSize: 12, color: "#4ade80" }}>-{t.loss}</span>
</div>
<div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>{t.total} · {t.note}</div>
</div>
</div>
))}
</div>

{/* BP Safety */}
<div className="card" style={{ background: "#1a0a0a", borderColor: "#7f1d1d" }}>
<div style={{ fontWeight: 600, fontSize: 13, color: "#f87171", marginBottom: 10 }}>⚠️ High Blood Pressure Rules</div>
{["Stop if chest pain, dizziness, or shortness of breath", "Never hold breath during exercise. Exhale on effort.", "Drink water constantly throughout the day", "Take BP medication as prescribed, do not skip", "Rest 60–90 sec between every exercise set"].map((r, i) => (
<div key={i} style={{ fontSize: 12, color: "#94a3b8", padding: "6px 0", borderBottom: i < 4 ? "1px solid #2d0f0f" : "none" }}>🔴 {r}</div>
))}
</div>
</div>
)}

{/* ── FOOD SCANNER ── */}
{tab === "scanner" && (
<div className="slide-in" style={{ padding: "24px 16px 16px" }}>
<div style={{ marginBottom: 18 }}>
<div style={{ fontSize: 11, color: "#475569", letterSpacing: 2, marginBottom: 4 }}>AI-POWERED</div>
<h2 style={{ fontSize: 24, fontWeight: 700, color: "#e2e8f0" }}>📷 Food Scanner</h2>
<p style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>Photo your food, get instant calorie breakdown</p>
</div>

{/* Daily bar */}
<div className="card" style={{ marginBottom: 16 }}>
<div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
<span style={{ fontSize: 13, fontWeight: 600 }}>Today: {totalEaten} / {PROFILE.dailyCal} cal</span>
<span style={{ fontSize: 13, color: barCol, fontWeight: 700 }}>{remaining < 0 ? `⚠️ ${Math.abs(remaining)} over` : `${remaining} left`}</span>
</div>
<div className="progress-bar">
<div className="progress-fill" style={{ width: `${calProgress}%`, background: `linear-gradient(90deg,#38bdf8,${barCol})` }} />
</div>
</div>

{/* Upload */}
<div className="card" style={{ marginBottom: 16 }}>
<div className="drop-zone" onClick={() => fileRef.current.click()}>
{image
? <img src={image} alt="food" style={{ maxHeight: 200, maxWidth: "100%", borderRadius: 10, objectFit: "cover" }} />
: <div><div style={{ fontSize: 40, marginBottom: 8 }}>📸</div><div style={{ color: "#475569", fontSize: 14 }}>Tap to upload food photo</div><div style={{ color: "#334155", fontSize: 12, marginTop: 4 }}>JPG · PNG · HEIC</div></div>
}
</div>
<input ref={fileRef} type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} />
{image && (
<div style={{ display: "flex", gap: 10, marginTop: 12 }}>
<button className="btn" onClick={scanFood} disabled={scanning} style={{ flex: 1, background: "linear-gradient(135deg,#0284c7,#38bdf8)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px", borderRadius: 12, opacity: scanning ? 0.5 : 1 }}>
{scanning ? <span className="pulse">🔍 Analyzing...</span> : "🔬 Scan Calories"}
</button>
<button className="btn" onClick={() => { setImage(null); setImageB64(null); setScanResult(null); }} style={{ background: "#0f1724", border: "1px solid #1e2d45", color: "#64748b", borderRadius: 12, padding: "0 16px", fontSize: 13 }}>Clear</button>
</div>
)}
</div>

{/* Scan Result */}
{scanResult && !scanResult.error && (
<div className="card slide-in" style={{ marginBottom: 16, borderColor: "#0284c7" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
<div>
<div style={{ fontSize: 18, fontWeight: 700 }}>{scanResult.foodName}</div>
<div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{scanResult.servingSize}</div>
</div>
<div style={{ textAlign: "right" }}>
<div style={{ fontSize: 32, fontWeight: 700, color: "#4ade80", fontFamily: "'DM Mono'" }}>{scanResult.totalCalories}</div>
<div style={{ fontSize: 11, color: "#475569" }}>cal</div>
</div>
</div>
<div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
{[["Protein", scanResult.macros?.protein, "g", "#60a5fa"], ["Carbs", scanResult.macros?.carbs, "g", "#fbbf24"], ["Fat", scanResult.macros?.fat, "g", "#f87171"], ["Fiber", scanResult.macros?.fiber, "g", "#34d399"]].map(([l, v, u, c]) => (
<div className="macro-pill" key={l}>
<div style={{ fontSize: 15, fontWeight: 700, color: c, fontFamily: "'DM Mono'" }}>{v}{u}</div>
<div style={{ fontSize: 10, color: "#475569", marginTop: 1 }}>{l}</div>
</div>
))}
</div>
{scanResult.ingredients?.map((ing, i) => (
<div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #1e2d45", fontSize: 13 }}>
<span style={{ color: "#94a3b8" }}>{ing.name} <span style={{ color: "#334155" }}>({ing.amount})</span></span>
<span style={{ color: "#4ade80", fontWeight: 600, fontFamily: "'DM Mono'" }}>{ing.calories}</span>
</div>
))}
{scanResult.healthNote && <div style={{ background: "#0a1a12", border: "1px solid #14532d", borderRadius: 10, padding: "10px 12px", marginTop: 12, fontSize: 13, color: "#4ade80" }}>💡 {scanResult.healthNote}</div>}
<button className="btn" onClick={addToLog} style={{ width: "100%", marginTop: 12, background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px", borderRadius: 12 }}>＋ Add to Log</button>
</div>
)}
{scanResult?.error && <div className="card" style={{ borderColor: "#f87171", color: "#f87171", textAlign: "center", marginBottom: 14 }}>⚠️ {scanResult.error}</div>}

{/* Log */}
{foodLog.length > 0 && (
<div className="card">
<div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>📋 Today's Log</div>
{foodLog.map((item, i) => (
<div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < foodLog.length - 1 ? "1px solid #1e2d45" : "none" }}>
{item.img && <img src={item.img} alt="" style={{ width: 42, height: 42, borderRadius: 8, objectFit: "cover" }} />}
<div style={{ flex: 1 }}>
<div style={{ fontWeight: 600, fontSize: 13 }}>{item.name}</div>
<div style={{ fontSize: 11, color: "#475569" }}>{item.time} · P:{item.macros?.protein}g C:{item.macros?.carbs}g F:{item.macros?.fat}g</div>
</div>
<span style={{ fontWeight: 700, color: "#4ade80", fontFamily: "'DM Mono'", fontSize: 14 }}>{item.cal}</span>
<button className="remove-btn" onClick={() => setFoodLog(p => p.filter((_, j) => j !== i))}>✕</button>
</div>
))}
<div style={{ display: "flex", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid #1e2d45", fontWeight: 700, fontSize: 14, marginTop: 4 }}>
<span>Total</span><span style={{ color: barCol, fontFamily: "'DM Mono'" }}>{totalEaten} cal</span>
</div>
</div>
)}
</div>
)}

{/* ── MEAL PLAN ── */}
{tab === "meals" && (
<div className="slide-in" style={{ padding: "24px 16px 16px" }}>
<div style={{ marginBottom: 18 }}>
<div style={{ fontSize: 11, color: "#475569", letterSpacing: 2, marginBottom: 4 }}>1,800 CAL/DAY TARGET</div>
<h2 style={{ fontSize: 24, fontWeight: 700, color: "#e2e8f0" }}>🥗 Meal Plan</h2>
<p style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>Tailored for BP control and 2+ lbs/week loss</p>
</div>

{/* Day selector */}
<div style={{ display: "flex", gap: 5, marginBottom: 16 }}>
{MEAL_PLAN.map((d, i) => (
<button key={i} className="day-pill" onClick={() => { setActiveMealDay(i); setExpandedMeal(null); }} style={{
background: activeMealDay === i ? "#0284c7" : "#0f1724",
color: activeMealDay === i ? "#fff" : "#475569",
border: activeMealDay === i ? "none" : "1px solid #1e2d45",
transform: activeMealDay === i ? "translateY(-2px)" : "none",
}}>{DAYS_SHORT[i]}</button>
))}
</div>

<div className="card" style={{ marginBottom: 14, background: "#0a0f1a", borderColor: "#0284c7" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ fontWeight: 700, fontSize: 17 }}>{mealDay.day}</div>
<div style={{ fontSize: 12, color: "#38bdf8", marginTop: 2 }}>{mealDay.theme}</div>
</div>
<div style={{ textAlign: "right" }}>
<div style={{ fontSize: 24, fontWeight: 700, color: "#38bdf8", fontFamily: "'DM Mono'" }}>{totalMealCal}</div>
<div style={{ fontSize: 11, color: "#475569" }}>total cal</div>
</div>
</div>
</div>

{mealDay.meals.map((meal, i) => (
<div key={i} className="meal-row" onClick={() => setExpandedMeal(expandedMeal === i ? null : i)}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
<span style={{ fontSize: 22 }}>{meal.icon}</span>
<div>
<div style={{ fontWeight: 600, fontSize: 14 }}>{meal.type}</div>
<div style={{ fontSize: 11, color: "#475569", marginTop: 1 }}>P:{meal.protein}g · C:{meal.carbs}g · F:{meal.fat}g</div>
</div>
</div>
<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
<span style={{ fontWeight: 700, fontFamily: "'DM Mono'", color: "#38bdf8", fontSize: 16 }}>{meal.cal}</span>
<span style={{ color: "#334155", fontSize: 12 }}>{expandedMeal === i ? "▲" : "▼"}</span>
</div>
</div>
{expandedMeal === i && (
<div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #1e2d45" }}>
{meal.items.map((item, j) => (
<div key={j} style={{ fontSize: 13, color: "#94a3b8", padding: "5px 0", display: "flex", gap: 8 }}>
<span style={{ color: "#38bdf8" }}>•</span>{item}
</div>
))}
</div>
)}
</div>
))}

<div className="card" style={{ marginTop: 4, background: "#0a1a12", borderColor: "#14532d" }}>
<div style={{ fontWeight: 600, fontSize: 13, color: "#4ade80", marginBottom: 8 }}>💧 Daily Hydration Rule</div>
<div style={{ fontSize: 13, color: "#94a3b8" }}>At your weight, drink minimum <b style={{ color: "#e2e8f0" }}>12–14 cups (3 liters)</b> of water daily. This is critical for blood pressure control AND weight loss. Set alarms if needed.</div>
</div>
</div>
)}

{/* ── WORKOUT ── */}
{tab === "workout" && (
<div className="slide-in" style={{ padding: "24px 16px 16px" }}>
<div style={{ marginBottom: 14 }}>
<div style={{ fontSize: 11, color: "#475569", letterSpacing: 2, marginBottom: 4 }}>BP-SAFE · BEGINNER</div>
<h2 style={{ fontSize: 24, fontWeight: 700, color: "#e2e8f0" }}>🏋️ Workout Plan</h2>
</div>

{/* Day selector */}
<div style={{ display: "flex", gap: 5, marginBottom: 14 }}>
{WORKOUTS.map((w, i) => (
<button key={i} className="day-pill" onClick={() => setActiveDay(i)} style={{
background: activeDay === i ? w.color : "#0f1724",
color: activeDay === i ? "#fff" : "#475569",
border: activeDay === i ? "none" : "1px solid #1e2d45",
transform: activeDay === i ? "translateY(-2px)" : "none",
}}>{DAYS_SHORT[i]}</button>
))}
</div>

{/* Day Header */}
<div className="card" style={{ marginBottom: 14, background: "#0a0f1a", borderColor: workout.color }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ fontWeight: 700, fontSize: 18 }}>{workout.day}</div>
<div style={{ fontSize: 13, color: workout.color, marginTop: 2 }}>{workout.focus}</div>
</div>
<div style={{ textAlign: "right" }}>
<div style={{ fontSize: 11, color: "#475569" }}>BURN EST.</div>
<div style={{ fontSize: 26, fontWeight: 700, color: workout.color, fontFamily: "'DM Mono'" }}>{workout.treadmill.cal}</div>
<div style={{ fontSize: 11, color: "#475569" }}>cal</div>
</div>
</div>
{workout.exercises.length > 0 && (
<div style={{ marginTop: 10 }}>
<div className="progress-bar" style={{ height: 6 }}>
<div className="progress-fill" style={{ width: `${((doneEx + (treadDone[activeDay] ? 1 : 0)) / (workout.exercises.length + 1)) * 100}%`, background: workout.color }} />
</div>
<div style={{ fontSize: 11, color: "#475569", marginTop: 4 }}>{doneEx + (treadDone[activeDay] ? 1 : 0)} / {workout.exercises.length + 1} completed</div>
</div>
)}
</div>

{/* Treadmill */}
<div className="card" style={{ marginBottom: 14, borderColor: treadDone[activeDay] ? workout.color : "#1e2d45", background: treadDone[activeDay] ? "#0a1420" : "#0f1724" }}>
<div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
<div>
<div style={{ fontSize: 11, color: workout.color, letterSpacing: 1, fontWeight: 700 }}>TREADMILL</div>
<div style={{ fontWeight: 700, fontSize: 17, marginTop: 3 }}>🏃 {workout.treadmill.mode}</div>
<div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{workout.treadmill.speed}</div>
</div>
<div style={{ fontSize: 28, fontWeight: 700, color: workout.color, fontFamily: "'DM Mono'", alignSelf: "center" }}>{workout.treadmill.duration}</div>
</div>
<button className="btn" onClick={() => setTreadDone(p => ({ ...p, [activeDay]: !p[activeDay] }))} style={{ width: "100%", padding: "12px", borderRadius: 10, fontWeight: 700, fontSize: 14, background: treadDone[activeDay] ? workout.color : "#1e2d45", color: treadDone[activeDay] ? "#070b14" : "#64748b" }}>
{treadDone[activeDay] ? "✅ Treadmill Done!" : "Mark Treadmill Complete"}
</button>
</div>

{/* Exercises */}
{workout.exercises.length > 0 ? (
<div>
<div style={{ fontSize: 11, color: "#475569", letterSpacing: 1.5, fontWeight: 700, marginBottom: 10 }}>DUMBBELL EXERCISES</div>
{workout.exercises.map((ex, i) => {
const done = completedEx[`${activeDay}-${i}`];
return (
<div key={i} className="ex-card" onClick={() => setCompletedEx(p => ({ ...p, [`${activeDay}-${i}`]: !p[`${activeDay}-${i}`] }))}
style={{ borderColor: done ? workout.color : "#1e2d45", background: done ? "#0a1420" : "#0a1120", opacity: done ? 0.85 : 1 }}>
<div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
<div style={{ width: 30, height: 30, borderRadius: "50%", border: `2px solid ${done ? workout.color : "#334155"}`, background: done ? workout.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: done ? "#070b14" : "#475569", fontWeight: 700, flexShrink: 0 }}>
{done ? "✓" : i + 1}
</div>
<div style={{ flex: 1 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div style={{ fontWeight: 700, fontSize: 15 }}>{ex.name}</div>
<span style={{ fontSize: 11, fontWeight: 700, color: workout.color, background: "#0a1120", border: `1px solid ${workout.color}40`, padding: "2px 8px", borderRadius: 20 }}>{ex.weight}</span>
</div>
<div style={{ fontSize: 12, color: "#475569", marginTop: 3 }}>{ex.sets} sets · {ex.reps} reps</div>
<div style={{ fontSize: 12, color: "#334155", marginTop: 5, fontStyle: "italic" }}>💡 {ex.tip}</div>
</div>
</div>
</div>
);
})}
</div>
) : (
<div className="card" style={{ textAlign: "center", padding: "30px 20px" }}>
<div style={{ fontSize: 44, marginBottom: 10 }}>😴</div>
<div style={{ fontWeight: 700, fontSize: 18, color: "#475569" }}>Rest Day</div>
<div style={{ fontSize: 13, color: "#334155", marginTop: 8, lineHeight: 1.6 }}>Your muscles repair and grow on rest days. This is not laziness. This is strategy. Stay hydrated and sleep well.</div>
</div>
)}
</div>
)}

{/* ── BOTTOM NAV ── */}
<nav className="tab-nav">
{[
{ id: "dashboard", icon: "📊", label: "Dashboard" },
{ id: "scanner", icon: "📷", label: "Scanner" },
{ id: "meals", icon: "🥗", label: "Meals" },
{ id: "workout", icon: "🏋️", label: "Workout" },
].map(n => (
<button key={n.id} className={`nav-btn ${tab === n.id ? "active" : ""}`} onClick={() => setTab(n.id)}>
<span className="nav-icon">{n.icon}</span>
{n.label}
</button>
))}
</nav>
</div>
);
}
